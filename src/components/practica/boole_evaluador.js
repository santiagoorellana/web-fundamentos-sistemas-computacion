
import { BooleanExpressionEvaluator } from "./boolean_expression_evaluator";


const BooleHerramientaEvaluador = () => {
    return (
        <BooleanExpressionEvaluator 
            title="Evaluador de Expresiones Booleanas"
            description="Para evaluar una expresión booleana, introdúzcala en notación simplificada y presione el botón “Mostrar Tabla ” para obtener su tabla booleana."
            initialText="AB+C"
        />
    )
}

export default BooleHerramientaEvaluador;