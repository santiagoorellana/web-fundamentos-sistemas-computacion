
import BooleanExpressionComparator from "./boolean_expression_comparator";

const BooleHerramientaComparador = () => {
    return (
        <BooleanExpressionComparator 
            title="Comparador de Expresiones Booleanas"
            description="Para comparar dos expresiones booleanas, introdúzcalas en notación simplificada y presione el botón “Comprobar equivalencia”."
            initialText1="(A+B)C" 
            initialText2="(AC)+(BC)" 
        />
    )
}

export default BooleHerramientaComparador;