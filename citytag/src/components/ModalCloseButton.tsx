import { Icon } from "@iconify/react";
import { CloseContainer } from "../styles/Modal.styles";

export function ModalCloseButton() {
  return (
    <>
      <CloseContainer>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </CloseContainer>
    </>
  );
}
