import Link from 'next/link'
import Date from '../components/date'


export default function PostsSection({ posts, title }) {
    return (
        <>
            <h2 >{title}</h2>
            <ul >
                {posts.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}