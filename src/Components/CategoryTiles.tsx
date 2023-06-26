import React from 'react'

interface CategoryTileProps {
    title: string;
    image: string;
    onClick: () => void;
}

const CategoryTiles: React.FC<CategoryTileProps> = ({title,image,onClick}) => {
    return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      {/* <h3 className="text-xl font-semibold mb-2">{title}</h3> */}
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
        {title} </button>
    </div>
    );
};

export default CategoryTiles
