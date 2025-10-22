import { useState } from "react";
import InputWithKeyboard from "./input_with_keyboard";
import { 
    stringToArray, 
    searchInputVars, 
    evaluateExpression, 
    assignValues, 
    deleteSpaces,
    gatesSymbolToInternalCode, 
    checkErrorsInGatesNotation
} from "./lib_base";
import Block from "./block";
import ShowModalPractice from "./show_modal_practice";
import { Alert } from "bootstrap";


const CompuertasEmuladorCircuito = () => {
    const [text, setText] = useState("");
    const [blockInputs, setBlockInputs] = useState([]);
    const [blockOutput, setBlockOutput] = useState(false);
    const [modalShow, setModalShow] = useState("");

    const callbackOnClic = (text1) => {
        const inputString = gatesSymbolToInternalCode(text1);
        const errors = checkErrorsInGatesNotation(inputString);
        let inputVariables = [];
        if (errors != ''){
            setModalShow(errors);
        }else{
            inputVariables = searchInputVars(stringToArray(inputString), false);
        }
        setBlockInputs(inputVariables);
        setBlockOutput(false);
        setText(text1);
    }

    const createMask = (inputs) => {
        let mask = 0;
        inputs.forEach((element, index) => {
            if (document.getElementById("checkbox"+index).checked){
                mask = mask | (1 << index);
            }
        });
        return mask;
    }

    const callbackOnChange = () => {
        const expressionAsInternalCode = deleteSpaces(stringToArray(gatesSymbolToInternalCode(text)));
        const mask = createMask(blockInputs);
        let result = evaluateExpression(assignValues(expressionAsInternalCode, mask, blockInputs, false));
        if (result == null) {
            setModalShow('No se puede evaluar la expresión.');
        }else{
            setBlockOutput((result == 1) ? true : false);
        }
    }


    return (
        <InputWithKeyboard 
            title="Emulador de Circuitos Lógicos"
            description="Para emular un circuito lógico, debe introducir la descripción del circuito en notación electrónica y pulsar el botón “Emular circuito”. Luego, para observar su funcionamiento, debe determinar el estado de las entradas. Las entradas marcadas representan al 1 (verdadero). Las no marcadas son 0 (falso)."
            type="gates" 
            initialText1="A or B"
            actionLabel="Emular circuito" 
            actionCallback={callbackOnClic}
        >
            <div style={{width:'300px'}}>{text}</div>
            <Block inputs={blockInputs} onClic={callbackOnChange} output={blockOutput} />
            <ShowModalPractice
                show={modalShow != ""} 
                type="warning"
                title="Error"
                text={modalShow}
                onHide={() => setModalShow("")} 
            />
        </InputWithKeyboard>
    )
}

export default CompuertasEmuladorCircuito;