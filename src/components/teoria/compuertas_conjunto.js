import "../../App.css";
import { Table } from "react-bootstrap";

const CompuertasConjunto = () => {
    return (
        <>
            <h4>Conjunto de compuertas lógicas completo</h4>
            <p>Un conjunto de compuertas lógicas es completo si con él se puede implementar cualquier función booleana. </p>
            <p>A continuacion se pueden ver distintos conjuntos completos.</p>
            <Table striped bordered hover  style={{maxWidth:'350px', display:'inline-block'}}>
                <thead>
                    <tr>
                        <th>Conjuntos completos </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Conjunto AND, OR y NOT. </td>
                    </tr>
                    <tr>
                        <td>Conjunto OR y NOT.</td>
                    </tr>
                    <tr>
                        <td>Conjunto AND y NOT.</td>
                    </tr>
                    <tr>
                        <td>Conjunto NAND.</td>
                    </tr>
                </tbody>
            </Table>
            <h4>Ejemplos de conjuntos completos</h4>
            <p>Utilizando las compuertas NAN es posible implementar las operaciones básicas marcadas en color rojo.</p>
            <Table bordered hover  style={{maxWidth:'500px', display:'inline-block'}}>
                <tbody>
                    <tr>
                        <td><h5>A nan B = <b style={{color:'#cc0000'}}>not A</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>(A nan B) nan (A nan B) = <b style={{color:'#cc0000'}}>A and B</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>(A nan A) nan (B nan B) = <b style={{color:'#cc0000'}}>A or B</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Igualmente, con las compuertas NOR se pueden implementar las compuertas básicas marcadas en color rojo.</p>
            <Table bordered hover  style={{maxWidth:'500px', display:'inline-block'}}>
                <tbody>
                    <tr>
                        <td><h5>A nor A = <b style={{color:'#cc0000'}}>not A</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>(A nor B) nor (A nor B) = <b style={{color:'#cc0000'}}>A and B</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>(A nor A) nor (B nor B) = <b style={{color:'#cc0000'}}>A or B</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p></p>
        </>
    )
};

export default CompuertasConjunto;