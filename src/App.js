import React, {Fragment} from 'react';

function App() {
  const empleado ={
    nombre : 'Cesar Cueva',
    trabajo: 'Developer'
  }
  return (
      <Fragment>
        <h1>{empleado.nombre}</h1>
        <p>{empleado.trabajo}</p>
        {2+2}
      </Fragment>
  );
}

export default App;
