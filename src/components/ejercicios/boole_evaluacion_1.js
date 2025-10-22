import QuestionsType2 from "./questions_type_2";

const options = [
    "( A B )'", 
    "( A' + C )' + A' B C'", 
    "A B", 
    "A B'+C", 
    "A + B", 
    "( A + C )' + A' B C", 
    "( A + B' + C' )'"
];

const BooleEjerciciosEvaluacion1 = () => {
    return (
        <QuestionsType2
            title={"Evaluación de Expresiones Booleanas"} 
            description={"Para cada una de las tablas booleanas siguientes, seleccione la expresión que le corresponde. Presione luego el botón “Evaluar respuestas”. Si le es necesario, utilice papel y lápiz para calcular. "}
            questions={[
                ["2", [1, 1, 1, 0], options, "( A B )'"],
                ["2", [0, 1, 1, 1], options, "A + B"],
                ["2", [0, 0, 0, 1], options, "A B"],
                ["3", [1, 0, 1, 1, 0, 0, 0, 0], options, "( A + C )' + A' B C"],
                ["3", [0, 1, 0, 1, 1, 1, 0, 1], options, "A B'+C"],
                ["3", [0, 0, 0, 1, 0, 0, 0, 0], options, "( A + B' + C' )'"]
            ]}
            images={false}
            random={true}
            count={3}
            width={280}
        />
    )
}

export default BooleEjerciciosEvaluacion1;