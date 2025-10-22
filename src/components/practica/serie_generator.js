

import { useEffect, useState } from "react";
import { Form, Alert, InputGroup, Button, Table } from "react-bootstrap";
import { decimalToBinary, binaryToHexadecimal, binaryToOctal } from "./lib_conver_numer";

const idBegin = "valueBegin";
const idEnd = "valueEnd";
const idResultDiv = "resultDiv";
const idCheckBinary = "idCheckBinary";
const idCheckOctal = "idCheckOctal";
const idCheckDecimal = "idCheckDecimal";
const idCheckHexadecimal = "idCheckHexadecimal";

const filter_decimal = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const filter_special_chars = [8, 35, 36, 37, 39, 46];

const tableStyle = {
    width:'auto', 
    height:'auto',

    padding:'0px', 
    marginTop:'5px', 
    marginBottom:'5px'
}

const SerieGenerator = ({title, description}) => {
    const [tableComponent, setTableComponent] = useState(null);

    useEffect(()=>{
        document.getElementById(idBegin).value = 0;
        document.getElementById(idEnd).value = 10;
        document.getElementById(idCheckDecimal).checked = true;
        document.getElementById(idCheckBinary).checked = true;
        document.getElementById(idCheckOctal).checked = true;
        document.getElementById(idCheckHexadecimal).checked = true;
    }, []);
    
    function limitTextLength(idInput, event, limit){
        if (document.getElementById(idInput).value.length >= limit) 
            if (filter_special_chars.indexOf(event.keyCode) < 0)
                event.preventDefault();
    }

    
    function onKeyDownHandleBegin(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_decimal.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idBegin, e, 9);
    }

    function onKeyDownHandleEnd(e){
        if ((filter_special_chars.indexOf(e.keyCode) < 0) && 
            (filter_decimal.indexOf(e.keyCode) < 0)){
            e.preventDefault();
        }
        limitTextLength(idEnd, e, 3);
    }

    function createHead(showDecimal, showBinary, showOctal, showHexadecimal, key=0){
        let headComponents = [];
        if (showDecimal) headComponents.push(<th key={0}>Decimal</th>);
        if (showBinary) headComponents.push(<th key={1}>Binario</th>);
        if (showOctal) headComponents.push(<th key={2}>Octal</th>);
        if (showHexadecimal) headComponents.push(<th key={3}>Hexadecimal</th>);
        return <tr key={key}>{headComponents}</tr>;
    }

    function createRow(valueDecimal, showDecimal, showBinary, showOctal, showHexadecimal){
        let valueBinary = decimalToBinary(valueDecimal.toString());
        let valueOctal = binaryToOctal(valueBinary);
        let valueHexadecimal = binaryToHexadecimal(valueBinary);
        let rowComponents = [];
        if (showDecimal) rowComponents.push(<td key={0}>{valueDecimal}</td>);
        if (showBinary) rowComponents.push(<td key={1}>{valueBinary}</td>);
        if (showOctal) rowComponents.push(<td key={2}>{valueOctal}</td>);
        if (showHexadecimal) rowComponents.push(<td key={3}>{valueHexadecimal}</td>);
        return <tr key={valueDecimal}>{rowComponents}</tr>;
    }

    function onActionClick(){
        let begin = parseInt(document.getElementById(idBegin).value);
        let end = parseInt(document.getElementById(idEnd).value);
        let showDecimal = document.getElementById(idCheckDecimal).checked;
        let showBinary = document.getElementById(idCheckBinary).checked;
        let showOctal = document.getElementById(idCheckOctal).checked;
        let showHexadecimal = document.getElementById(idCheckHexadecimal).checked;
        let rows = [];
        if (begin < end){
            for (let i = begin; i <= end; i++) 
                rows.push(createRow(i, showDecimal, showBinary, showOctal, showHexadecimal));
        }else if (begin > end){
            for (let i = begin; i >= end; i--) 
                rows.push(createRow(i, showDecimal, showBinary, showOctal, showHexadecimal));
        }
        let heads = [];
        heads.push(createHead(showDecimal, showBinary, showOctal, showHexadecimal));
        let tableElement = 
            <Table variant="secondary" style={{textAlign:'right'}} striped bordered >
                <thead>{heads}</thead>
                <tbody>{rows}</tbody>
            </Table>;
        setTableComponent(tableElement);
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
            <div style={{float:"left"}}>
                <Table borderless variant="primary" style={tableStyle} >
                    <tbody>
                        <tr>
                            <td>                
                                <InputGroup className="mb-3" style={{width:'200px', margin:'0px'}}>
                                    <InputGroup.Text style={{width:'80px'}}>Inicio</InputGroup.Text>
                                    <Form.Control type="number" min={0} max={999} id={idBegin} onKeyDown={onKeyDownHandleBegin} />
                                </InputGroup>
                            </td>
                        </tr>                
                        <tr>
                            <td>                
                                <InputGroup className="mb-3" style={{width:'200px', margin:'0px'}}>
                                    <InputGroup.Text style={{width:'80px'}}>Final</InputGroup.Text>
                                    <Form.Control type="number" min={0} max={999} id={idEnd} onKeyDown={onKeyDownHandleEnd} />
                                </InputGroup>
                            </td>
                        </tr>                
                        <tr>                
                            <td><Form.Check type="checkbox" id={idCheckBinary} label="Binario" /></td>
                        </tr>                
                        <tr>                
                            <td><Form.Check type="checkbox" id={idCheckOctal} label="Octal" /></td>
                        </tr>                
                        <tr>                
                            <td><Form.Check type="checkbox" id={idCheckDecimal} label="Decimal" /></td>
                        </tr>                
                        <tr>                
                            <td><Form.Check type="checkbox" id={idCheckHexadecimal} label="Hexadecimal" /></td>
                        </tr>                
                        <tr>                
                            <td>
                                <Button variant="warning" onClick={onActionClick} style={{width:'100%',marginTop:'10px'}} >
                                    Mostrar Serie
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div id={idResultDiv} style={{float:"left", marginLeft:'25px', marginTop:'0px'}} >
                {tableComponent}
            </div>
        </div>
    )
}

export default SerieGenerator;

