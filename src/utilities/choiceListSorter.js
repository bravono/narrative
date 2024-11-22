export function sortChoiceListByValue(choiceList, isDescending) {
  const sortedList = [...choiceList].sort((a, b) => {
    const valueA = Number(a.value);
    const valueB = Number(b.value);
    return isDescending ? valueB - valueA : valueA - valueB;
  });
  return sortedList;
}

export function sortChoiceListByName(choiceList, isDescending) {
  const sortedList = [...choiceList].sort((a, b) => {
    const nameA = a.name.toLowerCase(); 
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return isDescending ? 1 : -1; 
    }
    if (nameA > nameB) {
      return isDescending ? -1 : 1;
    }
    return 0; // names are equal
  });
  return sortedList;
}
