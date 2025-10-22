
import { Button, Modal, Badge } from 'react-bootstrap';
import  { FaCheck } from "react-icons/fa";

function ShowModalPractice({show, type, title, text, onHide}) {
  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>
            <Badge bg={type}>{title}</Badge>
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body><h5>{text}</h5></Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>
          <FaCheck fontSize={26} /> Continuar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowModalPractice;
