import { useState } from "react"

export default function Answers({answer, index, setClick}){

    const [ css, setCss ] = useState("")

    function select(answer){
        setClick("click")
        if(answer.isCorrect === true){
            setCss("correct")
        } else {
            setCss("err")
        }
    }

    return(
        <li className={`option ${css}`} onClick={()=>select(answer)}>{index + 1}  {answer.answer}</li>
    )
}