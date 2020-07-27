import styled from 'styled-components'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'


const Container = styled.div`
    width: 280px;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
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
`

const Li = styled.li`
    list-style: none;
    padding: .5rem;
    cursor: pointer;
    border-radius: 3px;
    margin: 1rem 0;
   
   
    transition: .3s;
    transform: scale(1.0);


    & a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: -3px 3px 2px 0px rgba(0,0,0,.5);
    
    }

    &.active {
        border-left: 4px solid purple;
        // border-bottom: 4px solid purple;

        // &::before{
        //     content: '';
        //     height: 15px;
        //     width: 15px;
        //     background: purple;
        //     border-radius: 50%;
        // }
    }

    
`

const items = [
    {
        label: 'Blog',
        path: '/'
    },
    {
        label: 'Work',
        path: '/work'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Contact',
        path: '/contact'
    },
    {
        label: 'Resume',
        icon: 'fa fa-arrow-circle-down',
        path: 'https://docs.google.com/document/d/1CjlbPXBQP9zeULQf5EMcvJdgwlOcKAJ1dXVVfuW6UZM/export?format=pdf'
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
                        {item.icon
                            ? <i style={{ marginRight: '5px' }} className={item.icon}></i>
                            : ''
                        }
                        {item.label}
                    </Li>
                ))}
            </Ul>
        </Container >
    )
}
