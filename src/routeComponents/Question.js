import { useState } from "react"
import Answers from "./Answers"

export default function Question({ question, index }) {

    const [ click, setClick ] = useState("")

    return (
        <ul className={`box ${click}`}>
            <img className="image" src={question.image}/>
            <li>Pergunta n° {index}</li>
            <li className="text">{question.question}</li>
            <ul className="box-options">
                {question.answers.map((answer, index) => {
                    return (
                        <Answers answer={answer} index={index} setClick={setClick} />
                    )
                })}
            </ul>
        </ul>
    )
}