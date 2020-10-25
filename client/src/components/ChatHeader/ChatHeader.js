import React from 'react';
import './ChatHeader.css'

const ChatHeader = ({room}) => {


    return (
        <div className="ChatHeader card-header bg-secondary text-primary d-flex align-items-center justify-content-between">
            <div className="leftContainer">
                <img className="" src="" />
                <h3>{room}</h3>
            </div>
            <div className="RightContainer">
                <a href="/" className="close" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                </a>
            </div>
        </div>
    )
}

export default ChatHeader;