import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Style.scss';
import logementsData from '../logements/logements.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import goldenStar from '../images/staractive.svg';
import grayStar from '../images/starinactive.svg';

const FicheLogement = () => {
  const { id } = useParams();
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    try {
      const parsedLogements = JSON.parse(JSON.stringify(logementsData));
      setLogements(parsedLogements);
    } catch (error) {
      console.error('Erreur lors de la lecture des données logements', error);
    }
  }, []);

  useEffect(() => {
    
    if (logements.length > 0) {
      const isValidId = logements.some((item) => item.id === id);

      if (!isValidId) {
        
        window.location='/404';
      }
    }
  }, [id, logements]);
 
  
  const logement = useMemo(() => logements.find((item) => item.id === id),[logements, id]);



// Pour le Ranking
  const ratingStars = useMemo(() => Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < logement?.rating ? goldenStar : grayStar}
      alt={index < logement?.rating ? 'Golden Star' : 'Gray Star'}
    />
  )),[logement]);

  return logement?(
      <div className='ficheLogement'>
        <Header />
        <section className='Sectionlogements'>
            <Carousel pictures={logement.pictures} />
            <div className="Informationslogements">
              <div className='TitreAnnonce'>
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
              </div>
                  <div className="tag">
                  <ul>
                    {logement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                    ))}
                  </ul>
                  </div>
                  <div className="hote">
                  <p>{logement.host.name}</p>
                  <img src={logement.host.picture} alt={`Nom de l'hôte ${logement.host.name}`} />
                  </div>
                  <div className='Rating'>
                  <p>{ratingStars}</p>
                  </div>
              <div className='CollapseAlign logementCollapse'>
              <Collapse title="Description" content={<p>{logement.description}</p>} />
              <Collapse title="Équipements" content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
              />
              </div>
            </div>
        </section>
        <Footer />
        </div>
  ):(<div>Loading...</div>);
};

export default FicheLogement;
