
import interruptores_negacion from '../../images/circuitos/interruptores_negacion.gif';
import { Table, Figure } from 'react-bootstrap';

const InterruptoresNegacion = () => {
    return (
        <>
            <h4>Operación negacion</h4>
            <p>La operación negación recibe solo una entrada “a”. Su resultado siempre será el opuesto del valor de entrada. La tabla siguiente muestra el comportamiento:</p>
            <Table bordered hover  style={{maxWidth:'250px'}}>
                <thead>
                    <tr>
                        <th>a</th>
                        <th>a'</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
            <p>Esta operación se representa con un interruptor inverso, donde el terminal “b”  representa el resultado del operador. El interruptor “a“ determina si la corriente pasa desde el terminal “t” al terminal “b”.</p>
            <Figure>
                <Figure.Image src={interruptores_negacion} width='200' />
                <Figure.Caption>Interruptores que implementa la negacion booleana</Figure.Caption>
            </Figure>            
        </>
    )
}

export default InterruptoresNegacion;