import React from 'react'
import UniversitiesCard from '../Components/Cards/UniversitiesCard';

const UniversitiesSection = () => {

    const cardsData = [
        { title: 'Diligord', image: 'https://unsplash.it/500/500/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
        // Add more card data as needed
        { title: 'Diligord', image: 'https://unsplash.it/500/500/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
        { title: 'Diligord', image: 'https://unsplash.it/500/500/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
      ];


  return (
    <div className='wrapper'>
    <div className="cols">
        {cardsData.map((card, index) => (
            <UniversitiesCard key={index}{...UniversitiesCard}/>
        ))}
    </div>      
    </div>
  )
}

export default UniversitiesSection;
