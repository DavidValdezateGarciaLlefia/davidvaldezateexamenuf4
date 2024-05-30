import React, { useState, useContext } from 'react';
import './App.css';
import { Button } from "react-bootstrap";

import ModalForm from './componentes/Modal';
import { GlobalContext, GlobalContextProvider } from './context/GlobalContext';
import { Tarjetas } from './componentes/Tarjetas';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHistoria, setCurrentHistoria] = useState({
    titulo: '', fecha: '', experiencia: '', comentario: '', imagen: ''
  });

  // Using the context to access functions and data
  const { agregarHistoria, editarHistoria } = useContext(GlobalContext);

  const abrirModal = (historia = null) => {
    console.log(historia ? 'Editing story' : 'Creating new story');
    setCurrentHistoria(historia || { titulo: '', fecha: '', experiencia: '', comentario: '', imagen: '' });
    setIsModalOpen(true);
  };

  const cerrarModal = () => setIsModalOpen(false);

  const controladorNuevaHistoria = (nuevaHistoria) => {
    if (currentHistoria && currentHistoria.id) {
      editarHistoria(currentHistoria.id, nuevaHistoria);
    } else {
      agregarHistoria(nuevaHistoria);
    }
    console.log("Story managed:", nuevaHistoria);
    cerrarModal();
  };

  return (
    <GlobalContextProvider>
      <div className="flex flex-wrap gap-4 items-center">
        <Tarjetas abrirModal={abrirModal} />
        <Button className="absolute right-4 bottom-4 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg hover:bg-green-600"
                onClick={() => abrirModal(null)} 
                style={{ outline: 'none', border: 'none' }}>
          +
        </Button>
        <ModalForm
          isOpen={isModalOpen}
          onClose={cerrarModal}
          initialData={currentHistoria}
          onSubmit={controladorNuevaHistoria}
        />
      </div>
    </GlobalContextProvider>
  );
}