import QuestionsType1 from "./questions_type_1";

const NumeracionEjerciciosBinarioDecimal = () => {
    return (
        <QuestionsType1 
            title={"Convertir de Binario a Decimal"} 
            description={"Complete cada una de las siguientes frases y presione luego el botón “Evaluar respuestas”. Si es necesario, utilice papel y lápiz para calcular. "}
            questionTitle={"Frase incompleta"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "El número binario 10 en decimal es", "2"],
                [null, "El número binario 101 en decimal es", "5"],
                [null, "El número binario 111 en decimal es", "7"],
                [null, "El número binario 1011 en decimal es", "11"],
                [null, "El número binario 11011 en decimal es", "27"],
                [null, "El número binario 101110 en decimal es", "46"],
                [null, "El número binario 100010 en decimal es", "34"],
                [null, "El número binario 10111101 en decimal es", "189"],
                [null, "El número binario 11111111 en decimal es", "255"],
                [null, "El número binario 11011011011 en decimal es", "1755"]
            ]}
            random
            count={5}
            width={100}
        />
    )
}

export default NumeracionEjerciciosBinarioDecimal;