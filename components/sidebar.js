import styled from 'styled-components'

const Container = styled.div`
    width: 280px;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 0;
    }

    &.shown {
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
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
    transition: .3s;

    &:hover {
        background: purple;
        color: white;
    }
`

const items = [
    {
        label: 'Blog'
    },
    {
        label: 'Resume'
    }
]

export default function Sidebar({ shown }) {
    return (
        <Container className={shown ? 'shown' : ''}>
            <Ul>
                {items.map(item => (
                    <Li key={items.indexOf(item)}>{item.label}</Li>
                ))}
            </Ul>
        </Container>
    )
}