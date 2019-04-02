import React, { Component } from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/invie.css'
import '../css/animations.css'

import acustica2 from '../images/invie-acustica2x.png'
import classic2 from '../images/invie-classic2x.png'

function mapStateToProps(state){
  return{
    guitarras:state.guitarras,
  }
}

class Guitarras extends Component {
  render() {
    return (
      <section id="guitarras" className="guitarras contenedor">  
      <h2>Nuestra guitarras</h2>
      <div className="video-demo-contenedor">
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
       {/* <video src="video/320x240.ogg"></video> */}
      {
      this.props.guitarras.map( (guitarra, index) => {
        return (
        <article className="guitarra" key={index}>
          <CSSTransitionGroup
            transitionName="flicker"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
          <img 
            className="guitarra-img" 
              key={guitarra.image} 
              src={guitarra.image}   
              /*data-src={acustica||acustica2}*/  
              alt={guitarra.alt} 
              width="350"/>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName = "fade"
            transitionEnterTimeout = {300} /*Tiempo en que la ani sera borrada del dom*/
            transitionLeaveTimeout = {300} /* */
            transitionLeave = {false} /*SI se quiere que no se ejecute una animacion*/
          >
            <div 
              className="guitarra-container" 
              key={guitarra.name}>
              <h3 className="guitarra-title">{guitarra.name}</h3>
              <ol>
                {guitarra.features.map( (feature , index)=>{
                  return(
                    <li key={index}>{feature}</li>
                    )
                  })}
              </ol>
            </div>
          </CSSTransitionGroup>
        </article>
        )
      })
      }
      
      
    </section>
    )
  }
}

export default connect(mapStateToProps)(Guitarras);