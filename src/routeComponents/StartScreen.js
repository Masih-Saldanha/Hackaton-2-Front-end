import styled from "styled-components"
import { useNavigate } from "react-router"

export default function StartScreen() {
    const navigate = useNavigate();

    return (
        <Container>
            <Topo>
                <p>EasyDetran</p>
                <ion-icon name="book-outline"></ion-icon>
            </Topo>
            <Botoes>
                <h1>O que você deseja?</h1>
                <button onClick={() => navigate("/videos")}>
                    Estudar
                </button>
                <button onClick={() => navigate("/questions")}>
                    Praticar
                </button>
            </Botoes>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border: none;
        width: 200px;
        height: 100px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: #EBEBEB;
        }
        margin: 20px 0;
    }
`

const Botoes = styled.div`
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
`

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