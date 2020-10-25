let users = [];

function addUser ({id,name,room}){
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => {user.room === room && user.name === name})
    if(existingUser){
        return {error : 'Username already taken!'}
    }
    const user = {id, name, room}
    users.push(user)
    return {user}
}
function removeUser (id){
    const index = users.findIndex((user) => {user.id === id});
    if(index !== -1){
        return users.splice(index, 1 )[0];
    }else{
        return {erro : `User doesn't exist!`}
    }
}
function getUser (id){
    return users.find((user) => user.id === id) || { error : `User doesn't exist`}
}
function getUserbyRoom (room){
    return users.filter((user) => user.room === room) || { error : `Room doesn't exist or there's nobody in this room`}
}

module.exports = { addUser, removeUser, getUser, getUserbyRoom }

