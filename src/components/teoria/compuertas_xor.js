import "../../App.css";
import imagen_compuerta from '../../images/circuitos/xor.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaXor = () => {
    return (
        <>
            <h4>Compuerta XOR </h4>
            <p>La compuerta lógica XOR, da por resultado un 1 lógico, cuando la cantidad de unos en las entradas es impar. Sus características significativas son: </p>
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
                        <td>Y = A'B + AB'</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A xor B</th>
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
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
            <p></p>
        </>
    )
}

export default CompuertaXor;