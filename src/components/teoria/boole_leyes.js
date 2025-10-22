import "../../App.css";
import { Table } from "react-bootstrap";

const BooleLeyes = () => {
    return (
        <>
            <h4>Leyes fundamentales</h4>
            <p>Las leyes definen reglas precisas de trasformación de unas expresiones en otras equivalentes. Estas son:</p>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley distributiva</th></tr>
                </thead>
                <tbody>
                    <tr><td>a(b+c) = (ab)+(ac)</td></tr>
                    <tr><td>(a+b)c = (ac)+(bc)</td></tr>
                    <tr><td>a+(bc) = (a+b)(a+c)</td></tr>
                    <tr><td>(ab)+c = (ac)(bc)</td></tr>
                    <tr><td>a+a'b = a+b</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley de idempotencia</th></tr>
                </thead>
                <tbody>
                    <tr><td>aa = a</td></tr>
                    <tr><td>a + a = a</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley de involución</th></tr>
                </thead>
                <tbody>
                    <tr><td>(a')' = a</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley conmutativa</th></tr>
                </thead>
                <tbody>
                    <tr><td>ab = ba</td></tr>
                    <tr><td>a+b = b +a</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley asociativa</th></tr>
                </thead>
                <tbody>
                    <tr><td>a(bc) = (ab)c</td></tr>
                    <tr><td>a+(b+c) = (a+b)+c</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Ley cancelación</th></tr>
                </thead>
                <tbody>
                    <tr><td>(ab)+a = a</td></tr>
                    <tr><td>(a+b)a = a</td></tr>
                </tbody>
            </Table>
            <Table bordered hover  style={{maxWidth:'200px', display:'inline-block'}}>
                <thead>
                    <tr><th>Leyes de De Morgan</th></tr>
                </thead>
                <tbody>
                    <tr><td>(a+b)' = a'b'</td></tr>
                    <tr><td>(ab)' = a'+b'</td></tr>
                </tbody>
            </Table>
        </>
    )
};

export default BooleLeyes;