import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ModalContainer, Modal } from "../styles/Modal.styles";
import { useEffect, useRef } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";
import { UserModalProps } from "../Interfaces";
import { ModalCloseButton } from "./ModalCloseButton";
import { useNavigate } from "react-router-dom";

export function UserModal(props: UserModalProps) {
  const {
    name,
    modalIsVisible,
    setModalIsVisible,
    handleFormSubmit,
    handleOnChange,
  } = props;
  const nameModalRef = useRef();
  const navigate = useNavigate();
  const goHomeAndRefresh = () => {
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 500);
  };

  useEffect(() => {
    clickOutsideFunction(
      modalIsVisible,
      setModalIsVisible,
      nameModalRef,
      goHomeAndRefresh
    );
  }, [modalIsVisible]);

  return (
    <>
      {modalIsVisible && (
        <ModalContainer>
          <NameModal ref={nameModalRef}>
            <ModalCloseButton />
            <VFlexContainer>
              <Form onSubmit={handleFormSubmit}>
                <VFlexContainer>
                  <label htmlFor="name">Please enter your name</label>
                  <Input
                    onChange={handleOnChange}
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                  />
                </VFlexContainer>
                <VFlexContainer>
                  <FormButton>Submit</FormButton>
                </VFlexContainer>
              </Form>
            </VFlexContainer>
          </NameModal>
        </ModalContainer>
      )}
    </>
  );
}

const NameModal = styled(Modal)`
  height: 300px;
  width: 400px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media screen and (max-width: 644px) {
    font-size: 1rem;
    height: 200px;
    width: 300px;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  border-radius: 5px;
  max-width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  @media screen and (max-width: 644px) {
    font-size: 1rem;
  }
`;
const FormButton = styled.button`
  width: 160px;
  height: 80px;
  border-radius: 5px;
  background-color: #121212;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  @media screen and (max-width: 644px) {
    font-size: 1rem;
    width: 80px;
    height: 40px;
  }
`;
