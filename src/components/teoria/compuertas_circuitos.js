import "../../App.css";
import esquema_1 from '../../images/circuitos/representacion_circuito.gif';
import graf_cir_5 from '../../images/circuitos/graf_cir_5.gif';
import { Figure, Table } from 'react-bootstrap';

const CompuertasCircuitos = () => {
    return (
        <>
            <h4>Circuitos lógicos</h4>
            <p>Las compuertas constituyen un elemento fundamental en la construcción de circuitos lógicos. Estos circuitos pueden ser de dos tipos: combinatorios y secuenciales.</p>
            <p>La salida de un circuito <b>combinatorio</b> se define de manera única para cada combinación de entradas. Un circuito combinatorio no tiene memoria; las entradas previas y el estado del sistema no afectan la salida de un  circuito combinatorio. Los circuitos para los cuales la salida es una función no sólo de las entradas sino también del estado del sistema, son <b>secuenciales</b> y no serán estudiados en esta aplicación.</p>
            <p>Los circuitos se pueden representar gráficamente mediante una serie de símbolos que constituyen las compuertas y las conexiones entre estas. Cabe aclarar que en la representación gráfica de un circuito, las líneas pueden cruzarse, lo cual no implica que estén conectadas. </p>
            <p>Se entiende que dos líneas que se cruzan están conectadas, si se coloca un punto en el lugar donde contactan las líneas. </p>
            <p>Por ejemplo, vea el circuito siguiente.</p>
            <Figure.Image src={esquema_1} />
            <p>Los terminales nombrados como A, B y C son los nodos por donde le entra la información al sistema. Por ellos entraran un 0 ó un 1 en forma de niveles de voltajes.</p>
            <p>La gráfica de un circuito combinatorio con una salida se puede representar mediante una función booleana utilizando las operaciones de negación, producto y suma. Por ejemplo, analizaremos el circuito siguiente:</p>
            <Figure.Image src={graf_cir_5} />
            <p>Tomando las terminales A, B y C como variables, seguiremos el flujo del circuito de manera simbólica. </p>
            <p>Primero, se forma el AND de A y B, lo cual produce la salida AB. Luego se forma el OR de esta salida con C para producir la salida (AB)+C. </p>
            <p>Luego se forma el NOT, y la salida sería:</p>
            <Table bordered hover style={{maxWidth:'250px'}}>
                <tbody>
                    <tr>
                        <td><h5>Salida = ((AB)+C)'</h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Observe como utilizamos los paréntesis para indicar las operaciones que se deben realizar primero. Aunque la operación producto se realiza siempre primero, es una buena práctica utilizar los paréntesis.</p>
            <p>De la misma manera, se puede construir un circuito a partir de una función booleana. Solamente hay que ir representando las compuertas en el mismo orden en que deben ser evaluados los operadores.</p>
        </>
    )
}

export default CompuertasCircuitos;