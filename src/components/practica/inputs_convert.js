

import { Form, Alert, InputGroup } from "react-bootstrap";
import { 
    decimalToBinary, binaryToDecimal, 
    hexadecimalToBinary, binaryToHexadecimal,
    octalToBinary, binaryToOctal,  
    } from "./lib_conver_numer";

const filter_binari = [48, 49];
const filter_octal = [48, 49, 50, 51, 52, 53, 54, 55];
const filter_decimal = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const filter_haxadecimal = [65,66,67,68,69,70];
const filter_special_chars = [8, 35, 36, 37, 39, 46];

const idInputBinary = "inputBinary";
const idInputOctal = "inputOctal";
const idInputDecimal = "inputDecimal";
const idInputHexadecimal = "inputHexadecimal";


const InputsConvert = ({title, description}) => {

    function showFromBinary(binaryValue){
        let inputTextBinary = document.getElementById(idInputBinary);
        let inputTextOctal = document.getElementById(idInputOctal);
        let inputTextDecimal = document.getElementById(idInputDecimal);
        let inputTextHexadecimal = document.getElementById(idInputHexadecimal);
        let activeElement = document.activeElement;

        if (inputTextBinary != activeElement) inputTextBinary.value = binaryValue;
        if (inputTextOctal != activeElement) inputTextOctal.value = binaryToOctal(binaryValue);
        if (inputTextDecimal != activeElement) inputTextDecimal.value = binaryToDecimal(binaryValue);
        if (inputTextHexadecimal != activeElement) inputTextHexadecimal.value = binaryToHexadecimal(binaryValue);
    }

    function limitTextLength(idInput, event, limit){
        if (document.getElementById(idInput).value.length >= limit) 
            if (filter_special_chars.indexOf(event.keyCode) < 0)
                event.preventDefault();
    }

    function onKeyDownBinary(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_binari.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idInputBinary, e, 69);
    }

    function onKeyDownOctal(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_octal.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idInputOctal, e, 22);
    }

    function onKeyDownDecimal(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_decimal.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idInputDecimal, e, 20);
    }

    function onKeyDownHexadecimal(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_decimal.indexOf(e.keyCode) < 0) &&
            (filter_haxadecimal.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idInputHexadecimal, e, 16);
    }

    function onChangeBinary(e){
        let text = document.getElementById(idInputBinary).value;
        showFromBinary(text);
    }

    function onChangeOctal(e){
        let text = document.getElementById(idInputOctal).value;
        showFromBinary(octalToBinary(text));
    }

    function onChangeDecimal(e){
        let text = document.getElementById(idInputDecimal).value;
        showFromBinary(decimalToBinary(text));
    }

    function onChangeHexadecimal(e){
        let text = document.getElementById(idInputHexadecimal).value;
        showFromBinary(hexadecimalToBinary(text));
    }

    return (
        <div>
            <div><h4>{title}</h4></div>
            <Alert 
                key="1" 
                variant="primary" 
                style={{paddingTop:'0px', paddingBottom:'0px', marginTop:'0px', marginBottom:'8px'}}
            >
                <p>{description}</p>
            </Alert>
            <InputGroup className="mb-3" >
                <InputGroup.Text style={{width:'130px'}}>Binario</InputGroup.Text>
                <Form.Control 
                    type="text" 
                    id={idInputBinary} 
                    onKeyDown={onKeyDownBinary} 
                    onChange={onChangeBinary}
                />
            </InputGroup>
            <InputGroup className="mb-3" >
                <InputGroup.Text style={{width:'130px'}}>Octal</InputGroup.Text>
                <Form.Control 
                    type="text" 
                    id={idInputOctal} 
                    onKeyDown={onKeyDownOctal} 
                    onChange={onChangeOctal}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text style={{width:'130px'}}>Decimal</InputGroup.Text>
                <Form.Control 
                    type="text" 
                    id={idInputDecimal} 
                    onKeyDown={onKeyDownDecimal} 
                    onChange={onChangeDecimal}
                />
            </InputGroup>
            <InputGroup className="mb-3" >
                <InputGroup.Text style={{width:'130px'}}>Hexadecimal</InputGroup.Text>
                <Form.Control 
                    type="text" 
                    id={idInputHexadecimal} 
                    onKeyDown={onKeyDownHexadecimal} 
                    onChange={onChangeHexadecimal}
                />
            </InputGroup>
        </div>
    )
}

export default InputsConvert;