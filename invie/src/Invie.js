import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
        {/*PORTADA*/}

        <Guitarras />
        {/*GUITARRAS*/}
        
        <Footer />
        {/*FOOTER*/}
      </section>
    );
  }
}

export default Invie;
