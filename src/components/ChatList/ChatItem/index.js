import { Link } from "react-router-dom";

export const ChatItem = ({ chat, onDelete }) => {
  const handleDelete = () => {
    onDelete(chat.id);
  };

  return (
    <li>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
};
