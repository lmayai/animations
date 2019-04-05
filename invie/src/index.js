import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

import logoPortada from './images/invie.png'
import platziLogo from './images/platzi2.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'
import cheet from "cheet.js";

import imgEasterA from './images/easter-a.png'
import imgEasterB from './images/easter-b.png'

import { Provider } from 'react-redux'
import { createStore } from 'redux';

const data = {
    isAnimated:false,
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

function reducer(state,action){
    switch(action.type){
        case 'UPDATE_PROPS':{
            const newProps= action.payload.props;
            return {...state, ...newProps}
            
        }
        default:
            return state;
    }
} 

var initialState = data;

const store = createStore(reducer, initialState);

const easter ={
    isAnimated:'is-animated',
    logoPortada: platziLogo,
    menu : [ ],
    guitarras: [
        {
          image: imgEasterA,
          alt: 'Guitarra Padre de familia',
          name:'Invie Familiar',
          features:[
            'Copia de los Simpsons',
            'Aire puro',
            'Chistes malos'
          ]
        },
        {
          image: imgEasterB,
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

cheet('i n v i e', ()=> {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: easter
        }
    });
    console.log('Descubriste el easter egg');
})
  
cheet('b a c k', ()=> {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState
        }
    });
    console.log('Regreso al estado inicial');
})
  
ReactDOM.render(
    <Provider store={store}>
       <Invie />
    </Provider> , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
