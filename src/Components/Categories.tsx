import React from 'react'
import CategoryTiles from './CategoryTiles'
import kidsImg from '../Pictures/kids.jpg'
import womenImg from '../Pictures/girl.jpeg'
import menImg from '../Pictures/men.jpg'


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

    const handleClick = (title: string) => {
        console.log('Something was clicked:', title);
    };

    return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shop by category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiles.map((tile, index) => (
          <CategoryTiles key={index} {...tile} onClick={() => handleClick(tile.title)} />
        ))}
      </div>
    </div>
        
    )
}

export default Categories
