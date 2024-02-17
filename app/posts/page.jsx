import Post from "@/components/Post"
import prisma from "@/lib/prisma"

async function getPosts() {
    const posts = await prisma.post.findMany({
        where: {
            published: true
        },
        include: {
            author: {
                select: { name: true }
            }
        }
    })
    return posts
}


export default async function page() {

    const posts = await getPosts()

    return (
        <div>
            {posts && posts.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    authorName={post.author.name}
                />
            ))}
        </div>
    )
}
