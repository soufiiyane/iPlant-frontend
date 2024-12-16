import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'How AI can transform customer experience into something AI-mazing',
    date: '06 MAR 2024',
    category: 'E-COMMERCE',
    image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
    description: "Welcome to a world where artificial intelligence isn't just a tool!",
  },
  {
    id: 2,
    title: 'Why is test automation so important for ecommerce websites?',
    date: '16 JUN 2023',
    category: 'E-COMMERCE',
    image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/privatesportshop.png',
  },
  {
    id: 1,
    title: 'How AI can transform customer experience into something AI-mazing',
    date: '06 MAR 2024',
    category: 'E-COMMERCE',
    image: 'https://main.d22su8d5gxh9oa.amplifyapp.com/images/portfolio/grandmercredi.png',
    description: "Welcome to a world where artificial intelligence isn't just a tool!",
  }

];

const NewsCard = ({ item, isLarge, onHover }) => (
  <div
    className={`relative overflow-hidden rounded-lg shadow-lg ${isLarge ? 'col-span-2 row-span-2' : ''}`}
    onMouseEnter={() => onHover(item.image)}
  >
    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <div className="flex space-x-2 mb-2">
        <span className="bg-green-500 text-xs font-semibold px-2 py-1 rounded">{item.category}</span>
        <span className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded">{item.date}</span>
      </div>
      <h3 className={`font-bold ${isLarge ? 'text-2xl' : 'text-lg'} mb-2`}>{item.title}</h3>
      {isLarge && item.description && (
        <p className="text-sm">{item.description}</p>
      )}
    </div>
  </div>
);

const News = () => {
  const [backgroundImage, setBackgroundImage] = useState(newsItems[0].image);

  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-25"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-bold mb-12 text-white">NEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={item.id}
              item={item}
              isLarge={index === 0}
              onHover={setBackgroundImage}
            />
          ))}
        </div>
        <div className="flex justify-end mt-8 space-x-4">
          <button className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200">
            <ArrowLeft size={24} />
          </button>
          <button className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
