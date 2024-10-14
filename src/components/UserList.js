import Header from "./Header";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import "../styles/userlist.css";

function UserList() {
    const users = useSelector((state) => state.user.users);
    const chats = useSelector((state) => state.chat.chats);
    function getLastMessage(userId)
    {
        const userChats = chats.filter(chat => chat.senderId === userId);
        if (userChats.length > 0) 
        {
            return userChats[userChats.length - 1];
        }
        return null;
    }

    return (
        <div className="userlist__container">
            <Header />
            {users.map((user) => {
                const lastMessage = getLastMessage(user.id);
                return (<Link to={`/chat/${user.id}`} key={user.id} className="userItem">
                    <img src={user.pfp} alt="avatar" />
                    <div className="userItem__content">
                        <div className="userItem__user">
                            <h1>{user.name}</h1>
                            <p>{lastMessage ? lastMessage.message : "No messages yet"}</p>
                        </div>
                        <p>{lastMessage ? new Date(lastMessage.timestamp).toLocaleTimeString().slice(0,5) : ""}</p>
                    </div>
                </Link>)
            })}
        </div>
    );
}

export default UserList;
