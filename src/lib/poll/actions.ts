"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "src/lib/auth";
import dbConnect from "src/lib/dbConnect";
import Poll, { PollType, RawPollType } from "src/models/poll";

export async function createPoll(pollData: RawPollType) {
  const session = await getSession();
  if (!session) {
    return Promise.reject("You need to be logged in to create a poll");
  }
  try {
    await dbConnect();
    // Validate the poll data
    const poll = new Poll({
      ...pollData,
      createdBy: session.user._id,
    });
    await poll.save();
    revalidatePath(`/polls`);
    return Promise.resolve("Poll created successfully");
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to create poll");
  }
}
export async function getOpenPolls(): Promise<PollType[]> {
  try {
    await dbConnect();
    const polls = await Poll.find({ closesAt: { $gte: new Date() } });
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}
export async function getClosedPolls(): Promise<PollType[]> {
  try {
    await dbConnect();
    const polls = await Poll.find({ closesAt: { $lt: new Date() } });
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}
export async function getAllPolls(): Promise<PollType[]> {
  try {
    await dbConnect();
    const polls = await Poll.find();
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}

export async function getPollById(id: string): Promise<PollType> {
  try {
    await dbConnect();
    const poll = await Poll.findById(id);
    return Promise.resolve(JSON.parse(JSON.stringify(poll)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch poll");
  }
}
export async function voteOnPoll(
  pollId: string,
  optionId: string
): Promise<PollType> {
  const session = await getSession();
  if (!session) {
    return Promise.reject("You need to be logged in to vote on a poll");
  }
  try {
    await dbConnect();
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return Promise.reject("Poll not found");
    }
    if (poll.votes.includes(session.user._id)) {
      return Promise.reject("You have already voted on this poll");
    }
    poll.votes.push(session.user._id);
    await poll.save();
    return Promise.resolve(JSON.parse(JSON.stringify(poll)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to vote on poll");
  }
}
export async function updateVotes(
  pollId: string,
  voteData: PollType["votes"]
): Promise<PollType> {
  try {
    await dbConnect();
    const poll = await Poll.findById(pollId);
    if (!poll) {
      return Promise.reject("Poll not found");
    }
    poll.votes = voteData;
    await poll.save();
    revalidatePath(`/polls`);
    return Promise.resolve(JSON.parse(JSON.stringify(poll)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to update votes");
  }
}
export async function deletePoll(pollId: string): Promise<void> {
  try {
    await dbConnect();
    await Poll.findByIdAndDelete(pollId);
    revalidatePath(`/polls`);
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to delete poll");
  }
}
// For user
export async function getPollsVotedByUser(userId: string): Promise<PollType[]> {
  try {
    await dbConnect();
    const polls = await Poll.find({
      votes: {
        $in: [
          {
            $elemMatch: {
              userId: userId,
            },
          },
        ],
      },
    });
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}

export async function getPollsCreatedByLoggedInUser(): Promise<PollType[]> {
  try {
    const session = await getSession();
    if (!session) {
      return Promise.reject("You need to be logged in to view your polls");
    }
    await dbConnect();
    const polls = await Poll.find({ createdBy: session.user._id });
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}
export async function getPollsCreatedByUser(
  userId: string
): Promise<PollType[]> {
  try {
    await dbConnect();
    const polls = await Poll.find({ createdBy: userId });
    return Promise.resolve(JSON.parse(JSON.stringify(polls)));
  } catch (err) {
    console.error(err);
    return Promise.reject("Failed to fetch polls");
  }
}
