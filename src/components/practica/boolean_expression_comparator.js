
import InputWithKeyboard from "./input_with_keyboard";
import { Alert, Badge } from "react-bootstrap";
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

const styleResult = {
    textAlign:'center',
    maxWidth:'400px'
};

export const BooleanExpressionComparator = ({title, description, initialText1, initialText2}) => {
  const [comparisonResul, setComparisonResul] = useState(null);
  const [modalShow, setModalShow] = useState("");

  function compareTables(inputVariables1, expressionAsInternalCode1, inputVariables2, expressionAsInternalCode2){
    console.log(inputVariables1);
    console.log(inputVariables2);
    let combinations1 = Math.pow(2, inputVariables1.length) - 1; 
    let combinations2 = Math.pow(2, inputVariables2.length) - 1; 
    let differences = 0;
    if (combinations1 == combinations2){
        for (let mask = combinations1; mask >= 0; mask--){
            let result1 = evaluateExpression(assignValues(expressionAsInternalCode1, mask, inputVariables1, true));
            let result2 = evaluateExpression(assignValues(expressionAsInternalCode2, mask, inputVariables2, true));
            if (result1 == null) {
                setModalShow('No se puede evaluar la primera expresión booleana.');
                return null;
            }
            if (result2 == null) {
                setModalShow('No se puede evaluar la segunda expresión booleana.');
                return null;
            }
            differences = result1[0] != result2[0] ? differences + 1 : differences;
        }
        if (differences == 0){
            return( 
                <Alert key="success" variant="success" style={styleResult}>
                    <h2><Badge bg="success">EQUIVALENTES</Badge></h2> 
                    <p>Ambas expresiones se representan mediante la misma tabla booleana.</p>
                </Alert>
            );
        }else{
            return(
                <Alert key="danger" variant="danger" style={styleResult}>
                    <h2><Badge bg="danger">DIFERENTES</Badge></h2> 
                    <p>Las tablas booleanas de las expresiones introducidas, son diferentes.</p>
                </Alert>
            );
        }
    }
    return(
        <Alert key="danger" variant="danger" style={styleResult}>
            <h2><Badge bg="danger">MUY DIFERENTES</Badge></h2> 
            <p>Las expresiones introducidas no tienen la misma cantidad de variables.</p>
        </Alert>
    );
  }

  const ComparisonResul = ({expression1, expression2}) => {
    const booleanExpression1 = expression1.replace(' ', '');
    const booleanExpression2 = expression2.replace(' ', '');
    const errors1 = checkErrorsInSimpleNotation(booleanExpression1);
    const errors2 = checkErrorsInSimpleNotation(booleanExpression2);
    if ((errors1 != '') || (errors2 != '')){
      console.log(errors1);
      setModalShow(errors1);
    }
    if (errors2 != ''){
      console.log(errors2);
      setModalShow(errors2);
    }
    const expressionAsInternalCode1 = simpleNotationToInternalCode(stringToArray(booleanExpression1));
    const expressionAsInternalCode2 = simpleNotationToInternalCode(stringToArray(booleanExpression2));
    const inputVariables1 = searchInputVars(expressionAsInternalCode1, true);
    const inputVariables2 = searchInputVars(expressionAsInternalCode2, true);
    const result = compareTables(
        inputVariables1, 
        expressionAsInternalCode1, 
        inputVariables2, 
        expressionAsInternalCode2
    );

    return (
      <div style={{textAlign:'right'}} >
        {(errors1 == '') && (errors2 == '') ? result : null}
      </div>
    )
  }


  const callbackOnClic = (text1, text2, div) => {
    setComparisonResul(<ComparisonResul expression1={text1} expression2={text2} />);
  }

  return (
      <InputWithKeyboard 
          title={title}
          description={description}
          type="boolean" 
          initialText1={initialText1}
          initialText2={initialText2}
          actionLabel="Comprobar Equivalencia" 
          actionCallback={callbackOnClic}
      >
        {comparisonResul}
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


export default BooleanExpressionComparator;
