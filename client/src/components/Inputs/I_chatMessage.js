import React from 'react';
import './I_chatMessage.css'

const I_chatMessage = ({chat, setChat, sendChat}) => {


    return (
        <form className="inputs-container d-flex justify-content-center mb-2">
            <input className="form-control ml-2 h-100 inputChat overflow-hidden"
                type="text" placeholder="" name="ChatMessage"
                value={chat}
                onChange={(event) => setChat(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendChat(event) : null}
                />
            <button className="btn btn-primary messageBtn mr-2" onClick={(event) => chat !== '' ? sendChat(event) : null} >Send</button> 
        </form>
    )
}

export default I_chatMessage;