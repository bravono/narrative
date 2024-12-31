import Barrel from "../composed/Barrel";

export default function BarrelWidget() {
  const heading = "heading";
  const choiceList = [
    {
      name: "item 1",
      text: "Kano",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
    {
      name: "item 2",
      text: "Lagos",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
    {
      name: "item 3",
      text: "Port hacort",
      value: 0,
      scales: [0, 0, 0, 0, 0, 0],
    },
  ];
  const questionType = [
    "multipleChoice",
    "singleChoice",
    "rating",
    "ranking",
    "scale",
  ];
  const instruction = "Your instruction";

  return (
    <Barrel
      heading={heading}
      choiceList={choiceList}
      instruction={instruction}
    />
  );
}
