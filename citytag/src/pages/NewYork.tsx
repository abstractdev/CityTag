import ny from "../assets/images/ny/ny.jpg";

import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { CityImage } from "../styles/CityImage.styles";
import { FindNy } from "../components/Find";
import { CityImageContainer } from "../styles/CityImage.styles";
import '../styles/NewYork.css'
import { Nydropdown } from "../components/Dropdown";
import { useState } from "react";
// import { getData } from "../components/Firebase";


export function NewYork() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [imageIsClicked, setImageIsClicked] = useState(false)
  
  function nyOnClick(event: any) {
    const rect = event.currentTarget.getBoundingClientRect()
    setMouseX((event.nativeEvent.clientX - rect.left));
    setMouseY((event.nativeEvent.clientY - rect.top));
    setImageIsClicked(!imageIsClicked);
  }

  function findImageOnClick(event: any) {
    if (event.target.className === 'broadway-div') {
      console.log('clicked!')
    }
  }

  const broadwayText = 'Broadway Sign';
  const hotdogText = 'Hot Dog Vendor';
  const ilovenyText = 'I Love NY Shirt';
  const policeText = 'NYPD Officer';

  return (
    <>
      <VFlexContainer>
        <FindNy broadwayText={broadwayText} hotdogText={hotdogText} ilovenyText={ilovenyText} policeText={policeText}/>
        <CityImageContainer className="ny-image-container" onClick={(event) => nyOnClick(event)}>
          <CityImage src={ny} />
          <div data-id="broadway-div" className="broadway-div" onClick={(event) => findImageOnClick(event)}></div>
          <div data-id="hotdog-div" className="hotdog-div"></div>
          <div data-id="iloveny-div" className="iloveny-div"></div>
          <div data-id="police-div" className="police-div"></div>
          <Nydropdown mouseX={mouseX} mouseY={mouseY} broadwayText={broadwayText} hotdogText={hotdogText} ilovenyText={ilovenyText} policeText={policeText} imageIsClicked={imageIsClicked}/>
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}