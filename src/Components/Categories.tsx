import React from 'react'
import CategoryTiles from './CategoryTiles'
import kidsImg from '../Pictures/kids.jpg'
import womenImg from '../Pictures/girl.jpeg'
import menImg from '../Pictures/men.jpg'
import { MouseEvent } from 'react';
// import {useNavigate} from 'react-router-dom';


interface Category {
    title: string;
    image:string;
}

const Categories: React.FC = () => {
    const tiles: Category[] = [
        {
            title: 'Women',
            image: womenImg,
          },
          {
            title: 'Men',
            image: menImg,
          },
          {
            title: 'Kids',
            image: kidsImg,
          },
    ]

    // const history = useNavigate();

    const redirectToYouTube = () => {
        const youtubeURL = 'https://www.youtube.com'; // Replace with the desired YouTube URL
        window.open(youtubeURL, '_blank'); // Open in a new tab/window
        // Alternatively, you can use the following line to navigate in the same tab/window:
        // history.push(youtubeURL);
      };

    // const handleClick = (event: MouseEvent) => {
    //     console.log('Something was clicked:', event);
    // };

    return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shop by category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiles.map((tile, index) => (
          <CategoryTiles key={index} {...tile} onClick={redirectToYouTube} />
        ))}
      </div>
    </div>
        
    )
}

export default Categories
