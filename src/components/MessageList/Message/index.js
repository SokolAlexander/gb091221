import { AUTHORS } from "../../../utils/constants";
import { withProfileContext } from "../../../utils/ProfileContext";

export const Message = ({ author, text, name }) => {
  return (
    <div className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
      {author === AUTHORS.HUMAN ? name : author}: {text}
    </div>
  );
};

export default withProfileContext(Message);
