import styled from "styled-components"
import { useNavigate } from "react-router"
import Top from "./Top";

export default function StartScreen() {
    const navigate = useNavigate();

    return (
        <Container>
            <Top/>
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
