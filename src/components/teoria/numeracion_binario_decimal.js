import "../../App.css";
import bin_a_dec from '../../images/matematica/bin_a_dec.gif';
import { Figure, Table } from "react-bootstrap";

const NumeracionDecimalBinario = () => {
    return (
        <>
            <h4>Transformar de decimal a binario</h4>
            <p>Para transformar un número de sistema decimal a sistema binario, se divide el número del sistema decimal entre 2, cuyo resultado <b>entero</b> se vuelve a dividir entre 2, y así sucesivamente. Ordenados los <b>restos</b>, del último al primero, este será el número binario que buscamos.</p>
            <p><b>Ejemplo:</b> Transformar el número decimal <b>131</b> a sistema binario. </p>
            <p>Vea el proceso en la tabla siguiente.</p>
            <Table bordered hover style={{maxWidth:'550px'}}>
                <tbody>
                    <tr>
                        <td><h5>131 dividido entre 2 da 65 y el resto es igual a <b style={{color:'#cc0000'}}>1</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>65 dividido entre 2 da 32 y el resto es igual a <b style={{color:'#cc0000'}}>1</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>32 dividido entre 2 da 16 y el resto es igual a <b style={{color:'#cc0000'}}>0</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>16 dividido entre 2 da 8 y el resto es igual a <b style={{color:'#cc0000'}}>0</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>8 dividido entre 2 da 4 y el resto es igual a <b style={{color:'#cc0000'}}>0</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>4 dividido entre 2 da 2 y el resto es igual a <b style={{color:'#cc0000'}}>0</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>2 dividido entre 2 da 1 y el resto es igual a <b style={{color:'#cc0000'}}>0</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5>1 dividido entre 2 da 0 y el resto es igual a <b style={{color:'#cc0000'}}>1</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Ordenando los restos (mostrados en color rojo), del último al primero obtenemos el número binario <b>10000011</b>.</p>
            <h4>Transformar de binario a decimal</h4>
            <p>Para realizar la conversión de binario a decimal, realice lo siguiente:</p>
            <p>Comenzando por el lado derecho del número en binario, multiplique cada dígito binario por la base, que es 2, elévada a la potencia correspondiente a su posición. la posición del dígito menos significativo es 0, por lo que este primer dígito se eleva a la 0. Después de realizar cada una de las multiplicaciones, sume todas y el número resultante será el equivalente en sistema decimal.</p>
            <p><b>Ejemplo:</b> Convertir el número binario 110101 a sistema decimal. </p>
            <Figure>
                <Figure.Image src={bin_a_dec} width='450' style={{border: '1px solid #000'}} />
                <Figure.Caption>Convertiendo el número binario 110101 a sistema decimal.</Figure.Caption>
            </Figure>            
            <p>Como se muestra en la figura superior, el número decimal obtenido es 53. </p>
        </>
    )
}

export default NumeracionDecimalBinario;