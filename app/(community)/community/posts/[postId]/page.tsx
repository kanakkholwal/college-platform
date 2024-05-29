import { notFound } from "next/navigation";
import { getSession } from "src/lib/auth";
import { getPostById } from "src/lib/community/actions";
import { sessionType } from "src/types/session";

interface CommunityPostProps {
    params: {
        postId: string;
    }
};

const cache = new Map<string, boolean>();

export default async function CommunityPost({ params }: CommunityPostProps) {
    const session = await getSession() as sessionType;
    const post = await getPostById(params.postId, cache.get(params.postId) || false);

    if (!post) return notFound();
    if (post) {
        cache.set(params.postId, true);
    }
    return (
        <>
            {JSON.stringify(post)}
        </>
    );
}
