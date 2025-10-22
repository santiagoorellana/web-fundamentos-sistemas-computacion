import "../../App.css";
import imagen_compuerta from '../../images/circuitos/and.gif';
import { Table, Figure } from "react-bootstrap";

const CompuertaAnd = () => {
    return (
        <>
            <h4>Compuerta AND </h4>
            <p>La compuerta lógica AND, realiza la función booleana de producto lógico. Su salida será 1 solo si, todas las entradas son 1. Sus características más significativas son: </p>
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
                        <td>Y = AB</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A and B</th>
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
            <p></p>
        </>
    )
}

export default CompuertaAnd;