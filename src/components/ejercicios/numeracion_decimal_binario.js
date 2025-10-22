import QuestionsType1 from "./questions_type_1";

const NumeracionEjerciciosDecimalBinario = () => {
    return (
        <QuestionsType1 
            title={"Convertir de Decimal a Binario"} 
            description={"Complete cada una de las siguientes frases y presione luego el botón “Evaluar respuestas”. Si es necesario, utilice papel y lápiz para calcular."}
            questionTitle={"Frase incompleta"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "El número decimal 3 en binario es", "11"],
                [null, "El número decimal 7 en binario es", "111"],
                [null, "El número decimal 5 en binario es", "101"],
                [null, "El número decimal 20 en binario es", "10100"],
                [null, "El número decimal 23 en binario es", "10111"],
                [null, "El número decimal 64 en binario es", "1000000"],
                [null, "El número decimal 100 en binario es", "1100100"],
                [null, "El número decimal 128 en binario es", "10000000"],
                [null, "El número decimal 255 en binario es", "11111111"],
                [null, "El número decimal 512 en binario es", "1000000000"]
            ]}
            random
            count={5}
            width={200}
        />
    )
}

export default NumeracionEjerciciosDecimalBinario;