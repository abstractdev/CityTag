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
  goHomeAndRefresh: () => void
) {
  const handleClickOutside = (event: any) => {
    if (
      contentState &&
      contentRef.current &&
      !contentRef.current.contains(event.target)
    ) {
      contentSetter(false);
      goHomeAndRefresh();
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}
