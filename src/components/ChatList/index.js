import { Link, Outlet } from "react-router-dom";

export const ChatList = ({ chats }) => {
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
