import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Tarjeta from "./Tarjeta";  // Asegúrate de que Tarjeta use los componentes de Bootstrap también
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Tarjetas() {
    const { historias } = useContext(GlobalContext);

    return (
        <Container className="relative mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-2 mt-4">Mis historias</h1>
            <Row className="g-4"> {/* g-4 proporciona un espacio entre columnas */}
                {historias.map(historia => (
                    <Col key={historia.id} xs={12} sm={6} md={4}>
                        <Tarjeta historia={historia} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tarjetas;