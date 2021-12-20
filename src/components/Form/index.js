import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import "./styles.css";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue("");
    onSubmit(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} value={value} onChange={handleChange} />
      {/* <input type="submit" /> */}
      <Button className="myBtnClass" variant="outlined" type="submit">
        CLICK
      </Button>
    </form>
  );
};
