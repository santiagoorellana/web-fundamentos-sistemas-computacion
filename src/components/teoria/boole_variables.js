import interruptor_abierto from '../../images/circuitos/interruptor_abierto.gif';
import interruptor_cerrado from '../../images/circuitos/interruptor_cerrado.gif';
import { Figure } from 'react-bootstrap';

const BooleVariables = () => {
    return (
        <>
            <h4>Variables</h4>
            <p>Una variable tiene valor booleano cuando contiene: un 0 lógico o un 1 lógico. Esto, en la mayoría de los lenguajes de programación, se traduce en false (falso) o true (verdadero), respectivamente.</p>
            <Figure>
                <Figure.Image src={interruptor_abierto} width='200' />
                <Figure.Caption>Interruptor abierto</Figure.Caption>
            </Figure>            
            <p>El 0 lógico es representado eléctricamente como un interruptor abierto, por el que no puede pasar la corriente, por lo que el valor 0 se asocia con la ausencia de corriente.</p>
            <p>En la imagen superior, la corriente desde “a”, no puede pasar a “b”.</p>
            <Figure>
                <Figure.Image src={interruptor_cerrado} width='200' />
                <Figure.Caption>Interruptor cerrado</Figure.Caption>
            </Figure>            
            <p>En cambio, el 1 lógico  es representado por un interruptor cerrado por el que sí puede circular la corriente, por lo que se asocia a la presencia de corriente en un conductor. En la figura inferior:</p>
            <p>Solo pasa la corriente a “b” cuando el interruptor se cierra.</p>
        </>
    )
}

export default BooleVariables;