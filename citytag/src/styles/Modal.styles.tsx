import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index:11;
  /* display: none; */
`;
export const Modal = styled.div`
  background-color: #fff;
  padding: 1rem;
  border: 2px solid #121212;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  position: relative;
  z-index:21;
`;

