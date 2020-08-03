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

const Tags = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
`


const TagLi = styled.li`
    list-style: none;
    font-size: .8rem;
    margin: .5rem;
    padding: .2rem .5rem;
    background: ${({ theme, selected }) => selected ? theme.colors.primary : 'white'};
    color:  ${({ theme, selected }) => selected ? 'white' : theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary}
`

export default function PostsSection({ posts, title, type }) {

    const [selectedCategories, setSelectedCategories] = useState(['all'])
    const [filteredPosts, setFilteredPosts] = useState(posts)

    // get only the categories that are being used
    const availableCategories = posts.map(post => post.tags).flat().filter(tag => tag).map(tag => tag.toLowerCase())
    const usedCategories = categories.filter(category => availableCategories.indexOf(category.toLowerCase()) !== -1)


    const handleSelectCategory = category => {

        // Set categories array based off selection
        let categories = [...selectedCategories]
        if (categories.map(cat => cat.toLowerCase()).indexOf(category.toLowerCase()) !== -1) {
            categories = categories.filter(cat => cat !== category)
        } else {
            categories.push(category)
        }

        // Return all posts if category is all
        if (category.toLowerCase() === 'all') {
            setSelectedCategories(['all'])
            return setFilteredPosts(posts)
        } else {
            categories = categories.filter(cat => cat !== 'all')
        }

        // Set categories
        setSelectedCategories(categories)

        // filter out posts without selected categories
        let f_posts = posts.filter(post => post.tags && post.tags.filter(tag => categories.indexOf(tag) !== -1).length > 0)


        // Set posts
        if (f_posts.length) setFilteredPosts(f_posts)
        else setFilteredPosts(posts) // show all posts if there are no categories selected

    }


    return (
        <>
            <br />
            {title
                ? <h2 >{title}</h2>
                : ''}
            {usedCategories.length
                ?
                <Filterlist>
                    <li
                        className={selectedCategories.map(cat => cat.toLowerCase()).indexOf('all') !== -1 ? 'active' : ''}
                        onClick={() => handleSelectCategory('all')}>
                        All
                    </li>
                    {usedCategories.map((category, idx) => (
                        <li
                            className={selectedCategories.map(cat => cat.toLowerCase()).indexOf(category.toLowerCase()) !== -1 ? 'active' : ''}
                            key={idx + Math.random()}
                            onClick={() => handleSelectCategory(category)}>
                            {category}
                        </li>
                    ))}
                </Filterlist>
                : ''}
            <PostsList usedCategories={usedCategories} >
                {filteredPosts.map(({ id, date, title, tags, excerpt, links }, idx) => (
                    <Li key={idx + Math.random()}>
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
                                {tags.map((tag, idx) => <TagLi selected={selectedCategories.map(cat => cat.toLowerCase()).indexOf(tag.toLowerCase()) !== -1} key={idx + Math.random()}>{tag}</TagLi>)}
                            </Tags>)
                            : ''
                        }
                    </Li>
                ))}
            </PostsList>
        </>
    )
}