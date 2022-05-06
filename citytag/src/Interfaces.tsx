export interface CityProps {
  mouseX: number;
  mouseY: number;
  imageIsClicked: boolean;
  isActive: boolean;
  time: number;
  clickHistory: string[];
  setTime: (prevstate: (time: number) => number) => void;
  setIsActive: (isActive: boolean) => void;
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
  geishaIsFound?: boolean;
  parasolIsFound?: boolean;
  sushiIsFound?: boolean;
  sumoIsFound?: boolean;
  setGeishaIsFound?: (geishaIsFound: boolean) => void;
  setParasolIsFound?: (parasolIsFound: boolean) => void;
  setSushiIsFound?: (sushiIsFound: boolean) => void;
  setSumoIsFound?: (sumoIsFound: boolean) => void;
  brieIsFound?: boolean;
  fleurdelisIsFound?: boolean;
  monalisaIsFound?: boolean;
  tophatIsFound?: boolean;
  setBrieIsFound?: (brieIsFound: boolean) => void;
  setFleurdelisIsFound?: (fleurdelisIsFound: boolean) => void;
  setMonalisaIsFound?: (monalisaIsFound: boolean) => void;
  setTophatIsFound?: (tophatIsFound: boolean) => void;
  dropdownIsShifted?: boolean;
  errorSpanIsVisible?: boolean;
  handleErrorSpan: () => void;
  userModalIsVisible?: boolean;
  setUserModalIsVisible?: (modalIsVisible: boolean) => void;
  leaderboardIsVisible?: boolean;
  setLeaderboardIsVisible: (leaderboardIsVisible: boolean) => void;
  newyorkUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  setNewyorkUserData?: (
    newyorkUserData: Array<{
      id: string;
      name: string;
      displayTime: string;
      time: number;
    }>
  ) => void;
  parisUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  setParisUserData?: (
    parisUserData: Array<{
      id: string;
      name: string;
      displayTime: string;
      time: number;
    }>
  ) => void;
  rioUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  setRioUserData?: (
    rioUserData: Array<{
      id: string;
      name: string;
      displayTime: string;
      time: number;
    }>
  ) => void;
  tokyoUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  setTokyoUserData?: (
    tokyoUserData: Array<{
      id: string;
      name: string;
      displayTime: string;
      time: number;
    }>
  ) => void;
  handleScoreErrorSpan?: () => void;
  scoreErrorSpanIsVisible?: boolean;
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
  geishaText?: string;
  parasolText?: string;
  sushiText?: string;
  sumoText?: string;
  setGeishaIsFound?: (geishaIsFound: boolean) => void;
  setParasolIsFound?: (parasolIsFound: boolean) => void;
  setSushiIsFound?: (sushiIsFound: boolean) => void;
  setSumoIsFound?: (sumoIsFound: boolean) => void;
  brieText?: string;
  fleurdelisText?: string;
  monalisaText?: string;
  tophatText?: string;
  setBrieIsFound?: (brieIsFound: boolean) => void;
  setFleurdelisIsFound?: (fleurdelisIsFound: boolean) => void;
  setMonalisaIsFound?: (monalisaIsFound: boolean) => void;
  setTophatIsFound?: (tophatIsFound: boolean) => void;
  dropdownIsShifted?: boolean;
  errorSpanIsVisible?: boolean;
  handleErrorSpan: () => void;
}

export interface FindProps {
  broadwayText?: string;
  hotdogText?: string;
  ilovenyText?: string;
  policeText?: string;
  broadwayIsFound?: boolean;
  hotdogIsFound?: boolean;
  ilovenyIsFound?: boolean;
  policeIsFound?: boolean;
  dancerText?: string;
  flagText?: string;
  soccerText?: string;
  tambourineText?: string;
  dancerIsFound?: boolean;
  flagIsFound?: boolean;
  soccerIsFound?: boolean;
  tambourineIsFound?: boolean;
  geishaText?: string;
  parasolText?: string;
  sushiText?: string;
  sumoText?: string;
  geishaIsFound?: boolean;
  parasolIsFound?: boolean;
  sushiIsFound?: boolean;
  sumoIsFound?: boolean;
  brieText?: string;
  fleurdelisText?: string;
  monalisaText?: string;
  tophatText?: string;
  brieIsFound?: boolean;
  fleurdelisIsFound?: boolean;
  monalisaIsFound?: boolean;
  tophatIsFound?: boolean;
}

export interface HeaderProps {
  time: number;
  isActive: boolean;
}

export interface TimerProps {
  time: number;
  isActive: boolean;
}

export interface HomeProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export interface DivProps {
  broadwayIsFound?: boolean;
  hotdogIsFound?: boolean;
  ilovenyIsFound?: boolean;
  policeIsFound?: boolean;
  brieIsFound?: boolean;
  fleurdelisIsFound?: boolean;
  monalisaIsFound?: boolean;
  tophatIsFound?: boolean;
  dancerIsFound?: boolean;
  flagIsFound?: boolean;
  soccerIsFound?: boolean;
  tambourineIsFound?: boolean;
  geishaIsFound?: boolean;
  parasolIsFound?: boolean;
  sushiIsFound?: boolean;
  sumoIsFound?: boolean;
}

export interface UserModalProps {
  name: string;
  userModalIsVisible: boolean;
  setUserModalIsVisible: (modalIsVisible: boolean) => void;
  handleFormSubmit: (event: any) => void;
  handleOnChange: (event: any) => void;
}

export interface LeaderboardModalProps {
  cityColor: string;
  cityFont: string;
  cityText: string;
  leaderboardIsVisible?: boolean;
  setLeaderboardIsVisible?: (modalIsVisible: boolean) => void;
  newyorkUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  parisUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  rioUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  tokyoUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
}

export interface LeaderboardModalCloseButtonProps {
  setLeaderboardIsVisible?: (leaderboardIsVisible: boolean) => void;
}
export interface UserModalCloseButtonProps {
  setUserModalIsVisible?: (userModalIsVisible: boolean) => void;
}
export interface LeaderboardProps {
  cityFont?: string;
  cityColor?: string;
  newyorkUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  parisUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  rioUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
  tokyoUserData?: Array<{
    id: string;
    name: string;
    displayTime: string;
    time: number;
  }>;
}
