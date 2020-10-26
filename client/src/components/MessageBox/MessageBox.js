import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Chatbox from './Chatbox';

const MessageBox = ({messages, name}) => {


    return (
        <div className="MessageBoxContainer">
            <ScrollToBottom>
                {messages.map((chat, i)=>
                    <div key={i}>
                        <Chatbox chat={chat} name={name} />
                    </div>
                )}
            </ScrollToBottom>
        </div>
    );
}

export default MessageBox;