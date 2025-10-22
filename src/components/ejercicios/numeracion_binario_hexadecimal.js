import QuestionsType1 from "./questions_type_1";

const NumeracionEjerciciosBinarioHexadecimal = () => {
    return (
        <QuestionsType1 
            title={"Convertir de Binario a Hexadecimal"} 
            description={"Complete cada una de las siguientes frases y presione luego el botón “Evaluar respuestas”. Si es necesario, utilice papel y lápiz para calcular."}
            questionTitle={"Frase incompleta"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "El número binario 11 en hexadecimal es", "3"],
                [null, "El número binario 110 en hexadecimal es", "6"],
                [null, "El número binario 111 en hexadecimal es", "7"],
                [null, "El número binario 1010 en hexadecimal es", "A"],
                [null, "El número binario 11011 en hexadecimal es", "1B"],
                [null, "El número binario 10111 en hexadecimal es", "17"],
                [null, "El número binario 10001 en hexadecimal es", "11"],
                [null, "El número binario 101110 en hexadecimal es", "2E"],
                [null, "El número binario 11111111 en hexadecimal es", "FF"],
                [null, "El número binario 11011011 en hexadecimal es", "DB"]
            ]}
            random
            count={5}
            width={100}
        />
    )
}

export default NumeracionEjerciciosBinarioHexadecimal;