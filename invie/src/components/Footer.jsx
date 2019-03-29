import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div className="contenedor">
        <div className="contacto">
          <img data-src="images/invie-white.png|images/invie-white2x.png" alt="logotipo blanco"/>
          <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
          <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
        </div>
        <form className="formulario">
          <div className="col1">
            <label for="nombre">Nombre</label>
            <input type="text" required id="nombre" name="nombre"/>
            <label for="email">E-mail</label>
            <input type="email" required id="email" name="email"/>
            <div className="sexo">
              <label for="mujer">
                <input type="radio" id="mujer" checked name="sexo" value="mujer"/> mujer
              </label>
              <label for="hombre">
                <input type="radio" id="hombre" name="sexo" value="hombre"/> hombre
              </label>
            </div>
            <div className="intereses">
              <label for="cotizacion">
                <input type="checkbox" checked id="cotizacion" name="intereses" value="cotizacion"/> Cotización
              </label>
              <label for="reclamos">
                <input type="checkbox" id="reclamos" name="intereses" value="reclamos"/> Reclamos
              </label>
              <label for="comentarios">
                <input type="checkbox" id="comentarios" name="intereses" value="comantarios"/> Comentarios
              </label>
              <label for="otros">
                <input type="checkbox" id="otros" name="intereses" value="otros"/> Otros
              </label>
            </div>
          </div>
          <div className="col2">
            <label for="comentarios">Comentarios</label>
            <textarea name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
            <input type="submit" value="Enviar" className="button"/>
          </div>
        </form>
      </div>
    </footer>
    )
  }
}

export default Footer;