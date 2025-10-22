import "../../App.css";
import interruptores_producto from '../../images/circuitos/interruptores_producto.gif';
import { Table, Figure } from "react-bootstrap";

const BooleProducto = () => {
    return (
        <>
            <h4>Operación producto</h4>
            <p>La operación producto recibe dos valores de entrada “a” y “b”. Su resultado es 1 solo si los dos valores de entrada son 1. Si uno solo de ellos es 0 el resultado será 0. En la tabla siguiente se muestra su comportamiento:</p>
            <Table striped bordered hover  style={{maxWidth:'350px'}}>
                <thead>
                    <tr>
                        <th>a</th>
                        <th>b</th>
                        <th>a · b</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
            <p>En lógica de interruptores se representa como el circuito en serie de dos interruptores de la imagen siguiente. Los interruptores “a“ y ”b” determinan si la corriente pasa desde el terminal “t” al terminal “c”.</p>
            <Figure>
                <Figure.Image src={interruptores_producto} width='300' />
                <Figure.Caption>Circuito que representa el producto booleano</Figure.Caption>
            </Figure>            
        </>
    )
}

export default BooleProducto;