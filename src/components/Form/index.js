import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { TextField } from "@mui/material";

import "./styles.css";

const Image = ({ src = "" }) => <img src={src} alt="buton" />;

export const Form = (props) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault && e.preventDefault();

    setValue("");
    props.onSubmit(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} inputRef={inputRef} />
      {/* <input type="text" ref={inputRef} value={value} onChange={handleChange} /> */}
      <input type="submit" />
      {/* <Button
        onClick={handleSubmit}
        render={(fontWeight) => (
          <div>
            <span style={{ fontWeight }}>Click</span>
            <Image />
          </div>
        )}
      /> */}
      {/* <Button onClick={handleSubmit}>
        <span>child1</span>
        <div>Child2</div>
      </Button> */}
    </form>
  );
};
