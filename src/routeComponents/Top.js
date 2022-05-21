import styled from "styled-components"

export default function Top() {
    return (
        <Topo>
            <p>EasyDetran</p>
            <ion-icon name="book-outline"></ion-icon>
        </Topo>
    )

}

const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 100vw;
    background: #4772A5;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    p{
        font-size: 48px;
        color: white;
        margin-right: 5px;
    }
    ion-icon{
        font-size: 40px;
        color: white;
    }
`