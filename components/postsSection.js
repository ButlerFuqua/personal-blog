import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function PostsSection({ posts, title }) {
    return (
        <>
            <h2 className={utilStyles.headingLg}>{title}</h2>
            <ul >
                {posts.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href="/posts/[id]" as={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </>
    )
}