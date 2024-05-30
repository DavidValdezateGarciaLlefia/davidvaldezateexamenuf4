
import { Pencil, Trash2 } from 'lucide-react';



import { Modal, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Tarjeta({ historia }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        titulo: historia.titulo,
        fecha: historia.fecha,
        comentario: historia.comentario,
        imagen: historia.imagen
    });

    const { editarHistoria, borrarHistoria } = useContext(GlobalContext);

    const abrirModal = () => { 
        setIsModalOpen(true);
    };

    const cerrarModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        setUpdatedData({
            ...updatedData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = () => {
        editarHistoria(historia.id, updatedData);
        cerrarModal();
    };

    const controladorBorrarHistoria = () => {
        borrarHistoria(historia.id);
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
                <div className="card-footer text-muted d-flex justify-content-between align-items-center" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <p>{historia.comentario}</p>
                    <div>
                        <Button onClick={abrirModal} variant="outline-warning" size="sm">
                            <Pencil />
                        </Button>
                        <Button onClick={controladorBorrarHistoria} variant="outline-danger" size="sm" className="ml-2">
                            <Trash2 />
                        </Button>
                    </div>
                </div>
            </div>

            <Modal show={isModalOpen} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Story: {updatedData.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                name="titulo"
                                value={updatedData.titulo}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter date"
                                name="fecha"
                                value={updatedData.fecha}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter comment"
                                name="comentario"
                                value={updatedData.comentario}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                name="imagen"
                                value={updatedData.imagen}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}