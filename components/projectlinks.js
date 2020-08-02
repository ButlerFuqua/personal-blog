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

export default function ProjectLinks({ links }) {
    return (
        <Ul>
            {links.map(link => <li>{link.label}</li>)}
        </Ul>
    )
}