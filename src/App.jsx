import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import CarCard from "./components/CardCar";
import SkeletonCard from "./components/SkeletonCard";


const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/cars?_page=${currentPage}&_limit=${carsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [currentPage]);

  const totalPages = Math.ceil(24 / carsPerPage);

  return (
    <div className="App">
      <h1>Cars List</h1>
      <Suspense fallback={<SkeletonCard />}>
        <div className="cards-container">
          {loading ? (
            <SkeletonCard />
          ) : (
            cars.map((car) => <CarCard key={car.title} car={car} />)
          )}
        </div>
      </Suspense>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
