import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

const menu = [
  {
    href: 'index.html',
    title:'Home',
  },
  {
    href: '#guitarras',
    title: 'Guitarras'
  },
  {
    href:'precios.html',
    title:'Precios'
  }
]

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={menu}/>
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
