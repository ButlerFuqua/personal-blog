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
    color: ${({ theme, color }) => theme.colors[color]};
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