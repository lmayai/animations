import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'

import cheet from "cheet.js";

cheet('i n v i e', ()=> {
  console.log('Descubriste el easter egg');
})

const data = {
  menu : [
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
  ],
  
  logoPortada:logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name:'Invie Acustica',
      features:[
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name:'Invie Classic',
      features:[
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar'
      ]
    }
  ]

}


class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={data.menu} logo={data.logoPortada} />
        {/*PORTADA*/}

        <Guitarras guitarras={data.guitarras} />
        {/*GUITARRAS*/}
        
        <Footer />
        {/*FOOTER*/}
      </section>
    );
  }
}

export default Invie;
