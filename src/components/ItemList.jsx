import React, { useState } from "react";

const ItemList = ({ type, items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
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
      <p className="checkbox-label">POSSIBLE TOPPINGS</p>

      {items.map((item, index) => (
        <div
          key={item}
          className={index % 2 === 0 ? "even-item" : "odd-item"}
          onClick={() => handleItemClick(item)}
        >
          {type === "checkbox" ? (
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={item}
                checked={selectedItems.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          ) : (
            <span className="checkbox-label">{item}</span>
          )}
        </div>
      ))}
      <p className="checkbox-label">Select Up to Six</p>
    </div>
  );
};

export default ItemList;
