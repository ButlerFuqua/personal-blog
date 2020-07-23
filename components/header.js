import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'


const HeaderEl = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`

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
    cursor: pointer;
    transition: .2s;

    &:hover {
        background: ${props => props.bg};
        color: white;

        & a {
            color: white;
        }

        & i {
            color: white !important;
        }

    }

    & a {
        color: black;
        text-decoration: none;
    }
`
const Icon = styled.i`
    margin-right: 5px;
    transition: .2s;
`

const bannerListItems = [
    {
        label: 'GitHub',
        icon: 'fab fa-github',
        link: 'https://www.github.com/butlerfuqua',
        color: '#24292E'
    },
    {
        label: 'LinkedIn',
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/butler-fuqua-096462133/',
        color: '#0077B5'
    }
    ,
    {
        label: 'Codepen',
        icon: 'fab fa-codepen',
        link: 'https://www.linkedin.com/in/butler-fuqua-096462133/',
        color: '#47cf73'
    }
]

export default function Header({ name, home }) {
    return (
        <HeaderEl className={styles.header}>
            {home ? (
                <>
                    <div>
                        <Title>{name}</Title>
                        <Subtitle>A personal website and blog.</Subtitle>
                    </div>
                    <BannerList>
                        <BannerListUL>
                            {bannerListItems.map(bItem => (
                                <Li bg={bItem.color} key={bannerListItems.indexOf(bItem)}>
                                    <a href={bItem.link} target="_blank">
                                        <Icon style={{ color: bItem.color }} className={bItem.icon}></Icon>
                                        {bItem.label}
                                    </a>
                                </Li>
                            ))}
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
        </HeaderEl>

    )




}