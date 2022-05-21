import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import Result from "./Result";
import StartScreen from "./StartScreen";
import VideoScreen from "./VideoScreen";

import "../assets/styles/reset.css"
import ResultContext from "./../contexts/ResultContext.js";


export default function App() {
    const [result, setResult] = useState(0);
    const [count, setCount] = useState(0);
    return (
        <ResultContext.Provider value={{ result, setResult, count, setCount }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartScreen />} > </Route>
                    <Route path="/questions" element={<QuestionScreen />} > </Route>
                    <Route path="/videos" element={<VideoScreen />} > </Route>
                    <Route path="/result" element={<Result />} > </Route>
                </Routes>
            </BrowserRouter>
        </ResultContext.Provider>
    )
}