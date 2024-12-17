import React from 'react';

const deportes = () => {
    return (
        <div>
            <h2>Galería de Deportes Favoritos</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/imagenes/futbol.jpg" 
                        alt="Deporte 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Fútbol</p>
                </div>
                <div>
                    <img 
                        src="/imagenes/boly.jpg" 
                        alt="Deporte 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Boly</p>
                </div>
                <div>
                    <img 
                        src="/imagenes/natacion.png" 
                        alt="Deporte 3" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Natacion</p>
                </div>
            </div>
        </div>
    );
};

export default deportes;