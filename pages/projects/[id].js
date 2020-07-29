import Layout from '../../components/layout'
import Head from 'next/head'

import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Date from '../../components/date'
import styled from 'styled-components'


export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}



const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
`
const lightText = { color: `#999` }

export default function Project({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <article>
                <Title>{projectData.title}</Title>
                <div style={lightText}>
                    <Date dateString={projectData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
            </article>
        </Layout>
    )
}