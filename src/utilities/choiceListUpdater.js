// choiceListUtils.js (or any name you prefer)

export function updateChoiceList(prevChoiceList, activeRow, segmentValue) {
    const updatedChoiceList = prevChoiceList.map((choice) => ({
      ...choice,
      value:
        activeRow.name === choice.name
          ? `${Math.round(segmentValue)}`
          : choice.value,
    }));
  
    const total = updatedChoiceList.reduce((sum, choice) => sum + Number(choice.value), 0);
  
    if (total !== 100) {
      const highestValueIndex = updatedChoiceList.reduce(
        (maxIndex, choice, index, arr) =>
          Number(choice.value) > Number(arr[maxIndex].value) ? index : maxIndex,
        0
      );
  
      updatedChoiceList[highestValueIndex].value = `${Number(updatedChoiceList[highestValueIndex].value) + 1}`;
    }
  
    return updatedChoiceList;
  }