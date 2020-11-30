import React, {useEffect,useRef} from 'react';
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
import Pusher from 'pusher-js';



function SidebarChat({addNewChat}) {
     const createChat = () => {};

    return !addNewChat ? (
            <div className= "sidebarChat">
            <Avatar />
            <div className= "sidebarChat__info">
                <h2>Room name</h2>
                <p>lol</p>
            </div>
        </div>
        ): (
            <div onClick= {createChat}
            className = "sidebarChat">
                <h2>Add new Chat</h2>
            </div>

        );
    
}

export default SidebarChat;
