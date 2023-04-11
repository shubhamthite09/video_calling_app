const {Server, Socket} = require("socket.io");

const io = new Server(8900,{
    cors:true,
})

const emailToSoketId = new Map();
const socketToEmail = new Map();

io.on('connection',socket=>{
    console.log("soket connected", socket.id);
    socket.on('room:join',data =>{
        console.log(data);
        const {email,room} = data
        emailToSoketId.set(email,socket.id)
        socketToEmail.set(socket.id , email)
        io.to(room).emit('user:join',{email:email,id:socket.id})
        socket.join(room)
        io.to(socket.id).emit("room:join",data)
    })
})