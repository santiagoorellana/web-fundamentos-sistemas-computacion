import QuestionsType1 from "./questions_type_1";

const BooleEjerciciosComparacion = () => {
    return (
        <QuestionsType1 
            title={"Comparación de Expresiones Booleanas"} 
            description={"Para cada una de las ecuaciones booleanas siguientes, diga si son verdaderas o falsas. Presione luego el botón “Evaluar respuestas”. Si le es necesario, utilice papel y lápiz para calcular. "}
            questionTitle={"Ecuaciones"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "(A')' = A", "Verdadero"],
                [null, "A+A' = A", "Falso"],
                [null, "A+A = A", "Verdadero"],
                [null, "A'B' = (A+B)'", "Verdadero"],
                [null, "A+(AB) = A'", "Falso"],
                [null, "A(B+C) = (AB)+(AC)", "Verdadero"]
            ]}
            options={['Verdadero', 'Falso']}
            random
            count={5}
            width={150}
            imgWidth={80}
        />
    )
}

export default BooleEjerciciosComparacion;