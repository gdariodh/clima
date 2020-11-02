import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [busqueda, saveBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, saveConsultar] = useState(false);
  const [resultado, saveResultado] = useState({});
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const getBusqueda = async () => {
      if (consultar) {
        const appId = "f000b5b9a516f4cc09cdce04161d29fb";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        // agregar al state
        saveResultado(result);
        // controlar el proceso de llamado a la api
        saveConsultar(false);
        // detecta si hubo resultados correcto
        if (result.cod === "404") {
          return setError(true);
        } else {
          setError(false);
        }
      }
    };
    getBusqueda();
    /** para desabilitar mensaje de error dependencias, se aplica cuando no quieres que estorben dependencias 
     * en este caso la unica importante es [consultar] ya que es la que hace la peticion a la api.
     * [consultar,ciudad,pais] no hace falta poner asi las dependencias! el codigo es el ultimo comentario.
    */

    // eslint-disable-next-line
  }, [consultar]);

  // carga condicional de componentes
  let component;
  if (error) {
    component = <Error mensaje='Clima no encontrado!' />;
  } else {
    component = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header title='Clima React' />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                saveBusqueda={saveBusqueda}
                saveConsultar={saveConsultar}
              />
            </div>

            {/**Carga condicional de componentes */}
            <div className='col m6 s12'>{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
