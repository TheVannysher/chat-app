import React, {useState, isValidElement} from 'react';
import { Link } from 'react-router-dom';
import './join.css'

const Join = () =>{
    const [name, setName] = useState('') 
    const [room, setRoom] = useState('') 
    const [validation, setValidation] = useState('') 
    const [message, setMessage] = useState('') 


    function validations (event){
        const isinvalid = (!name || !room ) ? true : null;
        if(isinvalid){
            event.preventDefault()
            setMessage('Some fields are required!')
            setValidation('is-invalid')
        }
        return isinvalid;
    }
    return(
        <div className="joinContainer vh-100 bg-primary d-flex justify-content-center align-items-center"> 
            <div className="card p-3 shadow border-0 text-center">
                <div className="card-body">
                    <h1 className="card-title text-primary mb-4">Join a chat room</h1>
                    <div className="form-group">
                        <input name="name" id="nameInput" placeholder="name" className={`form-control shadow my-3 ${validation}`} type="text" onChange={(event) => setName(event.target.value)} />
                        <input name="room" id="roomInput" placeholder="room" className={`form-control shadow my-3 ${validation}`} type="text" onChange={(event) => setRoom(event.target.value)} />
                        <div id="inputs-validation-feedBack my-2" className='invalid-feedback'>{message}</div>
                    </div>
                    <Link onClick={validations} to={`/chat?name=${name}&room=${room}`}>
                        <button className="btn btn-primary my-3" type="submit">Join!</button> 
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Join;