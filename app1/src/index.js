import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = "dario";
const apellido = "escobedo";
const alumnos = ["aldo","manuel","adolfo"];
const cuenta = true;
const jsx =(
  <>
    {cuenta === true ? (
      <>
        <h1 className='titulo' style={{color:'red'}}>hola {name}</h1>
        <h1>apellido{apellido}</h1>
        <h1>lista triplex</h1>
        <lu>
          {alumnos.map((nombre, i) =>{
            return <li key={i}>{nombre}</li>
          })}
        </lu>
      </>
    ) :( 
      <h1>estas mal</h1>
    )}
  </>
);

root.render(jsx);