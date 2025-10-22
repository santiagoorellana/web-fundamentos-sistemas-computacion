
import Keyboard from "./keyboard";
import { Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const inputId1 = "input1";
const inputId2 = "input2";
const resultDivId = "resultDiv";

function insertTextOnCursor(htmlInputID, toInsert){
    var input = document.getElementById(htmlInputID);
    var begin = input.selectionStart;
    var end = input.selectionEnd;
    var text = input.value;
    input.value = text.slice(0, begin) + toInsert + text.slice(end);
    input.selectionStart = input.selectionEnd = begin + toInsert.length;
    input.focus();  
}

const InputWithKeyboard = ({title, description, type, initialText1, initialText2, actionLabel, actionCallback, children}) => {
    const [activeInput1, setActiveInput1] = useState(true);

    useEffect(()=>{
        if (document.getElementById(inputId1) != null)
            document.getElementById(inputId1).value = initialText1;
        if (document.getElementById(inputId2) != null)
            document.getElementById(inputId2).value = initialText2;
    }, []);
    
    const clickInput1 = () => {
        setActiveInput1(true);
    }

    const clickInput2 = () => {
        setActiveInput1(false);
    }

    const callbackOnClic = (key) => {
        let inputID = activeInput1 ? inputId1 : inputId2;
        if (key == "X"){
            document.getElementById(inputID).value = "";
        }else{
            insertTextOnCursor(inputID, key);
        }
    }

    const actionClick = () => {
        const input2 = document.getElementById(inputId2);
        actionCallback(
            document.getElementById(inputId1).value,
            input2 != null ? input2.value : "",
            resultDivId
        );
    }

    let inputControl = [];
    inputControl.push(
        <Form.Control 
            type="text" 
            id={inputId1} 
            onClick={clickInput1} 
            key="2"
        />
    );
    if (initialText2 != null){
        inputControl.push(
            <Form.Control 
                type="text" 
                id={inputId2} 
                style={{marginTop:'5px'}} 
                onClick={clickInput2} 
                key="3"
            />
        );
    }
    return (
        <div>
            <div key="0"><h4>{title}</h4></div>
            <Alert 
                key="1" 
                variant="primary" 
                style={{paddingTop:'0px', paddingBottom:'0px', marginTop:'0px', marginBottom:'8px'}}
            >
                <p>{description}</p>
            </Alert>
            {inputControl}
            <div key="4" style={{float:"left"}}>
                <Keyboard type={type} actionLabel={actionLabel} onKeyClick={callbackOnClic} onActionClick={actionClick} />
            </div>
            <div key="5" id={resultDivId} style={{float:"left", marginLeft:'25px', marginTop:'5px'}} >{children}</div>
        </div>
    )
}

export default InputWithKeyboard;