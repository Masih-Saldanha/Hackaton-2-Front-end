import styled from "styled-components";
import { useEffect, useState } from "react";


export default function Video({video}) {
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        console.log(video)
    }, [])
    return (
        open ? 
        <BoxVideo onClick={() => setOpen(false)}>
            <p>{video.title}</p>
            <iframe width="100%" height="250" src={video.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </BoxVideo>
        :
        <BoxButton onClick={() => setOpen(true)}>
            <p>{video.title}</p>
        </BoxButton>
    )
}


const BoxButton = styled.button`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 84%;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px 0;
    background-color: white;
    p{
        font-family: 'Signika';
        font-size: 20px;
        color: #444040;
    }
`

const BoxVideo = styled.button`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    width: 84%;
    height: 350px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    margin: 20px 0;
    background-color: white;
    p{
        margin-bottom: 15px;
        font-family: 'Signika';
        font-size: 20px;
        color: #444040;
    }
`