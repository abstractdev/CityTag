import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { Icon } from "@iconify/react";
import { ModalContainer } from "../styles/Modal.styles";
import { Modal } from "../styles/Modal.styles";
import { useEffect, useRef } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";
import { UserModalProps } from "../Interfaces";

export function UserModal(props: UserModalProps) {
  const {
    name,
    modalIsVisible,
    setModalIsVisible,
    handleFormSubmit,
    handleOnChange,
  } = props;
  const nameModalRef = useRef();
  useEffect(() => {
    clickOutsideFunction(modalIsVisible, setModalIsVisible, nameModalRef);
  }, [modalIsVisible]);

  return (
    <>
      {modalIsVisible && (
        <ModalContainer>
          <NameModal ref={nameModalRef}>
            <CloseContainer>
              <Icon
                icon="fa:close"
                style={{ display: "block", margin: "auto" }}
              />
            </CloseContainer>
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
const CloseContainer = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  color: #121212;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
`;
