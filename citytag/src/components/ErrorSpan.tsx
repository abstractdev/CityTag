import styled from "styled-components";

export function ErrorSpan() {
  return (
    <>
      <StyledErrorSpan>Try again!</StyledErrorSpan>
    </>
  );
}

export const StyledErrorSpan = styled.span`
  color: red;
  background-color: #fff;
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  border-radius: 5px;
  z-index: 10;
  font-family: "metropolisB";
  text-align: center;
`;
