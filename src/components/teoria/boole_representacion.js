import "../../App.css";
import representacion_circuito from '../../images/circuitos/representacion_circuito.gif';
import { Table, Figure } from "react-bootstrap";

const BooleRepresentacion = () => {
    return (
        <>
            <h4>Funciones booleanas y modos de representación</h4>
            <p>Una función booleana es una expresión que relaciona sus variables mediante los operadores del álgebra de Boole suma lógica, producto lógico y negación. Existen distintas formas de representar una función booleana, en dependencia de las necesidades. Podemos destacar las siguientes:</p>
            <h4>1- Representación algebraica</h4>
            <p>Se utiliza cuando se realizan operaciones algebraicas. Existen distintas formas en las que se puede expresar algebraicamente una misma función. Por ejemplo, las siguientes expresiones booleanas representan una misma función:</p>
            <Table bordered hover style={{maxWidth:'440px'}}>
                <tbody>
                    <tr><td><h5>{"a)"} {"F=[(A+BC')'+ABC]'+AB'C"}</h5></td></tr>
                    <tr><td><h5>{"b)"} {"F=A'BC'+AB'C'+AB'C+ABC'"}</h5></td></tr>
                    <tr><td><h5>{"c)"} {"F=(A+B+C)(A+B+C')(A+B'+C')(A'+B'+C')"}</h5></td></tr>
                </tbody>
            </Table>
            <h4>2- Representación mediante tablas booleanas</h4>
            <p>Una tabla booleana, tabla de verdad o tabla lógica, contiene todos los valores posibles de una función booleana dependiendo del valor de sus variables. El número de combinaciones posibles para una función de n variables vendrá dado por 2 a la potencia n. Una función booleana sólo tiene una tabla booleana. </p>
            <p>A continuación se muestra una función booleana representada como tabla.</p>
            <Table striped bordered hover style={{maxWidth:'350px', textAlign:'right'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>{"[(A+BC')'+ABC]'+AB'C"}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
            <h4>3- Representación Gráfica</h4>
            <p>La representación gráfica se utiliza en circuitos y esquemas electrónicos.</p>
            <Figure>
                <Figure.Image src={representacion_circuito} width='350' />
                <Figure.Caption>Representación gráfica de circuito de una función booleana</Figure.Caption>
            </Figure>            
        </>
    )
}

export default BooleRepresentacion;