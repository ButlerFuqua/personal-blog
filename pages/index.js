import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <i className="fab fa-github"></i>
      <Link href="/about" as="/about"><a>About</a></Link>
    </>
  )
}
