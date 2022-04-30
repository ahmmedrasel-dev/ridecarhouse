import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    async function getCar() {
      try {
        const response = await axios.get('https://intense-mesa-21235.herokuapp.com/car');
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