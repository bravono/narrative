import React, { useState } from "react";

const ItemList = ({ type, items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedItems.includes(selectedValue)) {
      setSelectedItems(selectedItems.filter((item) => item !== selectedValue));
    } else {
      setSelectedItems([...selectedItems, selectedValue]);
    }
  };

  const handleCheckboxChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedItems.includes(selectedValue)) {
      setSelectedItems(selectedItems.filter((item) => item !== selectedValue));
    } else {
      setSelectedItems([...selectedItems, selectedValue]);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {type === "select" ? (
            <select onChange={handleSelectChange} value={selectedItems}>
              <option value="">Select an item</option>
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ) : (
            <label>
              <input
                type="checkbox"
                value={item}
                checked={selectedItems.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          )}
        </div>
      ))}
      <p>Selected items: {selectedItems.join(", ")}</p>
    </div>
  );
};

export default ItemList;
