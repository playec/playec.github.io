import fs from 'fs';
import path from 'path';


export async function generateStaticParams() {
    // Here you'd fetch or define all the postIds you need
    const posts = await fetch('postId').then(res => res.json());
    return posts.map(post => ({
      postId: post.id.toString() // Ensure the type matches the route param type
    }));
}

export default function Post({ params }) {
    const { postId } = params;
    return <div>Post ID: {postId}</div>;
}