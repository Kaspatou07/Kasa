import React from 'react';
import Gallery from '../components/Gallery';  
import Bannerimg from '../images/falaise.png';
import Header from '../components/Header';
import '../styles/Style.scss';
import Footer from '../components/Footer';


function Home() {
  return (
    
    <div className='Maincontainer'>
        <Header />
      <div className='sectionGallery'>
          <div className='SectionBanner'>
            <img src={Bannerimg} alt='falaises' />
            <h1>Chez vous, partout ailleurs</h1>
          </div>
        <Gallery />
      </div>
      <Footer />
    </div>
    
  );
}

export default Home;
