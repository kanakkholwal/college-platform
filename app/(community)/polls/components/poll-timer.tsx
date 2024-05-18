"use client";
import { Badge } from "@/components/ui/badge";
import { formatDuration, intervalToDuration } from 'date-fns';
import { useEffect, useState } from "react";
import { PollType } from 'src/models/poll';


export const ClosingBadge = ({ poll }: { poll: PollType }) => {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const calculateRemainingTime = () => {
            const now = new Date();
            const closesAt = new Date(poll.closesAt);
            const duration = intervalToDuration({ start: now, end: closesAt });
            const formattedDuration = formatDuration(duration, { format: ['minutes', 'seconds'] });
            setRemainingTime(formattedDuration);
        };

        calculateRemainingTime();
        const intervalId = setInterval(calculateRemainingTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [poll.closesAt]);

    return (
        <Badge size="sm" variant="warning" className="mr-auto">
            Closing in: {remainingTime}
        </Badge>
    );
};