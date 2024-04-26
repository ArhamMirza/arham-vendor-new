import React from 'react';

const CategoryPopup = ({ show, categories, onSelect, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="select-category-text">Select Category</div>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPopup;
