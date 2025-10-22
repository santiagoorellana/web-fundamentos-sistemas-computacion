import "../../App.css";
import imagen_compuerta from '../../images/circuitos/not.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaNot = () => {
    return (
        <>
            <h4>Compuerta NOT </h4>
            <p>La compuerta lógica NOT realiza la función booleana de inversión o negación de una variable lógica. Se puede definir como una compuerta que proporciona el estado inverso del que esté en su entrada. Sus características más significativas son: </p>
            <Table bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>Símbolo</th>
                        <th>Descripción booleana</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Figure.Image src={imagen_compuerta} />            
                        </td>
                        <td>Y = A'</td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>not A</th>
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
            <p></p>
        </>
    )
}

export default CompuertaNot;