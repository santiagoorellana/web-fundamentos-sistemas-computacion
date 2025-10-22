import claude_shannon from '../../images/matematica/claude_shannon.jpg';
import { Figure } from 'react-bootstrap';

const CompuertasIntroduccion = () => {
    return (
        <>
            <h4>Introducción</h4>
            <p>Casi un siglo después de aparecer la obra de George Boole, varias personas observaron que el álgebra booleana se podía utilizar para el análisis y diseño de circuitos eléctricos; en particular Claude Elwood Shannon, quien experimentaba con interruptores electromagnéticos para implementar los operadores booleanos.</p>
            <Figure>
                <Figure.Image src={claude_shannon} width='150' />
                <Figure.Caption>Retrato de Claude Elwood Shannon</Figure.Caption>
            </Figure>            
            <p>En 1937, Claude Shannon presentó su tesis doctoral titulada “Un Análisis Simbólico de Circuitos Conmutadores y Relés”, en la cual implementaba el Álgebra de Boole y aritmética binaria utilizando interruptores electromagnéticos y conmutadores, por primera vez en la historia.</p>
            <p>La tesis de Shannon, básicamente fundó el diseño práctico de circuitos digitales. </p>
            <p>Estos circuitos digitales conocidos como compuertas lógicas, serían la base sobre la cual se crearían las actuales computadoras digitales.</p>
        </>
    )
}

export default CompuertasIntroduccion;