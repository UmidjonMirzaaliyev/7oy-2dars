const CarCard = ({ car }) => (
  <div className="card">
    <img src={car.image} alt={car.title} />
    <div className="content">
      <h3>{car.title}</h3>
      <p>{car.class}</p>
      {car.start_production && <p>Start Production: {car.start_production}</p>}
    </div>
  </div>
);

export default CarCard
