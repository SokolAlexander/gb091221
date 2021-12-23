import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { showName } from "../../store/profile/actions";
import { withProfileContext } from "../../utils/ProfileContext";
import { Form } from "../Form";

export const Profile = ({ name, setName }) => {
  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(showName);
  };

  return (
    <>
      <h3>THIS IS PROFILE</h3>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{name}</span>}
      <Form onSubmit={setName} />
    </>
  );
};

export default withProfileContext(Profile);
