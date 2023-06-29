import React from 'react';
import womenImg from '../Pictures/girl.jpeg'
import CategoryItem from './CategoryItem';

const categories = [
  {
    id: 1,
    name: 'Shirts',
    image: womenImg,
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
  },
  {
    id: 2,
    name: 'Tops',
    image: womenImg,
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
  },
  {
    id: 3,
    name: 'Skirts',
    image: womenImg, // Replace with the actual image URL for Home & Kitchen
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
  },
  {
    id: 4,
    name: 'Bottoms',
    image:womenImg, // Replace with the actual image URL for Books
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
  },

  {
    id: 5,
    name: 'Trousers',
    image:womenImg, // Replace with the actual image URL for Books
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
 },
 {
    id: 6,
    name: 'Pants',
    image:womenImg, // Replace with the actual image URL for Books
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
 },
 {
    id: 7,
    name: 'Swimwear',
    image:womenImg, // Replace with the actual image URL for Books
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
 },
 {
    id: 8,
    name: 'Sports wear',
    image:womenImg, // Replace with the actual image URL for Books
    onClick: () => {
        window.location.href = 'https://www.youtube.com';
    },
 },
];

const ShopByCategory: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
