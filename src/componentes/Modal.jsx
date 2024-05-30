import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';

const ModalForm = ({ isOpen, onClose, initialData, onSubmit }) => {
  const { editarHistoria, agregarHistoria } = useContext(GlobalContext);
  const [formData, setFormData] = React.useState(initialData);

  React.useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.id) {
      editarHistoria(formData.id, formData);
    } else {
      agregarHistoria(formData);
    }
    onClose(); // Cerrar el modal después de enviar los datos
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{formData.id ? 'Edit Story' : 'New Story'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
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
          <Form.Group>
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
        <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;