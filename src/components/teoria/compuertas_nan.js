import "../../App.css";
import imagen_compuerta from '../../images/circuitos/nan.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaNan = () => {
    return (
        <>
            <h4>Compuerta NAN </h4>
            <p>La compuerta lógica NAN, realiza la operación de producto lógico negado. La compuerta NAN proporciona a su salida un 0 lógico únicamente cuando todas sus entradas están a 1. Sus características más significativas son: </p>
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
                        <td>Y=(AB)'=A'+B'</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A nan B</th>
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
            <p></p>
        </>
    )
}

export default CompuertaNan;