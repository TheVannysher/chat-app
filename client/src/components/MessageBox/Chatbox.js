import React from 'react';

const Chatbox = ({chat : {user , text}, name}) => {
    const trimmedName = name.trim().toLowerCase();
    let currentUser = user === trimmedName ? true : false;


    if(currentUser){
        return (
            <div className="text-right d-flex justify-content-end align-items-center m-2">
                <small className="mx-2 my-auto text-muted">{trimmedName}</small>
                <div className="chatbox bg-info p-2 align-items-center">
                    <p className="text-white my-auto text-justify">{text}</p>
                </div>
            </div>
        )       
    }else if(user === 'admin'){
        return(
            <div className="text-left d-flex justify-content-start align-items-center m-2">
                <div className="chatbox bg-warning p-2 align-items-center">
                    <p className="text-white my-auto text-justify" >{text}</p>
                </div>
                <small className="mx-2 my-auto text-muted">{user}</small>
            </div>
        )
    }else{
        return(
            <div className="text-left d-flex justify-content-start align-items-center m-2">
                <div className="chatbox bg-light p-2 align-items-center">
                    <p className="text-white my-auto text-justify" >{text}</p>
                </div>
                <small className="mx-2 my-auto text-muted">{user}</small>
            </div>
        )
    }
    
}

export default Chatbox;