import "../../App.css";
import f1 from '../../images/matematica/f1.gif';
import f2 from '../../images/matematica/f2.gif';
import producto from '../../images/matematica/producto.gif';
import suma from '../../images/matematica/suma.gif';
import negacion from '../../images/matematica/negacion.gif';
import inter from '../../images/matematica/inter.gif';
import union from '../../images/matematica/union.gif';
import neg from '../../images/matematica/neg.gif';
import { Table } from "react-bootstrap";

const BooleNotacion = () => {
    let style1 = {
        width: "155px", 
        height: "auto"
    };

    let style2 = {
        width: "auto", 
        height: "12px"
    };

    return (
        <>
            <h4>Formas de notación del álgebra de Boole</h4>
            <p>Existen diversas formas de representar los operadores y expresiones booleanas. Algunas de estas son: </p>
            <p><b>Notación matemática:</b> Las leyes de De Morgan en notación matemática se representan como se muestra a continuación.</p>
            <Table bordered hover  style={{maxWidth:'250px'}}>
                <tbody>
                    <tr>
                        <td><img src={f1} style={style1} /></td>
                    </tr>
                    <tr>
                        <td><img src={f2} style={style1} /></td>
                    </tr>
                </tbody>
            </Table>
            <p><b>Notación electrónica:</b> Cuando el álgebra de Boole se emplea en electrónica, suele emplearse la misma denominación que para las compuertas lógicas AND, OR y NOT. Las variables pueden tomar los valores 0 y 1. </p>
            <p>Las leyes de De Morgan se representan como se muestra a continuación.</p>
            <Table bordered hover  style={{maxWidth:'350px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>NOT (a OR b) = NOT a AND NOT b</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>NOT (a AND b) = NOT a OR NOT b</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Los operadores se pueden representar tanto en mayúsculas como en minúscula.</p>
            <p><b>Notación lógica:</b> En la lógica se emplean los símbolos <img src={producto} style={style2} /> <img src={suma} style={style2} /> <img src={negacion} style={style2} /> y las variables pueden tomar los valores F (falso) o V (verdadero), equivalentes a 0 y 1. </p>
            <p>Con la notación lógica las leyes de De Morgan serian como se muestra abajo. </p>
            <Table bordered hover  style={{maxWidth:'250px'}}>
                <tbody>
                    <tr>
                        <li><h5><b style={{color:'#000088'}}><img src={negacion} style={style2} /> (a <img src={suma} style={style2} /> b) = <img src={negacion} style={style2} /> a <img src={producto} style={style2} /> <img src={negacion} style={style2} /> b</b></h5></li>
                    </tr>
                    <tr>
                        <li><h5><b style={{color:'#000088'}}><img src={negacion} style={style2} /> (a <img src={producto} style={style2} /> b) = <img src={negacion} style={style2} /> a <img src={suma} style={style2} /> <img src={negacion} style={style2} /> b</b></h5></li>
                    </tr>
                </tbody>
            </Table>
            <p><b>Notación de conjuntos:</b> A la derecha, se muestran las leyes de De Morgan en el formato de Teoría de conjuntos.</p>
            <Table bordered hover  style={{maxWidth:'250px'}}>
                <tbody>
                    <tr>
                        <li><h5><b style={{color:'#000088'}}><img src={neg} style={style2} /> (a <img src={union} style={style2} /> b) = <img src={neg} style={style2} /> a <img src={inter} style={style2} /> <img src={neg} style={style2} /> b</b></h5></li>
                    </tr>
                    <tr>
                        <li><h5><b style={{color:'#000088'}}><img src={neg} style={style2} /> (a <img src={inter} style={style2} /> b) = <img src={neg} style={style2} /> a <img src={union} style={style2} /> <img src={neg} style={style2} /> b</b></h5></li>
                    </tr>
                </tbody>
            </Table>
            <p><b>Notación simplificada:</b> Existe una forma simplificada de representar expresiones booleanas, empleando apóstrofes para indicar la negación, y eliminando la utilización del operador de producto booleano. La sucesión de dos variables indica el producto entre ellas. </p>
            <p>Con esta notación, la representación de las leyes de De Morgan quedaría así:</p>
            <Table bordered hover  style={{maxWidth:'250px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>(a + b)' =  a'b'</b></h5></td>
                    </tr>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>(ab)' = a' + b'</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Todas estas formas de representación son correctas y pueden encontrarse en la bibliografía de diferentes autores. Su utilización no modifica el álgebra de boole, solo su aspecto simbólico. En este material emplearemos la notación simplificada por las comodidades que esta brinda en la escritura.</p>
        </>
    )
}

export default BooleNotacion;