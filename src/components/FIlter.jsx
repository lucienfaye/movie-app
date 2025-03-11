import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={ratingFilter}
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;