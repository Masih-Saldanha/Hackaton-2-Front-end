import styled from "styled-components"
import { useNavigate } from "react-router"
import Top from "./Top";

export default function StartScreen() {
    const navigate = useNavigate();

    return (
        <Container>
            <Top/>
            <Botoes>
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
    font-family: 'Signika', sans-serif;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #EBEBEB;
    
    h1{
        margin-top: 150px;
        color: #444040;
        font-size: 24px;
    }
`

const Botoes = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    button{
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        border: none;
        width: 300px;
        height: 100px;
        color: #444040;
        font-size: 25px;
        border-radius: 10px;
        background-color: white;
        font-family: 'Signika', sans-serif;
        cursor: pointer;
        &:hover{
            background-color: #E1E1E1;
            color: #5A5A5A;
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
=======
const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 100vw;
    background: #0097F6;
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

