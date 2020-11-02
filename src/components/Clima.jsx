import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  const { main, name, weather } = resultado;
  // if para que no marque error de property '0' not found
  if (!weather) return null;
  const { description } = weather[0];
  // unidad kelvin
  const k = 273.15;
  // es para verificar si ha llegado la informacion completa para plasmar!
  if (!name) return null;
  return (
    <div className='card-panel white col s12'>
      
      <div className='black-text'>
        <h2>Clima de {name} </h2>
        <p className='temperatura'>
          {parseFloat(main.temp - k, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          max: {parseFloat(main.temp_max - k, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          min: {parseFloat(main.temp_min - k, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>description: {description}</p>

      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
