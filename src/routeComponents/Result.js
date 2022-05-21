import { useContext } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router"

import ResultContext from "./../contexts/ResultContext.js";

export default function Result() {
    const {result} = useContext(ResultContext);

    const navigate = useNavigate();

    const total = 10;
    let aux = result;

    function calculateResult(rights){
        return rights/total;
    }

    return (
        <Container>
            <Topo>
                <p>EasyDetran</p>
                <ion-icon name="book-outline"></ion-icon>
            </Topo>
        
            <Resultado>
                {
                    calculateResult(aux) < 0.5 ?
                    <>
                        <H1 color={"#F60000"}>A coisa está feia</H1>
                        <h2>Você errou {(((total-aux)/total)*100).toFixed(2)}%</h2>
                        <img src={"http://www.campoere.com/image/midia/zero-57e2e2047378b.jpg&w=375&h=250"} alt={"Nota Ruim!"}/>
                        <h3>Você ainda tem muito a estudar!</h3>
                    </>
                    :
                        calculateResult(aux) < 0.75 ?
                        <>  
                            <H1 color={"#F7D100"}>Estude Mais!</H1>
                            <h2>Você acertou {(aux/total*100).toFixed(2)}%.</h2>
                            <img src={"https://cdn.astrocentro.com.br/blog/wp-content/uploads/2019/01/22220059/ora%C3%A7%C3%A3o-para-passar-na-prova.jpg"} alt={"Você está no caminho!"}/>
                            <h3>Pratique um pouco mais e logo estará dirigindo por aí!</h3>

                        </>
                        :
                        <>
                            <H1 color={"#2FA822"}>PARABÉNS!</H1>
                            <h2>Você acertou {(aux/total*100).toFixed(2)}%.</h2>
                            <img src={"https://estudareaprender.com/wp-content/uploads/passar-em-provas.jpg"} alt={"Parabéns!"}/>
                            <h3>Faça a prova e, depois, é só dirigir por aí...</h3>
                        </>
                }
            </Resultado>

            <Botoes>
                <button onClick={() => navigate("/questions")}>
                    Reiniciar Teste
                </button>
                <button onClick={() => navigate("/")}>
                    Voltar para Página Inicial
                </button>
            </Botoes>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
        width: 200px;
        height: 45px;
        color: #444040;
        font-size: 16px;
        border-radius: 10px;
        background-color: white;
        font-family: 'Signika', sans-serif;
        cursor: pointer;
        &:hover{
            background-color: #EBEBEB;
        }
        margin: 10px 0;
    }
`

const Resultado = styled.div`
    margin-top: 150px;
    padding: 20px;
    width: 60vw;
    height: 200px;
    background: #F9F9F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        height: 120px;
        margin-bottom: 8px;
    }
    h2{
        font-size: 12px;
        margin-bottom: 4px;
    }
    h3{
        font-size: 14px;
        text-align: center;
    }
`

const H1 = styled.h1`
    color: ${(props) => props.color};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
`