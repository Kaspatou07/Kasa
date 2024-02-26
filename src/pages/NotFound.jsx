import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className='Maincontainer'>
      <Header />
      <div className='Style404'>
      <h2>404</h2>
      <p>Oups! La page que vous demander n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;