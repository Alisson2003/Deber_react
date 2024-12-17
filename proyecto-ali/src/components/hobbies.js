import React from 'react';
// Usamos ../ para subir un nivel desde components hacia src
import danza from '../danza.jpg';
import costura from '../costura.jpg';

const hobbies = () => {
    return (
        <div>
            <h2>Hobbies</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src={danza}
                        alt="danza" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Danza Folklorica</p>
                </div>
                <div>
                    <img 
                        src={costura}
                        alt="costura" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Confeccion uniformes medicos</p>
                </div>
            </div>
        </div>
    );
};

export default hobbies;