import { Button } from "react-bootstrap";
import Tarjetas from "../componentes/Tarjetas";
import ModalForm from "../componentes/Modal";
import { useContext, useState } from "react";
import { GlobalContext } from '../context/GlobalContext';

export default function VistaCartas() {

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
        <div className="flex flex-wrap gap-4 items-center">
        
        <Tarjetas abrirModal={abrirModal} />
        <Button 
          className="position-absolute end-0 bottom-0 rounded-circle d-flex align-items-center justify-content-center shadow-lg" 
          style={{ width: '4rem', height: '4rem', fontSize: '2rem', margin: '1rem', border: 'none', outline: 'none' }} 
          variant="warning"
          onClick={() => abrirModal(null)}
        >
          +
        </Button>
        <ModalForm
          isOpen={isModalOpen}
          onClose={cerrarModal}
          initialData={currentHistoria}
          onSubmit={controladorNuevaHistoria}
        />
      </div>
    )
}