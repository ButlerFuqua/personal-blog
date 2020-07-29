import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import PostsSection from '../components/postsSection'
import { getSortedPostsData } from '../lib/posts'
import styled from 'styled-components'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Title = styled.h2`
  color: blue;
`

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Title>Test</Title>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PostsSection type="posts" posts={allPostsData} />
    </Layout>
  )
}

