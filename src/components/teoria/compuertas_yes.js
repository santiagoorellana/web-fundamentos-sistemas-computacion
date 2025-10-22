import "../../App.css";
import imagen_compuerta from '../../images/circuitos/yes.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertaYes = () => {
    return (
        <>
            <h4>Compuerta BUFFER </h4>
            <p>La compuerta lógica BUFFER, realiza la función booleana igualdad. En la práctica se suele utilizar como amplificador de corriente. Sus características más significativas son: </p>
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
                        <td>Y = A</td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>buffer A</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
            <p></p>
        </>
    )
}

export default CompuertaYes;