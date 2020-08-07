import styled from 'styled-components'
import Link from 'next/link'

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-directin: flex-start;

    & li {
        list-style: none;
        margin: .5rem;
    }
`
const A = styled.a`
    color: ${({ theme, color }) => theme.colors[color]};
    transition: .2s;
    border-radius: 50%;
    position: relative;
    bottom: 0;
    font-size: 1.2rem;
    
    &: hover {
        bottom: 3px;
    }
`

export default function ProjectLinks({ links }) {
    return (
        <Ul>
            {links.map(link => (
                <li key={links.indexOf(link)}>
                    <A color={link.label.toLowerCase()} href={link.path} target="_blank" noreferrer="true" noopener="true">
                        <i className={link.icon}></i>
                    </A>
                </li>
            ))}
        </Ul>
    )
}
