import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    margin-bottom: 1rem
`

const Subtitle = styled.h2`
    margin: 0;
    font-weight: 300;
    font-size: 1.3rem;
`
const BannerList = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`

const BannerListUL = styled.ul`
    text-align: right;
    display: flex;
    flex-wrap: wrap;
`
const Li = styled.li`
    list-style: none;
    padding: .5rem;
`

export default function Header({ name, home }) {
    return (
        <header className={styles.header}>
            {home ? (
                <>
                    <div>
                        <Title>{name}</Title>
                        <Subtitle>A personal website and blog.</Subtitle>
                    </div>
                    <BannerList>
                        <BannerListUL>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                            <Li>content</Li>
                        </BannerListUL>
                    </BannerList>
                </>
            ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
        </header>

    )




}