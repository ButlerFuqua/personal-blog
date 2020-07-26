import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'

const PostsList = styled.ul`
    padding: 0;
    margin: 0;

`

const Li = styled.li`

    list-style: none;
    margin: 1rem 0;
    border-radius: 5px;
    padding: 1rem;

    transition: .4s;
    transform: scale(1.0);


    & .extra {
        font-size: 1rem;
        max-height: 0;
        overflow: hidden;
        transition: .5s;
    }

    &:hover{
       @media(min-width: 769px){
        transform: scale(1.02);
        box-shadow: 0px 0px 20px 6px rgba(0,0,0, .1);

        & .extra {
            max-height: 900px;
        }
       }
    }
`

export default function PostsSection({ posts, title, type }) {
    return (
        <>
            <h2 >{title}</h2>
            <PostsList >
                {posts.map(({ id, date, title }) => (
                    <Li key={id}>
                        <Link href={`/${type}/[id]`} as={`/${type}/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <div className="extra">
                            <p>More information will go here</p>
                        </div>
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                    </Li>
                ))}
            </PostsList>
        </>
    )
}