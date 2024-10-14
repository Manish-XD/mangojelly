import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { sendMessage } from "../redux/slices/chatSlice";
import Message from "./Message";
import UserList from "./UserList";
import "../styles/chat.css";

function Chat() 
{
    const { slug } = useParams();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const chats = useSelector((state) => state.chat.chats);
    const chatEndRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [message, setMessage] = useState('');
    function getUserInfo() {
        let obj = users.filter(user => user.id === Number(slug));
        return obj[0];
    }

    function handleSendMessage() {
        if (message.trim() === '') return;
        dispatch(sendMessage({ senderId: Number(slug), message }));
        setMessage('');
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    }

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [chats]);

    return (
        <div className="chat__outer">
            {!(width < 740) && <UserList />}
            <div className="chat__container">
                <div className="chat__header">
                    <img src={getUserInfo().pfp} alt="avatar" />
                    <h1>{getUserInfo().name}</h1>
                </div>
                <div className="chat__section">
                    {chats.map((chat, index) => {
                        return (
                            <div className="message_div" style={{ justifyContent: chat.senderId === Number(slug) ? 'right' : 'left' }} key={index}>
                                <Message senderId={chat.senderId} msg={chat.message} timestamp={new Date(chat.timestamp).toLocaleString()} sender={chat.senderId === Number(slug) ? true : false} />
                            </div>
                        )
                    })}
                    <div ref={chatEndRef}></div>
                </div>
                <div className="chat__input">
                    <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Say Something..." onKeyDown={handleKeyPress} />
                    <button onClick={handleSendMessage}>
                        <img src="/send.png" alt="send button" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat;