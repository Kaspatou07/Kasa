import React, { useState, useEffect } from 'react';
import Card from './Card'; 
import { Link } from 'react-router-dom';
import logementsData from '../logements/logements.json';

const LogementsList = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    try {
      const parsedLogements = JSON.parse(JSON.stringify(logementsData));
      setLogements(parsedLogements);
    } catch (error) {
      console.error('Erreur lors de la lecture des données logements', error);
    }
  }, []);
  

  return (
    <div>
      <div className='Gallery'>
        {logements.map((logement) => (
          <Link to={`/FicheLogement/${logement.id}`} key={logement.id}>
            <Card logement={logement} />
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default LogementsList;

