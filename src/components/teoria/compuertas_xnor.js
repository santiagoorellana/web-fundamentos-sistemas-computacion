import "../../App.css";
import imagen_compuerta from '../../images/circuitos/xnor.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaXor = () => {
    return (
        <>
            <h4>Compuerta XNOR </h4>
            <p>La compuerta lógica XNOR proporciona un 0 lógico, sólo si la cantidad de unos en sus entradas es impar. Sus características significativas son: </p>
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
                        <td>Y = (A'B + AB')'</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A xnor B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
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
            <p></p>
        </>
    )
}

export default CompuertaXor;