import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}

      {/* <button
        className="filter-btn"
        onClick={()=> filterItems('all')}       
      >
        all
      </button>
      <button
        className="filter-btn"
        onClick={()=> filterItems('breakfast')}       
      >
        breakfast
      </button> */}
    </div>
  );
};

export default Categories;
