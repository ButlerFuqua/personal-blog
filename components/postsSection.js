import Link from 'next/link'
import Date from '../components/date'
import styled from 'styled-components'
import Router from 'next/router'
import { categories } from '../lib/postsInfo'
import { useState } from 'react'
import ProjectLinks from './projectLinks'


const PostsList = styled.ul`
    padding: 0;
    margin: 0;


`

const Li = styled.li`
    background: white;
    list-style: none;
    margin: 0;
    padding: 1rem;
    min-height: 280px;
    position: relative;

    transition: .2s;
    box-shadow: 0 0 0 0 rgb(8 7 7 / 30%);


    & + li {
        margin-top: 1rem;
    }

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
         background: ${({ theme }) => theme.colors.primary};
         color: white;

         
     }
`

const Filterlist = styled.ul`
     margin: 0;
     margin-bottom: 1rem;
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
         border: 1px solid ${({ theme }) => theme.colors.primary};
         color: ${({ theme }) => theme.colors.primary};
         cursor: pointer;
         position: relative;
         bottom: 0;
         transition: .2s;

         &:hover{
            box-shadow: ${({ theme }) => theme.shadow.sm};
            bottom: 3px;
        }

         &.active{
             background: ${({ theme }) => theme.colors.primary};
             color: white;
         }
     }
`


export default function PostsSection({ posts, title, type }) {

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [filteredPosts, setFilteredPosts] = useState(posts)

    // get only the categories that are being used
    const availableCategories = posts.map(post => post.tags).flat().filter(tag => tag).map(tag => tag.toLowerCase())
    const usedCategories = categories.filter(category => availableCategories.indexOf(category.toLowerCase()) !== -1)


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
            {usedCategories.length
                ?
                <Filterlist>
                    <li
                        className={'all' === selectedCategory.toLowerCase() ? 'active' : ''}
                        onClick={() => handleSelectCategory('all')}>
                        All
                    </li>
                    {usedCategories.map(category => (
                        <li
                            className={category.toLowerCase() === selectedCategory.toLowerCase() ? 'active' : ''}
                            key={usedCategories.indexOf(category)}
                            onClick={() => handleSelectCategory(category)}>
                            {category}
                        </li>
                    ))}
                </Filterlist>
                : ''}
            <PostsList usedCategories={usedCategories} >
                {filteredPosts.map(({ id, date, title, tags, excerpt, links }) => (
                    <Li key={id}>
                        <Link href={`/${type}/[id]`} as={`/${type}/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small >
                            <Date dateString={date} />
                        </small>
                        {excerpt
                            ? (<p>{excerpt}</p>)
                            : ''
                        }

                        {/*  If these are projects, add code into */}
                        {type == 'projects' ? <ProjectLinks links={links} /> : ''}

                        {tags
                            ? (<Tags>
                                {tags.map(tag => <li key={tags.indexOf(tag)}>{tag}</li>)}
                            </Tags>)
                            : ''
                        }
                    </Li>
                ))}
            </PostsList>
        </>
    )
}