import styled from "styled-components";

export function ErrorSpan() {
  return (
    <>
      <StyledErrorSpan>Try again!</StyledErrorSpan>
    </>
  );
}

const StyledErrorSpan = styled.span`
  color: red;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50% -50%);
  padding: 0.5rem;
  border-radius: 5px;
  z-index: 10;
  font-family: "metropolisB";
`;
