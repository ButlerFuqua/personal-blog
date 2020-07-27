import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'
import Router from 'next/router'

const PostsList = styled.ul`
    padding: 0;
    margin: 0;

`

const Li = styled.li`

    list-style: none;
    margin: 1rem 0;
    border-radius: 5px;
    padding: 1rem;

    transition: .2s;
    transform: scale(1.0);
    border: 1px solid white;



    &:hover{
       @media(min-width: 769px){
        // transform: scale(1.02);
        // box-shadow: 0px 0px 20px 6px rgba(0,0,0, .1);

        border: 1px solid purple;

       }
       
    }

    & button {
        background: purple;
        padding: .3rem .5rem;
        border: purple 2px solid;
        border-radius: 5px;
        color: white;
        cursor: pointer;

        transition: .3s;
        transform: scale(1.0);

        &:hover {
            transform: scale(1.02);
            box-shadow: -3px 3px 2px 0px rgba(0,0,0,.5);

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
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                        <br />
                        <button onClick={() => Router.push(`/${type}/${id}`)}>View</button>
                    </Li>
                ))}
            </PostsList>
        </>
    )
}