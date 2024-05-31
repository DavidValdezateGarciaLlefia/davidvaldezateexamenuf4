import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
const ModalForm = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState(initialData);
  const { editarHistoria, agregarHistoria } = useContext(GlobalContext);

  useEffect(() => {
    setFormData(initialData); // Ensures formData is updated when initialData changes
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.id) {
      editarHistoria(formData.id, formData); // Edit existing story
    } else {
      agregarHistoria(formData); // Add new story
    }
    onClose(); // Close the modal after submission
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formData.id ? `Edit Story: ${formData.titulo}` : 'New Story'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter comment"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {formData.id ? 'Edit' : 'Create'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;