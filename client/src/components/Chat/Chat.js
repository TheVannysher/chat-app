import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import ChatHeader from '../ChatHeader/ChatHeader';
import './chat.css'
import I_chatMessage from '../Inputs/I_chatMessage';
import MessageBox from '../MessageBox/MessageBox';

let socket;

const Chat = () => {

    const [name,setName] = useState('');
    const [room, setRoom] = useState('');
    const [chat, setChat] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = process.env.LOCALHOST || 'localhost:5000';


    useEffect(() => {
        const params = new URL(window.location).searchParams;
        const data = {
            name : params.get('name'),
            room : params.get('room')
        }
        socket = io(ENDPOINT)
        console.log(data)
        setName(data.name)
        setRoom(data.room)
        socket.emit('join', data, (error)=>{

        })
        return () => {
            socket.emit('disconnect', data);
            socket.off();
        }
    },[ENDPOINT, window.location.search])
    useEffect(()=>{
        socket.on('message', (chat)=>{
            setMessages([...messages, chat])
        })
    },[messages])

    function sendChat (event){
        event.preventDefault();
        if(chat){
            socket.emit('sendMessage', chat, ()=>{
                setChat('');
            })
        }
    }

    console.log(chat, messages);

    return(
        <div className="chat bg-primary vh-100 d-flex justify-content-center align-items-center"> 
            <div className="card p-0 container h-75">
                <ChatHeader room={room}/>
                <div className="card-body bg-secondary m-2">
                    <MessageBox messages={messages} name={name} />
                </div>
                <I_chatMessage chat={chat} setChat={setChat} sendChat={sendChat} />
            </div>
        </div>
    )
}

export default Chat;