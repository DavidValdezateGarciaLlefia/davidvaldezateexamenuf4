import React, { useState, useContext, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { Pencil, Trash2 } from 'lucide-react';
import ModalForm from './Modal';
import { GlobalContext } from '../context/GlobalContext';

export function Tarjeta({ historia }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedData, setUpdatedData] = useState({ ...historia });

    const { editarHistoria, borrarHistoria } = useContext(GlobalContext);

    useEffect(() => {
        setUpdatedData({ ...historia });
    }, [historia]);

    const abrirModal = () => { 
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = (formData) => {
        editarHistoria(historia.id, formData);
        cerrarModal();
    };


    return (
        <div className="m-0.5">
            <div className="card" style={{ width: '475px', height: '350px', backgroundImage: `url("${updatedData.imagen}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="card-header text-white" style={{ backgroundColor: 'transparent' }}>
                    <p className="text-uppercase font-weight-bold">{updatedData.titulo}</p>
                    <h3>{historia.fecha}</h3>
                </div>
                <div className="card-body">
                </div>
                <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                    <p>{updatedData.comentario}</p>
                    <div>
                        <Button onClick={abrirModal} variant="outline-warning" size="sm">
                            <Pencil />
                        </Button>
                        <Button onClick={() => borrarHistoria(historia.id)} variant="outline-danger" size="sm" className="ml-2">
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </div>

            <ModalForm
                isOpen={isModalOpen}
                onClose={cerrarModal}
                initialData={updatedData}
                onSubmit={handleUpdate}
            />
        </div>
    );
}