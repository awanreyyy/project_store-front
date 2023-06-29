import React from 'react';

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    image: string; // Added imageUrl property to the category object
    onClick: () => void;
  };
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    const handleClick = () => {
        category.onClick(); // Invoke the onClick function when the tile is clicked
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4" onClick={handleClick}>
        <h3 className="text-lg font-semibold">{category.name}</h3>
        <img src={category.image} alt={category.name} className="mt-2" /> 
        </div>
    );
};

export default CategoryItem;
