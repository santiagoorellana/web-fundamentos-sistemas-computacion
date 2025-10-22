import QuestionsType1 from "./questions_type_1";
import img1 from "../../images/circuitos/com_1.gif";
import img2 from "../../images/circuitos/com_2.gif";
import img3 from "../../images/circuitos/com_3.gif";
import img4 from "../../images/circuitos/com_4.gif";
import img5 from "../../images/circuitos/com_5.gif";
import img6 from "../../images/circuitos/com_6.gif";


const CompuertasEjerciciosReconocimiento = () => {
    return (
        <QuestionsType1 
            title={"Reconocimiento de Compuertas de Lógicas"} 
            description={"Para cada una de las compuertas lógicas presentadas, seleccione el nombre que la identifica. Presione luego el botón “Evaluar respuestas”."}
            questionTitle={"Preguntas"}
            responseTitle={"Respuesta"}
            questions={[
                [img1, "se nombra como", "AND"],
                [img2, "se nombra como", "OR"],
                [img3, "se nombra como", "XOR"],
                [img4, "se nombra como", "NAN"],
                [img5, "se nombra como", "NOR"],
                [img6, "se nombra como", "XNOR"]
            ]}
            options={["AND","OR","XOR","NAN","NOR","XNOR","NOT"]}
            random
            count={5}
            width={100}
        />
    )
}

export default CompuertasEjerciciosReconocimiento;