import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { Destination } from '@/constants/destinationTypes';

interface CardProps {
  destinations: Destination[]; // Specify the type for the 'destinations' prop
}

const Cards: React.FC<CardProps> = ({ destinations }) => {
  return (
    <div className="card-container flex flex-row relative gap-10 flex-wrap justify-center">
      {destinations.map((destination) => (
        <div key={destination.id} className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <Image src={destination.src} width={550} height={455} alt="" className="object-cover object-center w-full rounded h-72 dark:bg-gray-500" />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">{destination.name}</h2>
              <p className="dark:text-gray-100">{destination.description}</p>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
