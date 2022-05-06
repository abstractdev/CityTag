import rightAudio from "../src/assets/sounds/right.wav";
import wrongAudio from "../src/assets/sounds/wrong.wav";
import endAudio from "../src/assets/sounds/end.wav";

export function convertMsToDisplayTime(ms: number) {
  const minutes = ("0" + Math.floor((ms / 60000) % 60)).slice(-1);
  const seconds = ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
  const milliseconds = ("0" + (ms % 1000)).slice(-2);

  return `${minutes}min ${seconds}.${milliseconds}s`;
}

export function AudioFunctions() {
  const right = new Audio(rightAudio);
  const wrong = new Audio(wrongAudio);
  const end = new Audio(endAudio);

  return {
    right,
    wrong,
    end,
  };
}

export function clickOutsideFunction(
  contentState: boolean,
  contentSetter: (contentState: boolean) => void,
  contentRef: any,
  navigate: (delta: number) => void
) {
  const handleClickOutside = (event: any) => {
    if (
      contentState &&
      contentRef.current &&
      !contentRef.current.contains(event.target)
    ) {
      contentSetter(false);
      navigate(-1);
      setTimeout(() => {
        navigate(0);
      }, 200);
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}
export function trimData(string: string) {
  let arr: string[];
  let arr2: string[];
  if (string[0] === "0") {
    arr = string.split("");
    arr.splice(0, 5);
    string = arr.join("");

    if (string[0] === "0") {
      arr2 = string.split("");
      arr2.splice(0, 1);
      string = arr2.join("");
    }
    return string;
  }
  return string;
}
