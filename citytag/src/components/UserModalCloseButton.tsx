import { Icon } from "@iconify/react";
import { CloseContainer } from "../styles/Modal.styles";
import { UserModalCloseButtonProps } from "../Interfaces";

export function UserModalCloseButton(props: UserModalCloseButtonProps) {
const {setUserModalIsOpen} = props
  return (
    <>
      <CloseContainer onClick={() => setUserModalIsOpen(false)}>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </CloseContainer>
    </>
  );
}
