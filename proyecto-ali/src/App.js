import React from 'react';
import Informacion from './informacion';
import Estudios from './components/estudios';
import Herramientas from './components/herramientas';
import Deportes from './components/deportes';
import Musica from './components/musica';
import Hobbies from './components/hobbies';

const App = () => {
  return (
      <div style={{ 
          background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
          padding: '20px', 
          minHeight: '100vh' 
      }}>
          <Informacion />
          <Estudios />
          <Herramientas />
          <Deportes />
          <Musica />
          <Hobbies />
      </div>
  );
};

export default App;
