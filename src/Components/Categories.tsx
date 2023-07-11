import React from 'react'
import CategoryTiles from './CategoryTiles'
import kidsImg from '../Pictures/kids.jpg'
import girl from '../Pictures/girl.jpeg'
import menImg from '../Pictures/men.jpg'

interface Category {
    title: string;
    image:string;
}

const Categories: React.FC = () => {
    const tiles: Category[] = [
        {
            title: 'Women',
            image: girl,
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

    const redirectToYouTube = () => {
        const youtubeURL = 'https://www.youtube.com';
        window.open(youtubeURL, '_blank'); 
      };


    return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {tiles.map((tile, index) => (
          <CategoryTiles key={index} {...tile} onClick={redirectToYouTube} />
        ))}
      </div>
    </div>
        
    )
}

export default Categories
