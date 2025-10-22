
import { Button, Modal, Badge } from 'react-bootstrap';
import  { FaCheck } from "react-icons/fa";

const mesagesModals = [
  {
    "title":"", 
    "text":""
  },
  {
    "title":"FELICIDADES!", 
    "text":"Ha obtenido la máxima puntuación",
    "style":"success"
  },
  {
    "title":"INCOMPLETO", 
    "text":"Debe responder todas las preguntas para obtener una evaluacion.",
    "style":"danger"
  }
];

function ShowModalEvaluation({show, onHide}) {
  return (
    <Modal
      show={show > 0}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>
            <Badge bg={mesagesModals[show].style}>
              {mesagesModals[show].title}
            </Badge>
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{mesagesModals[show].text}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>
          <FaCheck fontSize={26} /> Continuar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowModalEvaluation;
