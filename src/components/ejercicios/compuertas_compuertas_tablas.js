import QuestionsType2 from "./questions_type_2";
import img1 from "../../images/circuitos/com_1.gif";
import img2 from "../../images/circuitos/com_2.gif";
import img3 from "../../images/circuitos/com_3.gif";
import img4 from "../../images/circuitos/com_4.gif";
import img5 from "../../images/circuitos/com_5.gif";
import img6 from "../../images/circuitos/com_6.gif";
import img7 from "../../images/circuitos/com_7.gif";

const options = [img1, img2, img3, img4, img5, img6, img7];

const CompuertasEjerciciosCompuertasTablas = () => {
    return (
        <QuestionsType2
            title={"Relación entre Compuertas Lógicas y Tablas Booleanas"} 
            description={"Para cada una de las tablas booleanas presentadas, seleccione la compuerta lógica que le corresponda según su función. Para seleccionar las compuertas debe hacer clic sobre los botones de flecha. Presione luego el botón “Evaluar respuestas”."}
            questions={[
                ["2", [0, 0, 0, 1], options, "0"],
                ["2", [0, 1, 1, 1], options, "1"],
                ["2", [0, 1, 1, 0], options, "2"],
                ["2", [1, 1, 1, 0], options, "3"],
                ["2", [1, 0, 0, 0], options, "4"],
                ["2", [1, 0, 0, 1], options, "5"]
            ]}
            images={true}
            random={true}
            count={3}
            width={300}
        />
    )
}

export default CompuertasEjerciciosCompuertasTablas;