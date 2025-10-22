
import { Badge } from 'react-bootstrap';
import  { FaCheck, FaTimes } from "react-icons/fa";

export const styleValue = {width:'50px'};
export const styleHead = {width:'50px', color:'#000088'};

/**
 * Muestra la evaluación de un ejercicio.
 * @param {boolean} evaluation - Determina el tipo de evaluación que se muestra: 
 * true=Correcto, false=Error y null=NoEvaluado.
 */
 export const Result = ({evaluation}) => {
    if (evaluation == null){
        return <div><h5><Badge bg="secundary" style={styleValue}>?</Badge></h5></div>;
    }else if (evaluation == true){
        return <div><h5><Badge bg="success" style={styleValue}><FaCheck fontSize={20} /></Badge></h5></div>;
    }else if (evaluation == false){
        return <div><h5><Badge bg="danger" style={styleValue}><FaTimes fontSize={20} /></Badge></h5></div>;
    }else{
        return <div><h5><Badge bg="secundary" style={styleHead}>{evaluation}</Badge></h5></div>;    
    }
}    

