import QuestionsType2 from "./questions_type_2";

const options = [
    "( A + B ) ( C' D )' ( C B' )",
    "A'( ( B C )+( A D C ) )",
    "( B + ( ( C + D )A ) )'",
    "A( B + A B' )+( A + D' ) + A C'",
    "D + ( ( C + D )A + B )",
    "( C + A + B )D",
    "( C + A + B ) ( D + A + B' )",
    "C A + C B + D A + D B",
    "C A + C B + C D + C C",
    "D + ( C B A )"
];

const BooleEjerciciosEvaluacion2 = () => {
    return (
        <QuestionsType2
            title={"Evaluación de Expresiones Booleanas"} 
            description={"Para las tablas booleanas siguientes, seleccione la expresión booleana que le corresponde. Presione luego el botón “Evaluar respuestas”. Si le es necesario, utilice papel y lápiz para calcular."}
            questions={[
                [
                    "4", 
                    [1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0],
                    options,
                    "C A + C B + C D + C C"
                ],
                [
                    "4", 
                    [1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1],
                    options,
                    "D + ( ( C + D )A + B )"
                ]
            ]}
            images={false}
            random={true}
            count={2}
            width={400}
        />
    )
}

export default BooleEjerciciosEvaluacion2;