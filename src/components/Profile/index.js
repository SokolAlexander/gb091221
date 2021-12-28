import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { setName, SET_NAME, toggleName } from "../../store/profile/actions";
import { selectShowName, selectUserName } from "../../store/profile/selectors";
import { withProfileContext } from "../../utils/ProfileContext";
import { Form } from "../Form";

const Profile = () => {
  const showName = useSelector(selectShowName, shallowEqual);
  const userName = useSelector(selectUserName, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleName);
  };

  const handleSubmit = (newName) => {
    dispatch(setName(newName));
  };

  return (
    <>
      <h3>THIS IS PROFILE</h3>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} />
    </>
  );
};

// export default Profile;

const ProfileForConnect = ({
  showName,
  userName,
  changeName,
  toggleShowName,
}) => {
  const handleChange = () => {
    toggleShowName();
  };

  const handleSubmit = (newName) => {
    changeName(newName);
  };

  return (
    <>
      <h3>THIS IS PROFILE</h3>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  showName: state.profile.showName,
  userName: state.profile.name,
});

const mapDispatchToProps = {
  changeName: setName,
  toggleShowName: () => toggleName,
};

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForConnect);
export default ConnectedProfile;
