"use server";

import { getSession } from "src/lib/auth";
import dbConnect from "src/lib/dbConnect";
import { RawPollType } from 'src/models/poll';


export async function createPoll(pollData:RawPollType) {
    const session = await getSession();
    if (!session) {
        return Promise.reject("You need to be logged in to create a poll");
    }
    try {
        await dbConnect();
        // Validate the poll data
    } catch (err) {
        console.error(err);
        return Promise.reject('Failed to create poll');
    }
}