import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('https://udmmedsm5n.us-east-2.awsapprunner.com/car');

      const data = await response.json();

      setCars(data);
    }

    fetchCars();
  }, []);

  const renderCars = () => {
    return cars.map((car, index) => {
      const { make, model, year } = car
      return (
        <ul key={`${index}${make}`}>
          <li>{make}</li>
          <li>{model}</li>
          <li>{year}</li>
        </ul>
      )
    });
  }

  return (
    <>
      <div>
        {renderCars()}
      </div>
    </>
  )
}

export default App
