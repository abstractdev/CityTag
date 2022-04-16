import React from "react";
import styled from "styled-components";
import ny from '../assets/images/ny/ny.jpg'
import { FlexContainer } from "../styles/FlexContainer.styles";


export function NewYork() {
  return (
    <>
        <Spacer/>
        {/* <FindContainer>test</FindContainer> */}
        <NewYorkContainer>
          <NewYorkImage src={ny}/>  
        </NewYorkContainer>
    </>
  );
}


const NewYorkContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  /* background-image: url(${ny});
  background-repeat: no-repeat;
  background-size: contain; */
`

 const NewYorkImage = styled.img`
  max-width: 100%;
  height: auto;

  /* @media screen and (max-width: 600px){
    height: auto;
  } */
` 

// const FindContainer = styled.div`
//   font-size: 2rem;
//   background-color: red;
// `
const Spacer = styled.div`
height: 10%;
max-width: 100%;
`