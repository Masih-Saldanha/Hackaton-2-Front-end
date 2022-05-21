import { useState, useContext } from "react"

import ResultContext from "./../contexts/ResultContext.js";

export default function Answers({ answer, index, setClick }) {
    const { result, setResult, count, setCount } = useContext(ResultContext);

    const [css, setCss] = useState("")

    function select(answer) {
        setClick("click")
        if (answer.isCorrect === true) {
            setCss("correct")
            setResult(result + 1)
            setCount(count + 1)
        } else {
            setCss("err")
            setCount(count + 1)
        }
    }

    return(
        <li className={`option ${css}`} onClick={()=>select(answer)}>{index + 1}  {answer.answer}</li>
    )
}