import corriente from '../../images/circuitos/corriente.gif';
import chip_esquema from '../../images/circuitos/chip_esquema.gif';
import { Figure } from 'react-bootstrap';

const CompuertasCompuertas = () => {
    return (
        <>
            <h4>Compuertas lógicas</h4>
            <p>En una computadora digital sólo existen dos posibilidades, que se escriben como 0 y 1, para el objeto mínimo e indivisible llamado bit. Todos los programas y datos son combinaciones de bits. Estas combinaciones de bits sirven de entrada a circuitos digitales que procesan según el estado de dichas combinaciones.</p>
            <p>Los circuitos digitales representan los 1 y 0 con dos niveles diferentes de voltaje. Ver figura inferior. </p>
            <Figure>
                <Figure.Image src={corriente} width='300' />
                <Figure.Caption>Niveles de voltaje diferentes</Figure.Caption>
            </Figure>            
            <p>Los elementos primarios de un circuito digital son las compuertas lógicas. Una compuerta lógica es un dispositivo electrónico que expresa físicamente un operador booleano.</p>
            <p>Cada compuerta lógica consiste en una red de dispositivos interruptores que cumple las condiciones booleanas para el operador particular. Se suelen integrar en un chip. </p>
            <p>Vea a continuacion el esquema interno de un circuito integrado (chip) que contiene en su interior cuatro compuertas AND. </p>
            <Figure>
                <Figure.Image src={chip_esquema} width='150' />
                <Figure.Caption>Esquema de un chip con 4 compuertas AND</Figure.Caption>
            </Figure>            
            <p>La tecnología microelectrónica actual permite la elevada integración de circuitos electrónicos de conmutación dentro de un pequeño circuito integrado.</p>
            <p>Los microprocesadores son construidos de esta manera, pero a escalas más pequeñas.</p>
            <p>En la actualidad, la electrónica digital moderna se está orientando hacia el uso de la nanotecnología para la creación de compuertas lógicas moleculares, que hagan posible la miniaturización a gran escala, de circuitos lógicos.</p>
        </>
    )
}

export default CompuertasCompuertas;