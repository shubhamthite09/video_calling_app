
import { useState,useEffect , useCallback} from "react";
import { useSocket } from "../context/SocketProvider";
import {useNavigate} from 'react-router-dom';

const HomeRoom = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket()
  const navigate = useNavigate()

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    socket.emit("room:join",{email,room})
  },[email,room,socket])

  const hendalJoinRoom = useCallback((data) =>{
    const {room} = data;
    navigate(`/room/${room}`)
  },[navigate])

  useEffect(()=>{
    socket.on('room:join',hendalJoinRoom)
    return () => {
        socket.off('room:join',hendalJoinRoom)
    }
  },[socket,hendalJoinRoom])

  return (
    <div>
      <h2>Welcome to Home Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room ID</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button >Join</button>
      </form>
    </div>
  );
};

export default HomeRoom;
