import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat } from "../../store/chats/actions";
import { Form } from "../Form";

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const onAddChat = (newChatName) => {
    const newId = `chat${Date.now()}`;
    const newChat = {
      id: newId,
      name: newChatName,
    };
    dispatch(addChat(newChat));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
        <Form onSubmit={onAddChat} />
      </ul>
      <Outlet />
    </>
  );
};
