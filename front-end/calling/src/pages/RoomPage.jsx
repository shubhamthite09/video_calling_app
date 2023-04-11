import React,{useEffect,useCallback} from "react";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () =>{

    const socket = useSocket();

    const handelUserJoin = useCallback((data)=>{
        const {email,id} = data
        console.log(email,id);
    },[])

    useEffect(()=> {
        socket.on('room:join',handelUserJoin)
        return () =>{
            socket.off('room:join',handelUserJoin)
        }
    },[handelUserJoin,socket])

    return (
        <div>
            <h2>ROOM</h2>
        </div>
    )
}

export default RoomPage