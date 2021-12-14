import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonClass } from "./components/Button/Button";
import { Form } from "./components/Form";

const name = "Alex";
const className = "App-header";

function App() {
  // let buttonLabel = "BUTTON";
  // const buttonTitleState = useState('BUTTON');
  // const buttonTitle = buttonTitleState[0];
  // const setButtonTitle = buttonTitleState[1];
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const inputRef = useRef();

  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  const handleClick = useCallback(
    (text) => {
      // alert(`Hello from btn: ${text}`);
      // buttonLabel = 'NEW LABEL';
      setCounter((prevCounter) => prevCounter + 1);
      console.log(counter);
    },
    [counter]
  );

  const handleClick2 = () => {
    setCounter2((prevCounter2) => prevCounter2 + 1);
  };

  useEffect(() => {
    console.log("useEf -> like did mount");
    console.log(inputRef);
  }, []);

  useEffect(() => {
    console.log("useEf -> like did mount & did update");
  });

  useEffect(() => {
    console.log("useEf -> did update counter or counter2");
  }, [counter, counter2]);
  useEffect(() => {
    console.log("useEf -> like did update counter");
  }, [counter]);
  useEffect(() => {
    console.log("useEf -> like did update counter2");
  }, [counter2]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(0);
    }, 10000);
    return () => {
      clearTimeout(timer);
      console.log("useEf => will unmount");
    };
  }, []);

  console.log("render");

  return (
    <>
      <h3>HEADER</h3>
      <div className="App">
        {/* <header className={className}> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>HELLO {name}</h3>
          <input type="text" ref={inputRef} />
          <Button onButtonClick={handleClick} title={counter} />
          <Button onButtonClick={handleClick2} title={counter2} /> */}
        {/* </header> */}

        <Form onAddMessage={handleAddMessage} />
        {messageList.map(({ text, author }) => (
          <div>
            {author}: {text}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

export class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counter2: 0,
      showButton: true,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: ", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => console.log(this.state.counter)
    );
  };

  handleHide = () => {
    this.setState({
      showButton: !this.state.showButton,
    });
  };

  render() {
    console.log("render");

    return (
      <div className="App">
        <header className={className}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>HELLO {name}</h3>
          <div onClick={this.handleHide}>HIDE BUTTON</div>
          {this.state.showButton ? (
            <ButtonClass
              onButtonClick={this.handleClick}
              title={this.state.counter}
            />
          ) : null}
        </header>
      </div>
    );
  }
}

const foo = () => console.log("--------------------------");

const b = 4 && foo();
const c = false && foo();
