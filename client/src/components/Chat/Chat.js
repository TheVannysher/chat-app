import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import ChatHeader from '../ChatHeader/ChatHeader';
import './chat.css'

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
                <div className="card-body">
                    
                </div>
                <div className="inputs-container d-flex justify-content-center mb-2">
                    <input className="form-control ml-2 h-100 inputChat overflow-hidden"
                        type="text" placeholder="" name="ChatMessage"
                        value={chat}
                        onChange={(event) => setChat(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' ? sendChat(event) : null}
                     />
                    <button className="btn btn-info messageBtn mr-2" onClick={(event) => chat !== '' ? sendChat(event) : null} >Send</button> 
                </div>
            </div>
        </div>
    )
}

export default Chat;