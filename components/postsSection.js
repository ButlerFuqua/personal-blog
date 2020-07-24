import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'

const PostsList = styled.ul`
    padding: 0;
    margin: 0;

    & li {
        list-style: none;
        margin: 1rem 0;
        border-radius: 5px;

        transition: .3s;
        transform: scale(1.0)

    }

`

export default function PostsSection({ posts, title, type }) {
    return (
        <>
            <h2 >{title}</h2>
            <PostsList >
                {posts.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/${type}/[id]`} as={`/${type}/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </PostsList>
        </>
    )
}