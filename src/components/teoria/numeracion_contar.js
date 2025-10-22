import digitos_mas_menos_significativos from '../../images/matematica/digitos_mas_menos_significativos.gif';
import "../../App.css";
import { Table } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';

const NumeracionContar = () => {
    return (
        <>
            <h4>El proceso de contar:</h4>
            <p>El proceso de contar es aditivo. El algoritmo que se emplee para hacerlo depende en gran medida del sistema de numeración que se utiliza, pero sus principios son siempre los mismos.</p>
            <p>En los sistemas posicionales, para escribir un número debemos tener en cuenta la cantidad de caracteres posibles y la posición de los mismos. Ejemplos de sistemas posicionales son los sistemas: binario, octal, decimal y hexadecimal. </p>
            <p>La cantidad máxima de caracteres presentes en un sistema de numeración, es la base del sistema de numeración. Cuando se escriben números en sistemas de numeración de diferentes bases, se suele indicar la base del sistema colocando un subíndice con la base del sistema al número que se escribe. </p>
            <p>Los números en un sistema posicional se componen de combinaciones de caracteres. Los caracteres son más significativos cuanto más a la izquierda se encuentran; menos significativos cuanto más a la derecha se encuentran. A los caracteres que componen un número se les puede llamar dígitos, y al primero de la derecha se le llama: dígito más significativo.</p>
            <Figure>
                <Figure.Image src={digitos_mas_menos_significativos} width='550' />
                <Figure.Caption>Valor de los dígitos según la posición</Figure.Caption>
            </Figure>            
            <p>En la tabla siguiente se muestra un conteo en tres sistemas posicionales distintos, donde se puede ver con facilidad el principio básico del proceso de contar en un sistema de numeración posicional. </p>
            <Table striped bordered hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th>binario</th>
                        <th>decimal</th>
                        <th>hexadecimal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>110</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>111</td>
                        <td>7</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>1000</td>
                        <td>10</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>1001</td>
                        <td>11</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>1010</td>
                        <td>12</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>1011</td>
                        <td>13</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>1100</td>
                        <td>14</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>1101</td>
                        <td>15</td>
                        <td>D</td>
                    </tr>
                    <tr>
                        <td>1110</td>
                        <td>16</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>17</td>
                        <td>F</td>
                    </tr>
                    <tr>
                        <td>10000</td>
                        <td>20</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>10001</td>
                        <td>21</td>
                        <td>11</td>
                    </tr>  
                </tbody>                  
            </Table>            

            <p>Se van agregando unidades al dígito menos significativo y una vez que la cantidad resultante excede al máximo valor representable por un carácter, se hace cero este dígito y se le agrega una unidad al otro dígito que se encuentra inmediatamente a la izquierda del dígito menos significativo.</p>
            <p>Este proceso de agregar unidades al dígito de la izquierda, se llama acarreo.</p>
            <p>Para seguir contando, se vuelven a agregar unidades al dígito más significativo repitiendo el proceso. </p>
            <p>En el sistema decimal, cada vez que un dígito excede el valor nueve, se coloca un cero en su lugar y se produce un acarreo hacia la izquierda.</p>
        </>
    )
}

export default NumeracionContar;