import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Header from './header'
import Sidebar from '../components/sidebar'
import { useState } from 'react'
import styled from 'styled-components'
import MenuToggle from '../components/menuToggle'

const name = 'Butler Fuqua'
export const siteTitle = 'Personal website and blog'



export default function Layout({ children, home }) {

    const [showSidebar, setshowSidebar] = useState(false)

    const handleSidebar = () => setshowSidebar(!showSidebar)

    return (
        <div className={styles.container}>
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

            <main>
                <Sidebar shown={showSidebar} />
                <div id="pageWrapper">
                    {children}
                </div>
            </main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}