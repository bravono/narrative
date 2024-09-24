import { useTimerArrowContext } from "./TimerArrowProvider";

const TimerArrow = ({ className }) => {
  const { imageSrc, altText } = useTimerArrowContext();

  return <img src={imageSrc} alt={altText} className={className} />;
};

export default TimerArrow;
