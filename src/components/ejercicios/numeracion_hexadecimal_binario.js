import QuestionsType1 from "./questions_type_1";

const NumeracionEjerciciosHexadecimalBinario = () => {
    return (
        <QuestionsType1 
            title={"Convertir de Hexadecimal a Binario"} 
            description={"Complete cada una de las siguientes frases y presione luego el botón “Evaluar respuestas”. Si es necesario, utilice papel y lápiz para calcular."}
            questionTitle={"Frase incompleta"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "El número hexadecimal 5 en binario es", "101"],
                [null, "El número hexadecimal A en binario es", "1010"],
                [null, "El número hexadecimal F en binario es", "1111"],
                [null, "El número hexadecimal 1A en binario es", "11010"],
                [null, "El número hexadecimal 1E en binario es", "11110"],
                [null, "El número hexadecimal FF en binario es", "11111111"],
                [null, "El número hexadecimal FA en binario es", "11111010"],
                [null, "El número hexadecimal FF5 en binario es", "111111110101"],
                [null, "El número hexadecimal CAFE en binario es", "1100101011111110"],
                [null, "El número hexadecimal ABCD en binario es", "1010101111001101"]
            ]}
            random
            count={5}
            width={200}
        />
    )
}

export default NumeracionEjerciciosHexadecimalBinario;