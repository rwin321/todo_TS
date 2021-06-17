import styled from "styled-components";
import { useState, memo } from "react";

const MainContainer = styled.main`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 50px;
  padding: 0.5rem;
`;

const Main = () => {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter((prev) => ++prev);
  const min = () => setCounter((prev) => --prev);

  console.log("Main");

  return (
    <MainContainer>
      <h2>Counter {counter}</h2>
      <div>
        <Button onClick={add}>add</Button>
        <Button onClick={min}>min</Button>
      </div>
    </MainContainer>
  );
};

export default memo(Main);
