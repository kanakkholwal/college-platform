import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PollType } from 'src/models/poll';

export default function PollComponent({ poll }: { poll: PollType }) {
    console.log(poll);

    return (
        <div className="bg-white/10 p-2 rounded-lg mt-2">
            <div className="flex justify-between items-center gap-3 w-full">
                <h3 className="text-lg font-semibold">{poll.question}</h3>
                <Badge variant="default_light">
                    Closes at: {new Date(poll.closesAt).toLocaleTimeString()}
                </Badge>
            </div>
            <p className="text-sm">{poll.description}</p>
            <div className="flex justify-between space-x-6 mx-auto max-w-sm">
                <div className="relative w-full space-y-1.5">
                    {poll.options.map((option, index) => (
                        <div key={index} className="group w-full flex items-center rounded-tremor-small">
                            <div className="flex items-center rounded transition-all bg-opacity-40 h-8 bg-tremor-brand-subtle dark:bg-dark-tremor-brand-subtle/60"
                                style={{ width: `${parseVotes(poll.votes, option).percent}%` }}>
                                <div className="absolute left-2 pr-4 flex max-w-full">
                                    <p className="tremor-BarList-barText whitespace-nowrap truncate text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                                        {option}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tremor-BarList-labels">
                    {poll.options.map((option, index) => (
                        <div key={index} className="flex justify-end items-center h-8 mb-1.5">
                            <p className="whitespace-nowrap leading-none truncate text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                                {parseVotes(poll.votes, option).count}%
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex items-center justify-end gap-2">
                <Badge variant="default_light">
                    {poll.votes.length} votes
                </Badge>
                <Badge variant="default_light">
                    {poll.multipleChoice ? 'Multiple choice' : 'Single choice'}
                </Badge>
                <Button variant="default_light" size="sm" asChild>
                    <Link href={`/polls/${poll._id}`}>
                        Vote
                    </Link>
                </Button>

            </div>

        </div>
    )
}
function parseVotes(votes: { option: string, userId: string }[], option: string) {
    return {
        option,
        count: votes.filter(vote => vote.option === option).length,
        percent: (votes.filter(vote => vote.option === option).length / votes.length) * 100,
    }
}