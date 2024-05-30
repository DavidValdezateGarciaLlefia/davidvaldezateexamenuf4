import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);

    useEffect(() => {
        fetch('https://davidvaldezatejsonapirest.vercel.app/historias')
            .then(response => response.json())
            .then(data => setHistorias(data))
            .catch(error => console.error('Error fetching historias:', error));
    }, []);

    const agregarHistoria = (nuevaHistoria) => {
        fetch('https://davidvaldezatejsonapirest.vercel.app/historias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaHistoria)
        })
            .then(response => response.json())
            .then(historia => setHistorias(prevHistorias => [...prevHistorias, historia]))
            .catch(error => console.error('Error creating historia:', error));
    };

    const editarHistoria = (id, datosActualizados) => {
        fetch(`https://davidvaldezatejsonapirest.vercel.app/historias/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosActualizados)
        })
            .then(response => response.json())
            .then(historiaActualizada => {
                setHistorias(prevHistorias =>
                    prevHistorias.map(historia =>
                        historia.id === id ? historiaActualizada : historia
                    )
                );
            })
            .catch(error => console.error('Error updating historia:', error));
    };

    const borrarHistoria = (id) => {
        fetch(`https://davidvaldezatejsonapirest.vercel.app/historias/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setHistorias(prevHistorias =>
                    prevHistorias.filter(historia => historia.id !== id)
                );
            })
            .catch(error => console.error('Error deleting historia:', error));
    };

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, agregarHistoria, editarHistoria, borrarHistoria }}>
            {children}
        </GlobalContext.Provider>
    );
};