import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import PostsSection from '../components/postsSection'
import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

export default function Work({ allProjectsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <PostsSection title="My Work" type="projects" posts={allProjectsData} />
            </section>
        </Layout>
    )
}

