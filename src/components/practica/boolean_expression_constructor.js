

import { useEffect, useState } from "react";
import { Form, Alert, InputGroup, Button, Table, Select } from "react-bootstrap";
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
    width:'380px', 
    height:'auto',

    padding:'0px', 
    marginTop:'5px', 
    marginBottom:'5px'
}

const stepStyle = {
    marginTop:'5px', 
    marginBottom:'1px',
    color:'#000088'
}

const ExpressionConstructor = ({title, description}) => {
    const [tableComponent, setTableComponent] = useState(null);

    useEffect(()=>{
        //document.getElementById(idBegin).value = 0;
        //document.getElementById(idEnd).value = 10;
        //document.getElementById(idCheckDecimal).checked = true;
        //document.getElementById(idCheckBinary).checked = true;
        //document.getElementById(idCheckOctal).checked = true;
        //document.getElementById(idCheckHexadecimal).checked = true;
    }, []);
    
    
    function createRow(inputsVariables, result, head, key){
        let row = [];
        //row.push(head ? <th key="last" >ordinal</th> : <td key="last" >{result}</td>);
        inputsVariables.forEach((input, index) => {
            row.push(head ? <th key={index} >{input}</th> : <td key={index} >{input}</td>);
        });    
        row.push(
            head 
            ? <th key="last" >{result}</th> 
            : <td key="last" ><Form.Check label="" name="c1" type="checkbox" /></td>
        );
        return <tr key={key} >{row}</tr>;
    }
    
    function createBody(inputVariables, expressionAsInternalCode){
        let combinations = Math.pow(2, inputVariables.length) - 1; 
        let rows = [];
        for (let mask = combinations; mask >= 0; mask--){
            let result = evaluateExpression(assignValues(expressionAsInternalCode, mask, inputVariables, true));
            if (result == null) {
                setModalShow('No se puede evaluar la expresión booleana.');
                return null;
            }
            rows.push(createRow(assignValues(inputVariables, mask, inputVariables, true), result, false, mask));
        }
        return rows;
    }
    
    const TableBoolean = ({expression, reverse}) => {
        let inputVariables = []; //searchInputVars(expressionAsInternalCode, true);    
        return (
            <Table variant="secondary" style={{textAlign:'right'}} striped bordered >
                <thead key="0" >{errors == '' ? createRow(inputVariables, booleanExpression, true, 1) : null}</thead>
                <tbody key="1" >{errors == '' ? createBody(inputVariables, expressionAsInternalCode) : null}</tbody>
            </Table>
        )
    }
    
    

    function onChangeVariables(){
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
                                <h5 style={stepStyle}>1 - Seleccione las variables:</h5> 
                                <Form.Select aria-label="Default select example" onChange={onChangeVariables}>
                                    <option value="1">A</option>
                                    <option value="2">A, B</option>
                                    <option value="3">A, B, C</option>
                                    <option value="4">A, B, C, D</option>
                                    <option value="5">A, B, C, D, E</option>
                                    <option value="6">A, B, C, D, E, F</option>
                                    <option value="7">A, B, C, D, E, F, G</option>
                                    <option value="8">A, B, C, D, E, F, G, H</option>
                                </Form.Select>                                
                            </td>
                        </tr>                
                        <tr>                
                            <td>
                                <h5 style={stepStyle}>2 - Determine el método matemático:</h5> 
                                <Form.Check
                                    label="Forma Disyuntiva Normal"
                                    name="group1"
                                    type="radio"
                                    id="radioFDN"
                                />
                                <Form.Check
                                    label="Forma Conjuntiva Normal"
                                    name="group1"
                                    type="radio"
                                    id="radioFCN"
                                />
                            </td>
                        </tr>                
                        <tr>                
                            <td>
                                <h5 style={stepStyle}>3 - Marcar en la tabla booleana creada, las filas cuyo resultado es 1. Las que no se marquen, serán interpretadas como 0. <br/><br/>4 - Presione el siguiente botón:</h5> 
                                <Button variant="warning" onClick={onActionClick} style={{width:'100%',marginTop:'10px'}} >
                                    Mostrar expresión booleana
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

export default ExpressionConstructor;

