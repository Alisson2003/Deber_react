import React from 'react';
// Usamos ../ para subir un nivel desde components hacia src
import cocinar from '../cocinar.jpg';
import costura from '../costura.jpg';

const hobbies = () => {
    return (
        <div>
            <h2>Hobbies</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src={cocinar}
                        alt="danza" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Cocinar</p>
                </div>
                <div>
                    <img 
                        src={costura}
                        alt="costura" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Cocinar</p>
                </div>
            </div>
        </div>
    );
};

export default hobbies;