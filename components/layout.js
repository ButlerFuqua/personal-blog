import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Sidebar from '../components/sidebar'
import { useState } from 'react'
import styled from 'styled-components'
import MenuToggle from '../components/menuToggle'
import Router, { useRouter } from 'next/router'


const name = 'Butler Fuqua'
export const siteTitle = 'Personal website and blog'

const Container = styled.main`
    max-width: 1000px;
    width: 100%;
    margin:  auto;
`
const PageWrapper = styled.div`
    flex: 1;
    overflow: hidden;
    @media(min-width: 769px){
        padding: 1rem;
        padding-top: 0;
    }
`
const BackToHome = styled.div`
    margin: 3rem 0;

    @media(max-width: 768px){
        text-align: center;
    }
`

export default function Layout({ children, home, test }) {

    const [showSidebar, setshowSidebar] = useState(false)
    const [activeItem, setActiveItem] = useState('/')

    const router = useRouter()
    const { pathname } = router


    const handleSidebar = () => setshowSidebar(!showSidebar)

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header name={name} home={home} />
            <MenuToggle showSidebar={showSidebar} handleSidebar={handleSidebar} >Menu</MenuToggle>

            <Container>
                <Sidebar shown={showSidebar} handleSidebar={handleSidebar} />
                <PageWrapper>
                    {children}
                    {
                        !home && (
                            <BackToHome>
                                <Link href={pathname.indexOf('/projects/') > -1 ? '/work' : '/'}>
                                    <a>
                                        <i style={{ marginRight: '2px' }} className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                 Back
                                 </a>
                                </Link>
                            </BackToHome>
                        )
                    }
                </PageWrapper>
            </Container>

        </ >
    )
}