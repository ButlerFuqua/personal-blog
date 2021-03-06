import Layout, { siteTitle } from '../components/layout'
import PostsSection from '../components/postsSection'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <PostsSection type="posts" posts={allPostsData} />
    </Layout>
  )
}

