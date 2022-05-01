import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    async function getCar() {
      try {
        setLoading(true)
        const response = await axios.get('https://ridecarhouse.herokuapp.com/car');
        setCars(response.data);
        setLoading(false)
      } catch (error) {

        console.error(error);
      }
    }
    getCar()

  }, [])

  return [cars, setCars, loading, setLoading]
};

export default useCars;