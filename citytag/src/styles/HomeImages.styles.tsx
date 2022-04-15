import styled from "styled-components";
import { HomeImageContainer } from "./HomeImageContainer";
import ny from '../assets/images/ny/ny.jpg'
import rio from '../assets/images/rio/rio.jpg'
import tokyo from '../assets/images/tokyo/tokyo.jpg'
import paris from '../assets/images/paris/paris.jpg'

export const HomeNy = styled(HomeImageContainer)`
  background-image: url(${ny});
  /* align-self: center; */
`;
export const HomeRio = styled(HomeImageContainer)`
  background-image: url(${rio});
`;
export const HomeTokyo = styled(HomeImageContainer)`
  background-image: url(${tokyo});
`;
export const HomeParis = styled(HomeImageContainer)`
  background-image: url(${paris});
`;