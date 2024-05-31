import React, { useState, useContext, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
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
        <div className="mb-3">
            <Card style={{ width: '100%', height: '350px', backgroundImage: `url("${updatedData.imagen}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Card.Header className="text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <p className="text-uppercase font-weight-bold">{updatedData.titulo}</p>
                    <h3>{historia.fecha}</h3>
                </Card.Header>
                <Card.Body>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                    <p >{updatedData.comentario}</p>
                    <div>
                        <Button onClick={abrirModal} variant="outline-warning" size="sm" className="me-2">
                            <Pencil />
                        </Button>
                        <Button onClick={() => borrarHistoria(historia.id)} variant="outline-danger" size="sm">
                            <Trash2 />
                        </Button>
                    </div>
                </Card.Footer>
            </Card>

            <ModalForm
                isOpen={isModalOpen}
                onClose={cerrarModal}
                initialData={updatedData}
                onSubmit={handleUpdate}
            />
        </div>
    );
}

export default Tarjeta;
