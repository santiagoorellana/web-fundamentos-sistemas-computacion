import QuestionsType1 from "./questions_type_1";
import img1 from "../../images/circuitos/graf_cir_1.gif";
import img2 from "../../images/circuitos/graf_cir_2.gif";
import img3 from "../../images/circuitos/graf_cir_3.gif";
import img4 from "../../images/circuitos/graf_cir_9.gif";
import img5 from "../../images/circuitos/graf_cir_11.gif";



const CompuertasEjerciciosCircuitosFunciones = () => {
    return (
        <QuestionsType1 
            title={"Equivalencia entre Circuitos Lógicos y Funciones Booleanas"} 
            description={"Para cada uno de los circuitos lógicos presentados, seleccione la expresión booleana que lo representa. Presione luego el botón “Evaluar respuestas”."}
            questionTitle={"Preguntas"}
            responseTitle={"Respuesta"}
            questions={[
                [img1, "igual a", "( A B )'"],
                [img2, "igual a", "A' B"],
                [img3, "igual a", "( AB + A )'"],
                [img4, "igual a", "( A' + B )'"],
                [img5, "igual a", "A' + B'"]
            ]}
            options={["( AB + A )'", "A ( A' + B' )", "( A' + B )'", "A' B", "A' + B'", "( A B )'"]}
            random
            count={3}
            width={180}
            imgWidth={250}
            imgMax={150}
        />
    )
}

export default CompuertasEjerciciosCircuitosFunciones;