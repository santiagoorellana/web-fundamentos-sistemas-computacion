import boole from '../../images/matematica/boole.jpg';
import { Figure } from 'react-bootstrap';

const BooleIntroduccion = () => {
    return (
        <>
            <h4>Introducción</h4>
            <p>Álgebra de Boole se denomina así en honor a George Boole, matemático inglés que fue el primero en definirla como parte de un sistema lógico a mediados del siglo XIX. </p>
            <Figure>
                <Figure.Image src={boole} width='150' />
                <Figure.Caption>Retrato de George Boole</Figure.Caption>
            </Figure>            
            <p>El álgebra de Boole fue un intento de utilizar las técnicas algebraicas para tratar expresiones de la lógica proposicional.</p>
            <p>En 1938, Claude Shannon aplicó el álgebra booleana en el diseño de circuitos de conmutación eléctricos, lo cual constituyó un adelanto significativo en el desarrollo de las computadoras digitales.</p>
            <p>En la actualidad, el álgebra de Boole se aplica de forma generalizada en el ámbito del diseño electrónico.</p>
        </>
    )
}

export default BooleIntroduccion;