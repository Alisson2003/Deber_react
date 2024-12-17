import React from 'react';
import logo from './mifoto.jpg';

const informacion = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" 
            style={{ width: '300px', height: '350px', objectFit: 'cover' }} />
            <h2>Datos Personales</h2>
            <p><strong>Nombre:</strong> Alisson Viracocha</p>
            <p><strong>Edad:</strong> 21</p>
            <p><strong>Dirección:</strong> Julio Andrade y Ulquñan - Pasaje B, Nueva Aurora</p>
            <p><strong>Teléfono:</strong> 099 984 6455</p>
            <p><strong>Correo Institucional:</strong> alisson.viracocha@epn.edu.ec</p>
            <p><strong>Correo Personal:</strong> alissonviracocha25@gmail.com</p>
        </div>
    );
};

export default informacion;