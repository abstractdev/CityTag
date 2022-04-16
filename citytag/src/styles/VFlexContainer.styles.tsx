import styled from "styled-components";

export const VFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const FindImageContainer = styled(VFlexContainer)`
    height: 60px;
    width: 200px;
    gap: .3rem;
    font-size: .7rem;
  @media screen and (max-width: 600px){
    font-size: 0;
  }
`