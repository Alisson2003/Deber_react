import React from 'react';
import logo from './mifoto.jpg';

const informacion = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" 
            style={{ width: '300px', height: '350px', objectFit: 'cover' }} />
            <h2>Datos Personales</h2>
            <p>Nombre: Alisson Viracocha</p>
            <p>Edad: 21</p>
            <p>Dirección: Julio Andrade y Ulquñan - Pasaje B, Nueva Aurora</p>
            <p>Teléfono: 099 984 6455</p>
            <p>Correo Institucional: alisson.viracocha@epn.edu.ec</p>
            <p>Correo Personal: alissonviracocha25@gmail.com</p>
        </div>
    );
};

export default informacion;