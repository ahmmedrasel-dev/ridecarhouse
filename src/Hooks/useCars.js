import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    async function getCar() {
      try {
        const response = await axios.get('http://localhost:5000/car');
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCar()

  }, [])

  return [cars, setCars]
};

export default useCars;