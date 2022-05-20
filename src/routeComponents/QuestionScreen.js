import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function QuestionScreen() {
    const url = "https://hackaton-2-aipim.herokuapp.com/questions"
    const [ questions, setQuestions ] = useState([])


    useEffect(() => {
        const promisse = axios.get(url);
        promisse.then(response => {
            console.log(response.data)
            setQuestions(response.data)
        })
        promisse.catch(err => alert("Não consegui carregar as perguntas"))
    }, [])

    return (
        <ContainerQuestions>
            {
                questions.map((question, index) => {
                    return(
                        <ul className = "box">
                            <li className="image">{question.image}</li>
                            <li>Pergunta n° {index}</li>
                            <li className="text">{question.question}</li>
                            {question.answers.map(answer => {
                                return(
                                    <ul className="box-options">
                                        <li className="options">{answer.answer}</li>
                                    </ul>
                                )
                            })}
                        </ul>
                    )
                })
            }
        </ContainerQuestions>
    )
}


const ContainerQuestions = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .image{
        width: 100px;
        height: 100px;
    }

    .text{
        width: 450px;
        height: 50px;
        background: red;
    }

    .box{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }


`
