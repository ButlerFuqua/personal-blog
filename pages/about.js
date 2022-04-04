import Layout from '../components/layout'
import styled from 'styled-components'


const Container = styled.div`
    background: white;
    padding: 1rem;
    margin-bottom: 1rem;
`

const Title = styled.h2`
    margin-top: 0;
`

const Info = styled.h3`
    font-weight: 400;
    font-size: 1rem;
`

const Subtitle = styled.h2`
    font-size: 1.2rem;
`

export default function About() {
    return (
        <Layout home>
            <Container>
                <Title>Hey, I'm Butler.</Title>
                <Info>I'm a web developer currently living in Kailua, HI. This is my personal site where I share what I want.</Info>
            </Container>

            {/* <Container>
                <Subtitle>Goals</Subtitle>
            </Container> */}
        </Layout>
    )
}