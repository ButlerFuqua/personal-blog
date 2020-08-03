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
        padding: 1rem;
    }
`
const A = styled.a`
    background: ${({ theme, color }) => theme.colors[color]};
    border: 1px solid ${({ theme, color }) => theme.colors[color]};
    color: white;
    transition: .2s;
    padding: .5rem .75rem;
    border-radius: 50%;
    position: relative;
    bottom: 0;
    
    &: hover {
        color: ${({ theme, color }) => theme.colors[color]};
        background: white;
        bottom: 3px;
        box-shadow: ${({ theme }) => theme.shadow.sm}
    }
`

export default function ProjectLinks({ links }) {
    return (
        <Ul>
            {links.map(link => (
                <li>
                    <A color={link.label.toLowerCase()} href={link.path} target="_blank" noreferrer="true" noopener="true">
                        <i className={link.icon}></i>
                    </A>
                </li>
            ))}
        </Ul>
    )
}