import React from 'react';
import './myStyles.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useState } from 'react';
function ChatArea() {
    const [conversations] = useState([
        {
            name: "Test 1",
            lastMessage: "sjhdfjhasdjhf",
            timeStamp: "today",
        },
        {
            name: "Test 2",
            lastMessage: "sjhdfjhasdjhf",
            timeStamp: "today",
        },
        {
            name: "Test 3",
            lastMessage: "sjhdfjhasdjhf",
            timeStamp: "today",
        },
        {
            name: "Test 4",
            lastMessage: "sjhdfjhasdjhf",
            timeStamp: "today",
        },
    ]);
    var props = conversations[0];
    return (
        <div className='chatArea-container'>
            <div className='chatArea-header'>
                <p className='con-icon'>{props.name[0]}</p>
                <div className='header-text'>
                    <p className='con-title'>{props.name}</p>
                    <p className='con-timeStamp'>{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteOutlineIcon />
                </IconButton>
            </div>
            <div className='message-container'>
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />

            </div>
            <div className='text-input-area'>
                <input placeholder='Type a Message' className='search-box' />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatArea;
