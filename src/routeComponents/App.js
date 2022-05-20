import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import Result from "./Result";
import StartScreen from "./StartScreen";
import VideoScreen from "./VideoScreen";

import "../assets/styles/reset.css"

export default function App() {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartScreen/>} > </Route>
                <Route path="/questions" element={<QuestionScreen/>} > </Route>
                <Route path="/videos" element={<VideoScreen/>} > </Route>
                <Route path="/result" element={<Result/>} > </Route>
            </Routes>
            </BrowserRouter>        
    )
}