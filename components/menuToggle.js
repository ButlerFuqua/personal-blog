import styled from 'styled-components'

const Button = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background: white;
    border: none;
    transitin: .2s;

    @media (min-width: 768px) {
        display: none;
    }

    & i {
        font-size: 1rem;
    }
   
`

export default function MenuToggle({ handleSidebar, showSidebar }) {
    return (
        <Button onClick={handleSidebar}>
            <i className={!showSidebar ? 'fa fa-bars' : 'fa fa-times'}></i>
        </Button>
    )
}