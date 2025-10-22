
import InputWithKeyboard from "./input_with_keyboard";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { 
  stringToArray,
  checkErrorsInSimpleNotation, 
  simpleNotationToInternalCode,
  searchInputVars,
  assignValues,
  evaluateExpression
} from "./lib_base";
import ShowModalPractice from "./show_modal_practice";



export const BooleanExpressionEvaluator = ({title, description, initialText}) => {
  const [tableComponent, setTableComponent] = useState(null);
  const [modalShow, setModalShow] = useState("");

  function createRow(inputs, result, head, key){
    let row = [];
    inputs.forEach((input, index) => {
      row.push(head ? <th key={index} >{input}</th> : <td key={index} >{input}</td>);
    });    
    row.push(head ? <th key="last" >{result}</th> : <td key="last" >{result}</td>);
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
    const booleanExpression = expression.replace(' ', '');
    const errors = checkErrorsInSimpleNotation(booleanExpression);
    if (errors != ''){
      console.log(errors);
      setModalShow(errors);
    }
    let expressionAsInternalCode = simpleNotationToInternalCode(stringToArray(booleanExpression));
    let inputVariables = searchInputVars(expressionAsInternalCode, true);

    return (
      <Table variant="secondary" style={{textAlign:'right'}} striped bordered >
        <thead key="0" >{errors == '' ? createRow(inputVariables, booleanExpression, true, 1) : null}</thead>
        <tbody key="1" >{errors == '' ? createBody(inputVariables, expressionAsInternalCode) : null}</tbody>
      </Table>
    )
  }


  const callbackOnClic = (text1, text2, div) => {
    setTableComponent(<TableBoolean expression={text1} key="0" />);
  }

  return (
      <InputWithKeyboard 
          title={title}
          description={description}
          type="boolean" 
          initialText1={initialText}
          actionLabel="Mostrar Tabla" 
          actionCallback={callbackOnClic}
      >
        {tableComponent}
        <ShowModalPractice
          show={modalShow != ""} 
          type="warning"
          title="Error"
          text={modalShow}
          onHide={() => setModalShow("")} 
          key="1"
        />
      </InputWithKeyboard>
  )
}


export default BooleanExpressionEvaluator;
