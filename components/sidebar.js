import styled from 'styled-components'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'


const Container = styled.div`
    width: 200px;
    height: 100%;
    background: white;

    @media (max-width: 768px) {
        width: 100%;
        position: fixed;
        background: rgba(255, 255, 255, 0.9);
        z-index: 99;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: .3s;
        top: 0;
        left: 100%;

        & ul li {
            font-size: 1.5rem;
            font-weight: 700;
        }

    }

    &.shown {
        @media (max-width: 768px) {
           left: 0;
        }
    }
`
const Ul = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
`

const Li = styled.li`
    list-style: none;
    padding: .5rem;
    cursor: pointer;
    margin: 1rem 0;
    position: relative;
    height: 40px;
    width: 100%;
   
   
    transition: .3s;
    overflow: hidden;

    @media(max-width: 768px){
        height: 60px;
    }


    & a {
        color: inherit;
        text-decoration: none;
    }

    & div.label {
        @media(min-width: 769px){
            position: absolute;
            width: 100%
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            line-height: 30px;
            padding: 5px;
            padding-left: 1rem;
        }
    }

    & div.hoverEffect {

        @media(min-width: 769px){
            background: ${({ theme }) => theme.colors.primary};
            position: absolute;
            width: 100%;
            height: 100%;
    
    
            transition: .3s;
            top: 0;
            right: 100%;
        }
    }

    &:hover {
        // background: ${({ theme }) => theme.colors.primary};
        // color: white;

        @media(min-width: 769px){
            & div.label {
                color: white;
            }
    
            & div.hoverEffect {
                right: 0;
            }
    
        }

    
    }

    &.active {
        border-left: 4px solid ${({ theme }) => theme.colors.primary};
        // border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    }

    
`

const items = [
    // {
    //     label: 'Blog',
    //     path: '/'
    // },
    {
        label: 'Projects',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
    // {
    //     label: 'Contact',
    //     path: '/contact'
    // },
    // {
    //     label: 'Resume',
    //     icon: 'fa fa-arrow-circle-down',
    //     path: 'https://docs.google.com/document/d/1CjlbPXBQP9zeULQf5EMcvJdgwlOcKAJ1dXVVfuW6UZM/export?format=pdf'
    // }
    {
        label: 'Blog',
        icon: 'fa fa-newspaper',
        path: 'https://blog.butlerfuqua.com/'
    }
]

export default function Sidebar({ shown }) {


    const router = useRouter()
    const { pathname } = router

    const [activeItem, setActiveItem] = useState(pathname)

    const handleSelectItem = item => {

        // Internal link
        if (item.path.indexOf('http') === -1) {
            Router.push(item.path) // navigate
            setActiveItem(item.path) // show in UI
        }
        // External link
        else window.open(item.path)

    }


    return (
        <Container className={shown ? 'shown' : ''}>
            <Ul>
                {items.map(item => (
                    <Li
                        className={activeItem === item.path ? 'active' : ''}
                        onClick={() => handleSelectItem(item)}
                        key={items.indexOf(item)}
                    >

                        <div className="label">
                            {item.icon
                                ? <i style={{ marginRight: '5px' }} className={item.icon}></i>
                                : ''
                            }
                            {item.label}
                        </div>
                        <div className="hoverEffect"></div>
                    </Li>
                ))}
            </Ul>
        </Container >
    )
}
