import styled from "styled-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Video from "./Video";
import axios from "axios";

export default function VideoScreen() {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const promise = axios.get("https://hackaton-2-aipim.herokuapp.com/videos")

        promise.then(response => {
            setVideos(response.data);
        })
        promise.catch(err => {
            alert(err.response.data)
        })
    }, [])


    return (
        <Container>
            <Topo onClick={() => navigate("/")}>
                <p>EasyDetran</p>
                <ion-icon name="book-outline"></ion-icon>
            </Topo>
            <Conteudos>
                {videos.map((video, index) => {
                    return <Video video={video} key={index}/>
                })}
            </Conteudos>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    font-family: 'Signika', sans-serif;
    width: 100vw;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #EBEBEB;
`

const Conteudos = styled.div`
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
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