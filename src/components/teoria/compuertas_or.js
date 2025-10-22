import "../../App.css";
import imagen_compuerta from '../../images/circuitos/or.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaOr = () => {
    return (
        <>
            <h4>Compuerta OR </h4>
            <p>La compuerta lógica OR, realiza la operación de suma lógica. Su salida es un 1 lógico si al menos una de sus entradas está a 1. Sus características más significativas son: </p>
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
                        <td>Y = A + B</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A or B</th>
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
            <p></p>
        </>
    )
}

export default CompuertaOr;