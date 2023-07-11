import React from 'react'

interface CategoryTileProps {
    title: string;
    image: string;
    onClick: (() => void) | undefined;
}

const CategoryTiles: React.FC<CategoryTileProps> = ({title,image,onClick}) => {

    const redirectToYouTube = () => {
        const youtubeURL = 'https://www.youtube.com';
        window.open(youtubeURL, '_blank'); // Open in a new tab/window
        // Alternatively, you can use the following line to navigate in the same tab/window:
        // history.push(youtubeURL);
      };

    return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={title} className=" object-cover rounded-md mb-4 w-full" />
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
        {title} </button>
    </div>
    );
};

export default CategoryTiles
