
import QuestionsType1 from "./questions_type_1";

const NumeracionEjerciciosReconocimiento = () => {
    return (
        <QuestionsType1 
            title={"Reconocimiento de Sistemas de Numeración"} 
            description={"Responda cada preguntas y presione el botón “Evaluar respuestas”."}
            questionTitle={"Preguntas"}
            responseTitle={"Respuesta"}
            questions={[
                [null, "¿Representa 2010 un número en sistema binario?", "no"],
                [null, "¿El número 2AFF emplea numeración hexadecimal?", "si"],
                [null, "¿Puede ser CAFE un número hexadecimal?", "si"],
                [null, "¿Puede el número 10000 estar expresado en binario?", "si"],
                [null, "¿Puede ser 2G un número hexadecimal?", "no"],
                [null, "¿Puede ser binario el número 10010?", "si"],
                [null, "¿Es cierto que ABCDEF puede ser hexadecimal?", "si"],
                [null, "¿Puede ser binario el número 111111?", "si"],
                [null, "¿Es cierto que 1FA5 puede ser un número hexadecimal?", "si"],
                [null, "¿Está el número 2222 expresado en sistema binario?", "no"]
            ]}
            options={['Si', 'No']}
            random
            count={5}
            width={80}
        />
    )
}

export default NumeracionEjerciciosReconocimiento;