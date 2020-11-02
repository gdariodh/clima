import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, saveBusqueda, saveConsultar }) => {
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    saveBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // se activa para el useEffect
    saveConsultar(true);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje='Los campos son obligatorios' /> : null}
      <div className='input-field col s12'>
        <input
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor='ciudad'>Ciudad:</label>
      </div>

      <div className='input-field col s12'>
        <select name='pais' id='pais' value={pais} onChange={handleChange}>
          <option>--Seleccione un pais--</option>
          <option value='US'>Estados Unidos</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CL'>Chile</option>
          <option value='VE'>Venezuela</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='PE'>Perú</option>
        </select>
        <label htmlFor='pais'>Pais:</label>
      </div>

      <div className='input-field col s12'>
        <input
          type='submit'
          value='Buscar clima'
          className='waves-effect waves-light btn-large btn-block 
      yellow accent-4
      '
        />
      </div>
    </form>
  );
};

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  saveBusqueda: PropTypes.func.isRequired,
  saveConsultar: PropTypes.func.isRequired,
};

export default Formulario;
