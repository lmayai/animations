import React, { Component } from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group'

import logo2 from '../images/invie2x.png'
import Heart from './Heart.jsx';

//Que datos quiero de mi store
function mapStateToProps(state) {
  return {
    isAnimated:state.isAnimated,
    logo: state.logoPortada,
    menu: state.menu
  }
}


class Portada extends Component {
  render() {
    return (
      //Es posible agregar calses dentro de un elemento o tag del siguiente modo. Lo que se agrega viene de redux
      <section id="portada" className={`portada background ${this.props.isAnimated}`}>
      <header id="header" className="header contenedor"> 
        <figure className="logotipo"> 
          <img src={this.props.logo} srcset={this.props.logo||logo2} width="186" height="60" alt="Invie logotipo"/>
        </figure>
        <span className="burguer-button icon-menu" id="burguer-button"></span>
        <nav className="menu" id="menu"> 
          <ul>
            {this.props.menu.map( (item) => {
              return(
                <li>
                  <a href={item.href}>{item.title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
        <CSSTransitionGroup
          transitionName = "aniInOut"
          transitionEnterTimeout = {800}
          transitionLeaveTimeout = {800}
        >
          {
            !this.props.isAnimated &&
            <div className="contenedor" key="portada">
              <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
              <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
              <a className="button" href="#guitarras">Conoce mas</a>
            </div>
          }
        </CSSTransitionGroup>
        {
          this.props.isAnimated &&
          <Heart />
        }
    </section>
    )
  }
}

// export default Portada
export default connect(mapStateToProps)(Portada);