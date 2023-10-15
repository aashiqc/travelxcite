"use client"


import React, { useState } from 'react';
import { Button } from './ui/button';
import Cards from './Cards';
import { destinations } from '@/constants';

const Popular = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All'); // Specify the type as 'string'

  const handleCategoryFilter = (category: string) => { // Specify the type for the 'category' parameter
    setSelectedCategory(category);
  };

  const filteredDestinations =
    selectedCategory === 'All'
      ? destinations
      : destinations.filter((destination) => destination.category === selectedCategory);

  return (
    <section className='flex flex-col gap-8 '>
      <div className="heading flex flex-col lg:flex-row gap-4 ">
        <div className="title ">
          <h2 className='bold-32 lg:bold-40 padding-container'>Popular Cities</h2>
        </div>
        <div className="buttons flex flex-wrap flex-row lg:gap-10 gap-1 padding-container relative justify-center">
          <Button variant="outline" onClick={() => handleCategoryFilter('Beach')}>
            Beach
          </Button>
          <Button variant="outline" onClick={() => handleCategoryFilter('Waterfall')}>
            Waterfall
          </Button>
          <Button variant="outline" onClick={() => handleCategoryFilter('Monument')}>
            Monuments
          </Button>
          <Button variant="outline" onClick={() => handleCategoryFilter('Mountain')}>
            Mountains
          </Button>
          <Button variant="outline" onClick={() => handleCategoryFilter('All')}>
            All
          </Button>
        </div>
      </div>
      <div className="items-center justify-center flex padding-container">
        <Cards destinations={filteredDestinations} /> {/* Pass the filtered destinations */}
      </div>
    </section>
  );
};

export default Popular;
