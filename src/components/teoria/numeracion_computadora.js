import niveles from '../../images/circuitos/niveles.gif';
import { Figure, Table } from 'react-bootstrap';

const NumeracionComputadoras = () => {
    return (
        <>
            <h4>Relación entre los sistemas de numeración y la computadora:</h4>
            <p>Comprender cómo una computadora almacena información es crítico para entender su construcción, programación y funcionamiento. En un principio, las computadoras eran analógicas, porque funcionaban con tensiones variables dentro de un rango predeterminado, donde cada valor de tensión representaba un número. Resultaba extremadamente caro producirlas, y difíciles de reparar.</p>
            <p>Teniendo en cuenta estas dificultades, los investigadores centraron su atención en la posibilidad de utilizar un sistema de numeración en base dos para los circuitos de las computadoras.</p>
            <h4>El sistema de numeración binario:</h4>
            <p>Como resultado, se crearon computadoras digitales relativamente más baratas y fáciles de construir, que funcionaban con un sistema de numeración en base dos (conocido como código binario) en las cuales los valores de tensión representaban solamente los dos únicos valores posibles en el álgebra de boole: 0 y 1. Toda la información numérica que se deseaba procesar, debía ser convertida a combinaciones de 0 y 1, esto es código binario. Los números binarios del 1 al 5 son: 1, 10, 11, 100 y 101. </p>
            <Figure>
                <Figure.Image src={niveles} width='250' />
                <Figure.Caption>Niveles digitales de voltaje.</Figure.Caption>
            </Figure>                            
            <p>Un número binario puede ser representado por cualquier mecanismo capaz de estar en dos estados mutuamente exclusivos. En una computadora digital, los valores numéricos se representan por dos voltajes diferentes. Ver figura izquierda.</p>
            <p>También se pueden usar polaridades magnéticas para almacenar información en los discos o diferencias de relieve en los discos ópticos.</p>
            <h4>El sistema de numeración hexadecimal:</h4>
            <p>Además de los sistemas de numeración binario y decimal, en la informática se utiliza el sistema hexadecimal. Este sistema de base 16 es muy cómodo para trabajar con bits o conjuntos de ellos. </p>
            <p>El sistema hexadecimal actual fue introducido en el ámbito de la computación por primera vez por IBM en 1963. Debido a que el sistema usual de numeración es de base decimal y, por ello, sólo se dispone de diez dígitos, se adoptó la convención de usar las seis primeras letras del alfabeto latino para suplir los dígitos que nos faltan para lograr un sistema hexadecimal. El conjunto de símbolos para el sistema hexadecimal sería:</p>
            <Table bordered hover style={{maxWidth:'650px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>
                            S = {'{'}0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F{'}'}
                            </b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Para contar del 1 al 20 en hexadecimal se hace así:</p>
            <Table bordered hover style={{maxWidth:'650px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>
                            1, 2, 3, 4, 5,6, 7, 8, 9, A, B, C, D, E, F, 10, 11, 12, 13 y 14 
                        </b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>En ocasiones se emplean letras minúsculas en lugar de mayúsculas.</p>
            <p>El sistema hexadecimal fué introducido para facilitar el procesamiento e interpretación de la información por los programadores e investigadores. Además que: en la práctica, resulta más fácil transformar un número de binario a hexadecimal, que transformarlo a decimal.</p>
            <Table bordered hover style={{maxWidth:'300px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>10010110</b></h5></td>
                        <td><h5><b style={{color:'#000088'}}>11100011</b></h5></td>
                        <td><h5><b style={{color:'#000088'}}>10101011</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>Por ejemplo, si un programador tubiera que imprimir las direcciones de varias posiciones de memoria, la salida de la impresora sería como se muestra en la figura de la derecha.</p>
            <Table bordered hover style={{maxWidth:'300px'}}>
                <tbody>
                    <tr>
                        <td><h5><b style={{color:'#000088'}}>96</b></h5></td>
                        <td><h5><b style={{color:'#000088'}}>E3</b></h5></td>
                        <td><h5><b style={{color:'#000088'}}>AB</b></h5></td>
                    </tr>
                </tbody>
            </Table>
            <p>En la figura izquierda, se muestra la misma información visualizada en hexadecimal. Obviamente la segunda lista será más fácil de examinar y de comprobar. Esto se debe a que cada dígito hexadecimal representa 4 bits.</p>
        </>
    )
}

export default NumeracionComputadoras;