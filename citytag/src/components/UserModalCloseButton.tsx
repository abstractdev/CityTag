import { Icon } from "@iconify/react";
import { CloseContainer } from "../styles/Modal.styles";
import { UserModalCloseButtonProps } from "../Interfaces";
import { useNavigate } from "react-router-dom";

export function UserModalCloseButton(props: UserModalCloseButtonProps) {
  const { setUserModalIsVisible } = props;
  const navigate = useNavigate();
  function handleSetUserModalIsVisible() {
    setUserModalIsVisible(false);
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 500);
  }
  return (
    <>
      <CloseContainer onClick={handleSetUserModalIsVisible}>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </CloseContainer>
    </>
  );
}
