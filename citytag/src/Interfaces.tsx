export interface CityProps {
  mouseX: number;
  mouseY: number;
  imageIsClicked: boolean;
  isActive: boolean;
  time: number;
  clickHistory: string[];
  setTime: (prevstate: (time:number) => number) => void;
  setIsActive:(isActive: boolean) => void;
  setClickHistory: (clickHistory: string[]) => void;
  handleMouseClickPosition: (event: React.MouseEvent) => void;
  checkFirebaseForMatch: (event: any, cityName: string) => void;
  broadwayIsFound?: boolean;
  hotdogIsFound?: boolean;
  ilovenyIsFound?: boolean;
  policeIsFound?: boolean;
  setBroadwayIsFound?: (broadwayIsFound: boolean) => void;
  setHotdogIsFound?: (hotdogIsFound: boolean) => void;
  setIlovenyIsFound?: (ilovenyIsFound: boolean) => void;
  setPoliceIsFound?: (policeIsFound: boolean) => void;
  dancerIsFound?: boolean;
  flagIsFound?: boolean;
  soccerIsFound?: boolean;
  tambourineIsFound?: boolean;
  setDancerIsFound?: (dancerIsFound: boolean) => void;
  setFlagIsFound?: (flagIsFound: boolean) => void;
  setSoccerIsFound?: (dancerIsFound: boolean) => void;
  setTambourineIsFound?: (tambourineIsFound: boolean) => void;
}

export interface DropdownProps {
  mouseX: number;
  mouseY: number;
  imageIsClicked: boolean;
  clickHistory: string[];
  setClickHistory: (clickHistory: string[]) => void;
  broadwayText?: string;
  hotdogText?: string;
  ilovenyText?: string;
  policeText?: string;
  setBroadwayIsFound?: (broadwayIsFound: boolean) => void;
  setHotdogIsFound?: (hotdogIsFound: boolean) => void;
  setIlovenyIsFound?: (ilovenyIsFound: boolean) => void;
  setPoliceIsFound?: (policeIsFound: boolean) => void;
  dancerText?: string;
  flagText?: string;
  soccerText?: string;
  tambourineText?: string;
  setDancerIsFound?: (dancerIsFound: boolean) => void;
  setFlagIsFound?: (flagIsFound: boolean) => void;
  setSoccerIsFound?: (dancerIsFound: boolean) => void;
  setTambourineIsFound?: (tambourineIsFound: boolean) => void;
}

export interface FindProps {
  broadwayText?: string,
  hotdogText?: string,
  ilovenyText?: string,
  policeText?: string,
  broadwayIsFound?: boolean,
  hotdogIsFound?: boolean,
  ilovenyIsFound?: boolean,
  policeIsFound?: boolean,
  dancerText?: string;
  flagText?: string;
  soccerText?: string;
  tambourineText?: string;
  dancerIsFound?: boolean;
  flagIsFound?: boolean;
  soccerIsFound?: boolean;
  tambourineIsFound?: boolean;
}