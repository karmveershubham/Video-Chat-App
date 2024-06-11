import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
function Home(){
    
    const [roomID,setRoomID]=useState()
    const navigate=useNavigate()
    const handleJoin= ()=>{
        navigate(`/room/${roomID}`)
    }
    return(
        <div className="App"> 
            <input placeholder="Enter Room ID" type="text" value={roomID} onChange={
                (e) => {
                    setRoomID(e.target.value)
                }}></input>
            <button onClick={handleJoin}>Join</button>
        </div>
    )
}

export default Home;