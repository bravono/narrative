import Triangle from "../composed/Triangle";

export default function TriangleWidget() {
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
    <Triangle
      heading={heading}
      choiceList={choiceList}
      instruction={instruction}
    />
  );
}
