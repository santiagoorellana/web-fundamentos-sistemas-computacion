import "../../App.css";
import conjuntos_baston from '../../images/circuitos/interruptores_suma.gif';
import { Figure, Table } from "react-bootstrap";

const BooleSuma = () => {
    return (
        <>
            <h4>Operación Suma</h4>
            <p>La operación suma recibe dos valores de entrada “a” y “b”. Si uno de los valores de entrada es 1, el resultado será 1. Es necesario que los dos sumandos sean 0, para que el resultado sea 0. Este comportamiento se puede ver mejor en la tabla siguiente:</p>
            <Table striped bordered hover  style={{maxWidth:'350px'}}>
                <thead>
                    <tr>
                        <th>a</th>
                        <th>b</th>
                        <th>a + b</th>
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
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
            <p>Su equivalente eléctrico es un circuito de dos interruptores en paralelo, que se muestra en la imagen siguiente. El terminal “c” representa el resultado del operador. Los interruptores “a“ y ”b” determinan si la corriente pasa desde el terminal “t” al terminal “c”.</p>
            <Figure>
                <Figure.Image src={conjuntos_baston} width='250' />
                <Figure.Caption>Circuito que representa la suma booleana</Figure.Caption>
            </Figure>            
        </>
    )
}

export default BooleSuma;