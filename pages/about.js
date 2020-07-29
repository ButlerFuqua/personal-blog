import Layout from '../components/layout'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 3rem;
    color: blue;
`
const P = styled.p`
    color: orange:
    font-size: 1.2rem;
    margin: 0;
`

export default function About() {
    return (
        <Layout home>
            <Title>About</Title>
            <P>This is a test</P>
        </Layout>
    )
}