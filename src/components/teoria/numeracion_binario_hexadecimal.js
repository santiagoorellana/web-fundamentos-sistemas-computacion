import "../../App.css";
import { Table } from "react-bootstrap";

const NumeracionBinarioHexadecimal = () => {
    return (
        <>
            <h4>Transformar de binario a hexadecimal</h4>
            <p>Para realizar la conversión de un número de sistema binario a sistema hexadecimal, debe agrupar el número en grupos de 4 dígitos iniciando por el lado derecho.</p>
            <p>Si al terminar de agrupar no completa 4 dígitos, entonces agregue ceros a la izquierda.</p>
            <p>Luego, a cada grupo de 4 dígitos binario, asígnele un dígito hexadecimal de acuerdo con la tabla mostrada a continuacion. </p>
            <Table bordered hover  style={{maxWidth:'350px'}}>
                <thead>
                    <tr>
                        <td>binarios</td>
                        <td>hexadecimales</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0000</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0001</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0010</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>0011</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>0100</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>0101</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>0110</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>0111</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>1000</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>1010</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>1011</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>1100</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>1101</td>
                        <td>D</td>
                    </tr>
                    <tr>
                        <td>1110</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>F</td>
                    </tr>
                </tbody>
            </Table>
            <p>Los dígitos hexadecimales obtenidos, se agrupan de derecha a izquierda.</p>
            <p><b>Ejemplo:</b></p>
            <p>Convertir el número binario 110111010 a sistema hexadecimal. Proceso:</p>
            <Table bordered hover style={{maxWidth:'300px'}}>
                <tbody>
                    <tr>
                        <td><h5>0001 = 1</h5></td>
                        <td><h5>1011 = B</h5></td>
                        <td><h5>1010 = A</h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Agrupando  los dígitos hexadecimales de derecha a izquierda obtenemos el número exadecimal 1BA.</p>

            <h4>Transformar de hexadecimal a binario</h4>
            <p>Para convertir un número de sistema hexadecimal a sistema binario, debe sistituir cada dígito hexadecimal por sus correspondientes 4 dígitos binarios, de acuerdo con la tabla de conversión presentada anteriormente. </p>
            <p>El número hexadecimal resultante, se forma agrupando los grupos de 4 dígitos binarios en el mismo orden.</p>
            <p><b>Ejemplo:</b></p>
            <p>Convertir el número hexadecimal A47 a sistema binario.</p>
            <Table bordered hover style={{maxWidth:'300px'}}>
                <tbody>
                    <tr>
                    <td><h5>A = 1010</h5></td>
                    <td><h5>4 = 0100</h5></td>
                    <td><h5>7 = 0111</h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Agrupando los grupos de 4 dígitos binarios en el mismo orden, el número en binario obtenido es 101001000111. </p>
        </>
    )
}

export default NumeracionBinarioHexadecimal;
