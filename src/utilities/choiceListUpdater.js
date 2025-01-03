

export function updateChoiceList(choiceList, activeRow, segmentValue) {
  return choiceList.map((choice) => ({
    ...choice, // Copy all other properties
    value:
      activeRow.text === choice.text
        ? Math.round(segmentValue)
        : choice.value, // Update 'value' conditionally
  }));
}
