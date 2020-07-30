import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function About() {
    return (
        <>
            <Title>About</Title>
            <Link href="/" as="/"><a>Home</a></Link>
        </>
    )
}
