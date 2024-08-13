import React, { useState } from 'react';
import Card from './Card';
import data from '../data/data.json';
import Pagination from './Pagination';

const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 30;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="card-list">
        {currentCards.map((car, index) => (
          <Card 
            key={index} 
            image={car.image} 
            title={car.title} 
            start_production={car.start_production || 'N/A'} 
            carClass={car.class} 
          />
        ))}
      </div>
      <Pagination 
        cardsPerPage={cardsPerPage} 
        totalCards={data.length} 
        paginate={paginate} 
      />
    </>
  );
};

export default CardList;
