import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Answers from "./Answers";
import Question from "./Question";

import ResultContext from "./../contexts/ResultContext.js";

export default function QuestionScreen() {
    const { count } = useContext(ResultContext);
    const url = "https://hackaton-2-aipim.herokuapp.com/questions"
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get(url);
        promisse.then(response => {
            console.log(response.data)
            setQuestions(response.data)
        })
        promisse.catch(err => alert("Não consegui carregar as perguntas"))
    }, [])

    if (count === 10) {
        navigate("/result")
    }

    return (
        <ContainerQuestions>
            {
                questions.map((question, index) => {
                    return (
                        <Question question={question} index={index}/>
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
    width: 500px;
    margin: auto;


    .image{
        margin-top: 25px;
        margin-bottom: 15px;
        width: 200px;
        height: 200px;
    }

    .text{
        margin-bottom: 10px;
        padding: 25px;
    }

    .box{
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 50px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .option{
        width: 500px;
        height: 50px;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        border: 2px solid black;
        border-radius: 5px;
    }

    .correct{
        border: 2px solid green;
    }

    .err{
        border: 2px solid red;
    }

    .click{
        pointer-events: none;
    }


`
