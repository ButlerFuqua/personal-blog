import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    width: 280px;
    // overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(255, 255, 255, 0.9);
        z-index: 1;
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
   
   
    transition: .3s;
    transform: scale(1.0);

    & a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 20px 6px rgba(0,0,0, .1);
    
    }
`

const items = [
    {
        label: 'Blog',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Resume',
        path: 'https://docs.google.com/document/d/1CjlbPXBQP9zeULQf5EMcvJdgwlOcKAJ1dXVVfuW6UZM/export?format=pdf'
    }
]

export default function Sidebar({ shown, handleSidebar }) {
    return (
        <Container className={shown ? 'shown' : ''}>
            <Ul>
                {items.map(item => (
                    <Li key={items.indexOf(item)}>
                        {item.path.indexOf('http') === -1
                            ? (
                                <Link href={item.path}>
                                    <a onClick={() => shown ? handleSidebar() : ''}> {item.label}</a>
                                </Link>
                            )
                            : <a onClick={() => shown ? handleSidebar() : ''} href={item.path} target="_blank"> {item.label}</a>
                        }
                    </Li>
                ))}
            </Ul>
        </Container>
    )
}