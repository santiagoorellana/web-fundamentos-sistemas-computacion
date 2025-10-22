import conjuntos_baston from '../../images/matematica/conjuntos_baston.gif';
import numeros_maya from '../../images/matematica/numeros_maya.gif';
import valor_digitos_posicion from '../../images/matematica/valor_digitos_posicion.gif';
import { Figure } from 'react-bootstrap';

const NumeracionIntroduccion = () => {
    return (
        <>
            <a name="top"></a>
            <h4>Representación de cantidades por números:</h4>
            <p>No siempre el hombre ha sabido contar. Los primeros seres humanos eran incapaces de concebir los números desde la perspectiva de abstracción. No tenían conciencia de que los conjuntos de objetos, de los cuales estaban rodeados, podían presentar una característica que es independiente de la naturaleza de los objetos que conforman el conjunto. Esta característica es la cantidad.</p>
            <p>Estos hombres no percibían la característica común existente entre conjuntos tales como: una pareja de cabras, los ojos de la cara, las orejas y los cuernos de un elefante. Independientemente de ser conjuntos completamente diferentes, todos representan la misma cantidad.</p>
            <p>Con el paso del tiempo, la necesidad creciente de controlar cantidades y la correspondiente evolución del pensamiento humano primitivo, fue posible la percepción de esta característica común entre conjuntos de objetos. En la figura siguiente se puede ver la relación entre tres marcas en un bastón y los tres objetos de cualquiera de los tres conjuntos que se presentan.</p>
            <Figure>
                <Figure.Image src={conjuntos_baston} width='300' />
                <Figure.Caption>Marcas en un bastón para representar conjuntos.</Figure.Caption>
            </Figure>            
            <p>Los hombres empezaron a comparar los conjuntos, y para esto utilizaban los dedos de las manos, piedrecillas, marcas en bastones, nudos en una cuerda y algunas otras formas para representar cantidades. Estas marcas representan unidades. </p>
            <p>A medida que la cantidad de unidades crece, se hace necesario un sistema de representación más práctico. En diferentes partes del mundo y en distintas épocas se llegó a la misma solución: cuando se alcanza un determinado número, se hace una marca distinta que los representa a todos ellos. Para seguir contando, se continúan añadiendo unidades hasta que se vuelve a alcanzar por segunda vez el número anterior y se añade otra marca que puede ser diferente en dependencia del sistema de representación utilizado.</p>
            <p>Con el desarrollo de la escritura, también fue posible utilizar caracteres (símbolos) para representar cantidades numéricas. En la actualidad, estos caracteres se conocen como dígitos y combinados forman números. Un <b>número</b> es una entidad abstracta que representa una cantidad. </p>

            <h4>Los sistemas de numeración:</h4>
            <p>Un <b>sistema de numeración</b> es un conjunto de caracteres (símbolos) y reglas de generación que permiten construir todos los números considerados válidos en dicho sistema, donde cada número se emplean para representar una cantidad de elementos en un conjunto dado.</p>
            <Figure>
                <Figure.Image src={numeros_maya} width='300' />
                <Figure.Caption>Sistema de numeracion de los Mayas.</Figure.Caption>
            </Figure>            
            <p>Vea como ejemplo en la figura anterior, las antiguas escrituras de la cultura Maya, los cuales empleaban un sistema de numeración basado en puntos y barras horizontales.</p>
            <p>Con el desarrollo del comercio y la comunicación entre los diferentes pueblos y naciones, surgió y creció la necesidad  de estandarizar las representaciones numéricas. Este proceso duró muchos años y como resultado final llegó a la adopción en casi todo el mundo del sistema de numeración decimal que empleamos en la actualidad. Su nombre indica que se compone de diez caracteres y estos son: 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9. Cualquier número mayor que 9, debe representarse mediante combinaciones de estos diez caracteres.</p>
            <Figure>
                <Figure.Image src={valor_digitos_posicion} width='300' />
                <Figure.Caption>Valor de los dígitos según su posición.</Figure.Caption>
            </Figure>            
            <p>Como se ve en la figura anterior, este sistema de numeración es posicional, lo que significa que el valor de cada carácter depende de la posición que este ocupa en el número.</p>
            <p>En la ctualidad, con el desarrollo de las matemáticas y las ciencias de la computación, se ha tenido que trabajar con otros sistemas de numeración diferentes al decimal. Estos son: binario y hexadecimal. </p>
        </>
    )
}

export default NumeracionIntroduccion;