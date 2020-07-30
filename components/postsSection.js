import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'
import Router from 'next/router'
import { categories } from '../lib/postsInfo'
import { useState } from 'react'


const PostsList = styled.ul`
    padding: 0;
    margin: 0;

`

const Li = styled.li`
    background: white;
    list-style: none;
    margin: 1rem 0;
    padding: 1rem;
    min-height: 280px;
    position: relative;

    transition: .2s;
    box-shadow: 0 0 0 0 rgb(8 7 7 / 30%);




    &:hover{
       @media(min-width: 769px){
        box-shadow: 0 0 20px 0 rgb(8 7 7 / 30%);
       }
       
    }
`

const Tags = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;

     & li {
         list-style: none;
         font-size: .8rem;
         margin: .5rem;
         padding: .2rem .5rem;
         background: #0089e0;
         color: white;

         
     }
`

const Filterlist = styled.ul`
     margin: 0;
     padding: 1rem;
     background: white;
     display: flex;
     justify-content: flex-start;
     flex-wrap: no-wrap;
     overflow-x: auto;
     width: 100%;


     & li {
         list-style: none;
         margin: .5rem;
         padding: .2rem .5rem;
         background: white;
         border: 1px solid #0089e0;
         color: #0089e0;
         cursor: pointer;

         &:hover{
            box-shadow: 0 0 10px 3px rgb(8 7 7 / 30%);
         }

         &.active{
             background: #0089e0;
             color: white;
         }
     }
`


export default function PostsSection({ posts, title, type }) {

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [filteredPosts, setFilteredPosts] = useState(posts)

    const handleSelectCategory = category => {

        setSelectedCategory(category)

        // Return all posts if category is all
        if (category.toLowerCase() === 'all') return setFilteredPosts(posts)

        // filter out posts with selected category
        let f_posts = posts.filter(post => post.tags && post.tags.map(tag => tag.toLowerCase()).indexOf(category.toLowerCase()) !== -1)

        setFilteredPosts(f_posts)

    }


    return (
        <>
            {title
                ? <h2 >{title}</h2>
                : ''}
            <Filterlist>
                {categories.map(category => (
                    <li
                        className={category.toLowerCase() === selectedCategory.toLowerCase() ? 'active' : ''}
                        key={categories.indexOf(category)}
                        onClick={() => handleSelectCategory(category)}>
                        {category}
                    </li>))}
            </Filterlist>
            <PostsList >
                {filteredPosts.map(({ id, date, title, tags }) => (
                    <Li key={id}>
                        <Link href={`/${type}/[id]`} as={`/${type}/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                        <p>This is an excerpt for this post or project, whatever it may be. Gotta make sure to keep this short, but still descriptive enought to inform readers what the post or project is about.</p>
                        {tags
                            ? (<Tags>
                                {tags.map(tag => <li key={tags.indexOf(tag)}>{tag}</li>)}
                            </Tags>)
                            : ''
                        }
                        {/* <Link href={`/${type}/[id]`} as={`/${type}/${id}`}>
                            <a>View</a>
                        </Link> */}
                    </Li>
                ))}
            </PostsList>
        </>
    )
}