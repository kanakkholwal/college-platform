import { notFound } from "next/navigation";
import { getSession } from "src/lib/auth";
import { getPostById } from "src/lib/community/actions";
import { sessionType } from "src/types/session";

interface CommunityPostProps {
    params: {
        postId: string;
    }
}

export default async function CommunityPost({ params }: CommunityPostProps) {
    const session = await getSession() as sessionType;
    const post = await getPostById(params.postId);

    if (!post) return notFound();

    return (
        <>
        {JSON.stringify(post)}
        </>
    );
}
