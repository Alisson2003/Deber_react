import React from 'react';

const musica = () => {
    return (
        <div>
            <h2>Gustos Musicales Actuales</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <img 
                        src="/imagenes/daddy.jpg" 
                        alt="Artista 1" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Daddy Yankee</p>
                </div>
                <div>
                    <img 
                        src="/imagenes/joey.jpg" 
                        alt="Artista 2" 
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    />
                    <p>Joey Montana</p>
                </div>
            </div>
        </div>
    );
};

export default musica;