import Link from 'next/link'
import styled from 'styled-components'


const HeaderEl = styled.header`
    
    
    background: white;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: .5rem;
    box-shadow: 0px 0px 11px -3px rgba(0,0,0, .5);

    @media(min-width: 769px){
        position: sticky;
        top: 0;
        z-index: 2;
    }

    @media(max-width: 768px){
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 400;
    margin: 0;
`

// const TitleAlt = styled.h1`
//     font-size: 1.2rem;
//     line-height: 1.4;
//     margin: 1rem 0;

//     & a {
//         color: inherit;
//     }
// `

const Subtitle = styled.h2`
    margin: 0;
    font-weight: 300;
    font-size: 1rem;

    @media(max-width: 768px){
        display: none;
    }
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
    margin: 0;
    

    @media(max-width: 768px){
        padding: 0;
    }
`
const Li = styled.li`
    list-style: none;
    cursor: pointer;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    border-radius: 2px;
    font-size: 1.5rem;


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
        text-align: center;
    }

    & i {
        margin: auto;
    }
`
const Icon = styled.i`
    margin-right: 5px;
    transition: .2s;
`

const bannerListItems = [
    {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/butler-fuqua-096462133/',
        color: '#0077B5'
    },
    {
        icon: 'fab fa-github',
        link: 'https://www.github.com/butlerfuqua',
        color: '#24292E'
    },
    {
        icon: 'fab fa-codepen',
        link: 'https://codepen.io/butlerfuqua',
        color: '#47cf73'
    },
    {
        icon: 'fa fa-code',
        link: 'https://repl.it/@butlerfuqua',
        color: '#192333'
    }
]

export default function Header({ name, home }) {
    return (
        <HeaderEl >
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
        </HeaderEl>

    )




}