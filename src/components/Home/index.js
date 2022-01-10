import { useDispatch } from "react-redux";
import { signIn } from "../../store/profile/actions";

export const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signIn());
  };
  return (
    <>
      <h3>Home page</h3>
      <button onClick={handleClick}>SignIn</button>
    </>
  );
};
