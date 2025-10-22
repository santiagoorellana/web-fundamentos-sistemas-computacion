

const SUM = "+";    //Notación simplificada del operador booleano de suma.
const MULT = "·";   //Notación simplificada del operador booleano de Multiplicacion.
const NEG = "'";    //Notación simplificada del operador booleano de negacion.

const CHARS_VARS = ["A", "B", "C", "D", "E", "F", "G", "H", "0", "1"];
const CHARS_OPP = [SUM, MULT, NEG, "(", ")", "{", "}", "[", "]", " "];
const SYMBOLS_OPENER = ["(", "{", "["];
const SYMBOLS_CLOSER = [")", "}", "]"];  
export const INTERNAL_AND='*';
export const INTERNAL_OR='+'; 
export const INTERNAL_XOR='#';
export const INTERNAL_NOT='-';
export const INTERNAL_NAN='&';
export const INTERNAL_NOR='!';
export const INTERNAL_XNOR='$';
const INTERNAL_SYMBOLS_BINARY = [
  INTERNAL_AND,
  INTERNAL_OR,
  INTERNAL_XOR,
  INTERNAL_NAN,
  INTERNAL_NOR,
  INTERNAL_XNOR
];


/**
 * Elimina las ocurrencias consecutivas de un caracter que se encuentren a la izquierda.
 * @param {*} inputString - Datos a los que se le debe eliminar el caracter.
 * @param {*} character - Caracter que se debe eliminar.
 * @returns - Cadena con los datos sin la repetición del caracter al inicio.
 */
export function trimLeft(inputString, character){
    let result = inputString;
    while (true){
        if (result.startsWith(character))
            result = result.slice(1);
        else
            return result;
    }
}


/**
 * Convierte de string a array.
 * @param {*} inputString - String que se debe convertir en array.
 * @returns - Array con los caracteres.
 */
export function stringToArray(inputString){
    return inputString.split("");
}


/**
 * Convierte de arreglo a cadena.
 * @param {*} inputArray - Array que se debe convertir en cadena.
 * @returns - Cadena que contiene los caracteres del array.
 */
export function arrayToString(inputArray){
    return inputArray.join("");
}

/**
 * Elimina los caracteres de espacios de un array.
 * @param {*} inputArray - Array de entrada con los caracteres que se deben filtrar. 
 * @returns - Devuelve el array sin caracteres de espacio.
 */
 export function deleteSpaces(inputArray){
    let output = []; 
    inputArray.forEach(element => {
        if(element != ' ') 
            output.push(element);
    });                                      
    return output;
}
  
  
/**
 * Dada una fucnión booleana en Notación Simplificada, encuentra y señala los errores.
 * @param {*} inputString - Contiene la función booleana en la que se deben buscar errores.
 * @returns - Si no hay error, devuelve cadena vacia. De lo contrario devuelve cadena con el error.
 */
export function checkErrorsInSimpleNotation(inputString){

    function error(index, error, message){
        return 'Error '+ error +' en posición '+ index +'. '+message;
    }
  
    let data = stringToArray(inputString);
    let indexLast = data.length - 1;

    for (let index = 0; index <= indexLast; index++){
      let symbol = data[index];
      if ((CHARS_VARS.indexOf(symbol) < 0) && (CHARS_OPP.indexOf(symbol)) < 0)
          return error(index, symbol, 'Símbolo no permitido.');
    }

    let first = data[0];
    let last = data[indexLast];
    if (first == NEG)
        return error(0, first, 'El operador booleano de negación debe ubicarse detrás del operando al cual afecta. Por esta razón, no puede aparecer como primer símbolo de la expresión.');
    if ((first == SUM) || (first == MULT))
        return error(0, first, 'Los operadores booleanos de suma y producto deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al principio de la expresión.');
    if ((last == SUM) || (last == MULT))
        return error(indexLast, last, 'Los operadores booleanos de suma y producto deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al final de la expresión.'); 

    for (let index = 0; index < indexLast; index++){
      let current = data[index];
      let next = data[index + 1];
      let sample = current + next;
      if (((current == SUM) && (next == SUM)) || ((current == MULT) && (next == MULT)))
        return error(index, sample, 'Los operadores booleanos no se deben repetir.');
      if (((current == SUM) && (next == MULT)) || ((current == MULT) && (next == SUM)))
        return error(index, sample, 'Los operadores booleanos de suma y producto, no deben aparecer de forma consecutiva.');
      if (((current == SUM) && (next == NEG)) || ((current == MULT) && (next == NEG)))
        return error(index, sample, 'Los operadores booleanos de suma y producto, no pueden ser afectados por el operador de negación.'); 
      if (((SYMBOLS_OPENER.indexOf(current) >= 0) && (next == SUM)) ||
        ((current == SUM)) && (SYMBOLS_CLOSER.indexOf(next) >= 0))
        return error(index, sample, 'El operador de suma booleana, debe aparecer entre dos operandos.'); 
      if (((SYMBOLS_OPENER.indexOf(current) >= 0) && (next == MULT)) ||
        ((current == MULT)) && (SYMBOLS_CLOSER.indexOf(next) >= 0))
        return error(index, sample, 'El operador de producto booleano, debe aparecer entre dos operandos.'); 
      if ((SYMBOLS_OPENER.indexOf(current) >= 0) && (SYMBOLS_CLOSER.indexOf(next) >= 0))
        return error(index, sample, 'Mal uso de los signos de agrupación. Deben encerrar alguna expresión, variable o constante.'); 
      if ((SYMBOLS_OPENER.indexOf(current) >= 0) && (next == NEG))
        return error(index, sample, 'Mal uso del operador de negación. Se debe colocar detrás de una variable o expresión agrupada.'); 
    }
    return "";
  }



/**
 * Dada una expresión con operadores de compuertas, encuentra y señala los errores.
 * @param {*} inputString - Contiene la expresión en la que se deben buscar errores.
 * @returns - Si no hay error, devuelve cadena vacia. De lo contrario devuelve cadena con el error.
 */
 export function checkErrorsInGatesNotation(inputString){
  let data = deleteSpaces(stringToArray(gatesSymbolToInternalCode(inputString)));
  //console.log(data);
  let indexLast = data.length - 1;
  for (let index = 0; index <= indexLast; index++){
    let symbol = data[index];
    if ((CHARS_VARS.indexOf(symbol) < 0) && 
      (INTERNAL_SYMBOLS_BINARY.indexOf(symbol) < 0) && 
      (SYMBOLS_OPENER.indexOf(symbol) < 0) && 
      (SYMBOLS_CLOSER.indexOf(symbol) < 0) && 
      (symbol != INTERNAL_NOT) && (symbol != " "))
      return 'Símbolo no permitido: '+ index;
  }
  for (let index = 0; index < indexLast; index++){
    if ((CHARS_VARS.indexOf(data[index]) >= 0) && (CHARS_VARS.indexOf(data[index + 1]) >= 0))
      return 'Dos variables no puede estar juntas. Falta un operador entre ellas.';
  }
  let first = data[0];
  let last = data[indexLast];
  if (last == INTERNAL_NOT)
    return 'El operador NOT debe ubicarse delante del operando al cual afecta. Por esta razón, no puede aparecer al final de la expresión.';
  if (INTERNAL_SYMBOLS_BINARY.indexOf(first) >= 0)
    return 'Los operadores AND, OR, XOR, NAN, NOR y XNOR, deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al principio de la expresión.';
  if (INTERNAL_SYMBOLS_BINARY.indexOf(last) >= 0)
    return 'Los operadores AND, OR, XOR, NAN, NOR y XNOR, deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al final de la expresión.'; 

  for (let index = 0; index < indexLast; index++){
    let current = data[index];
    let next = data[index + 1];
    let sample = current + next;
    if ((INTERNAL_SYMBOLS_BINARY.indexOf(current) >= 0) && (INTERNAL_SYMBOLS_BINARY.indexOf(next) >= 0))
      return 'Los operadores AND, OR, XOR, NAN, NOR y XNOR no se deben repetir. Deben estar entre dos variables o expresiones agrupadas';
    if ((current == INTERNAL_NOT) && (INTERNAL_SYMBOLS_BINARY.indexOf(next) >= 0))
      return 'Los operadores AND, OR, XOR, NAN, NOR y XNOR no pueden estar inmediatamente detrás del operador NOT.'; 
    if (((SYMBOLS_OPENER.indexOf(current) >= 0) && (INTERNAL_SYMBOLS_BINARY.indexOf(next) >= 0)) ||
      ((INTERNAL_SYMBOLS_BINARY.indexOf(current) >= 0) && (SYMBOLS_CLOSER.indexOf(next) >= 0)))
      return 'Los operadores AND, OR, XOR, NAN, NOR y XNOR debe aparecer entre dos variables.'; 
    if ((SYMBOLS_OPENER.indexOf(current) >= 0) && (SYMBOLS_CLOSER.indexOf(next) >= 0))
      return 'Mal uso de los signos de agrupación. Deben encerrar alguna expresión o variable.'; 
  }
  return "";
}



/**
 * Codifica los nombres de las compuertas lógicas en un código interno.
 * @param {*} inputString - Expresión con operadores de compuertas lógicas.
 * @returns - Expresión con código interno de un solo caracter.
 */
 export function gatesSymbolToInternalCode(inputString){
  inputString = inputString.replaceAll("xnor", INTERNAL_XNOR);
  inputString = inputString.replaceAll("and", INTERNAL_AND);
  inputString = inputString.replaceAll("xor", INTERNAL_XOR);
  inputString = inputString.replaceAll("not", INTERNAL_NOT);
  inputString = inputString.replaceAll("nan", INTERNAL_NAN);
  inputString = inputString.replaceAll("nor", INTERNAL_NOR);
  inputString = inputString.replaceAll("or", INTERNAL_OR);
  return inputString;
}



/**
 * Convierte una expresion boleana en Notación Simplificada a código interno con simbolos ['+', '-', '*'] 
 * @param {*} inputArray - Expresion booleana en notacion simplificada.
 * @returns - Expresion booleana codificada con simbolos internos.
 */
export function simpleNotationToInternalCode(inputArray){
    //Copia el reverso de la cadena y sustituye los símbolos de la Notación Simplificada.
    var transformed = [];
    inputArray.reverse().forEach(symbol => {
        switch (symbol) {
            case NEG: transformed.push(INTERNAL_NOT); break;  
            case MULT: transformed.push(INTERNAL_AND); break; 
            case '{': transformed.push('}'); break;  
            case '(': transformed.push(')'); break;
            case '[': transformed.push(']'); break;
            case '}': transformed.push('{'); break;
            case ')': transformed.push('('); break;
            case ']': transformed.push('['); break;
            default: transformed.push(symbol); break;
        }
    });
    //Coloca signos de multiplicación omitidos en la Notacion Simplificada.
    let result = [];
    for (let n = 0; n < transformed.length; n++){   
        result.push(transformed[n]); 
        if (n < transformed.length - 1){
            if (CHARS_VARS.indexOf(transformed[n].toUpperCase()) >= 0){     
                // Detecta dos variables juntas.
                if (CHARS_VARS.indexOf(transformed[n + 1].toUpperCase()) >= 0)
                    result.push(INTERNAL_AND); 
                else
                    // Detecta una variable frente a una expresion agrupada.
                    if (SYMBOLS_OPENER.indexOf(transformed[n + 1]) >= 0)
                        result.push(INTERNAL_AND); 
                    else
                        // Detecta una variable frente a un signo de negacion.
                        if (transformed[n + 1] == INTERNAL_NOT)
                            result.push(INTERNAL_AND); 
            }else{
                if (SYMBOLS_CLOSER.indexOf(transformed[n]) >= 0){
                    // Detecta dos expresiones agrupadas juntas.
                    if (SYMBOLS_OPENER.indexOf(transformed[n + 1]) >= 0)
                        result.push(INTERNAL_AND); 
                    else
                        // Detecta una expresion agrupada seguida de una variable.
                        if (CHARS_VARS.indexOf(transformed[n + 1].toUpperCase()) >= 0)
                            result.push(INTERNAL_AND); 
                        else   
                            // Detecta una expresion agrupada seguida de un operador de negacion.
                            if (transformed[n + 1] == INTERNAL_NOT)
                                result.push(INTERNAL_AND); 
                }
            }
        }
    }
    return result;
};



/**
 * Muestra al usuario la ocurrencia de un error.
 * @param {*} result - Valor que se debe devolver.
 * @param {*} message - Mensaje que se muestra en la consola.
 * @returns - Devuelve el valor pasado en el parametro result.
 */
export function report(result, message){
  console.log(message);
  return result;
}


/**
 * Devuelve un array con las variables que encuentra en la expresion booleana simplificada.
 * @param {*} inputArray - Expresion booleana simplificada.
 * @returns - Variables encontradas en la expresion booleana simplificada.
 */
 export function searchInputVars(inputArray, reverse){
  let vars = [];
  inputArray.forEach(symbol => {
    if(CHARS_VARS.indexOf(symbol) >= 0)
      if (vars.indexOf(symbol) < 0)
        vars.push(symbol);
  });
  return (reverse) ? vars.reverse() : vars;
};


/**
 * Le asigna valores booleanos a las variables encontradas en una expresión booleana .
 * @param {array} data - Expresión booleana en código interno a la que se le dene asignar valores.
 * @param {integer} mask - Máscara de bits con los valores que se deben asignar a las variables.
 * @param {array} vars - Arreglo con las variables a las que se les debe asignar el valor según la máscara.
 * @returns 
 */
 export function assignValues(data, mask, vars, reverse){
  let values = [];
  vars.forEach((symbol, index) => {
    values.push(((mask &(1 << index)) > 0) ? '1' : '0');
  });
  values = (reverse) ? values.reverse() : values;
  let result = [];
  data.forEach(symbol => {
    if (vars.indexOf(symbol) >= 0)
      result.push(values[vars.indexOf(symbol)]);
    else
      result.push(symbol);
  });
  return result;
}


/**
 * Verifica si existe correspondencia entre dos símbolos.
 * @param {*} closer - Símbolos agrupador de cierre.
 * @param {*} opener - Símbolos agrupador de apertura.
 * @returns - Devuelve true si hay correspondencia.
 */
function coincidence(closer, opener){
  return (
    ((closer == ')') && (opener == '(')) || 
    ((closer == ']') && (opener == '[')) || 
    ((closer == '}') && (opener == '{'))
  );
}


/**
 *  Ejecuta el operador NOT
 * @param {*} oppIndex - Posición del operador en el array de datos.
 * @param {*} dataArray - Arreglo con los datos que se deben procesar.
 * @returns - Devuelve el arreglo después de aplicar la operación, o null si ocurre un error.
 */
function executeNot(index, data){
  if (index == data.length - 1)
    return report(null, "Error ejecutando operador. Falta el operando.");
  if(data[index + 1] == INTERNAL_NOT)  //dos operadores NOT se anulan
    data[index + 1] = ' '; 
  else      
    if(data[index + 1] == '1')
      data[index + 1] = '0'; 
    else 
      if(data[index + 1] == '0')
        data[index + 1] = '1'; 
      else
        return report(null, "Error ejecutando operador. El operando debe ser 0 o 1.");
  data[index] = ' '; 
  return data;
}

/**
 *  Ejecuta el operador AND
 * @param {*} index - Posición del operador en el array de datos.
 * @param {*} data - Arreglo con los datos que se deben procesar.
 * @returns - Devuelve el arreglo después de aplicar la operación, o null si ocurre un error.
 */
 function execute(operator, index, data){
  if (operandsError(index, data)) return null;
  switch (operator) {
    case INTERNAL_AND:
      data[index] = ((data[index - 1] == '1') && (data[index + 1] == '1')) ? '1' : '0';
      break;
    case INTERNAL_OR:
      data[index] = ((data[index - 1] == '0') && (data[index + 1] == '0')) ? '0' : '1';
      break;
    case INTERNAL_XOR:
      data[index] = (data[index - 1] == data[index + 1]) ? '0' : '1';
      break;
    case INTERNAL_NAN:
      data[index] = ((data[index - 1] == '1') && (data[index + 1] == '1')) ? '0' : '1';
      break;
    case INTERNAL_NOR:
      data[index] = ((data[index - 1] == '0') && (data[index + 1] == '0')) ? '1' : '0';
      break;
    case INTERNAL_XNOR:
      data[index] = (data[index - 1] == data[index + 1]) ? '1' : '0';
      break;  
    default: 
      return data;
  }
  data[index - 1] = ' ';
  data[index + 1] = ' ';
  return data;
}


/**
 *  Verifica si los operandos existen y si son diferentes de cero y uno.
 * @param {*} index - Posición del operador en el array de datos.
 * @param {*} data - Arreglo con los datos que se deben procesar.
 * @returns - Indica error devolviendo true si hay error en operandos.
 */
 function operandsError(index, data){
  if (index == 0)
    return report(true, "Error ejecutando operador. Falta el primer operando.");
  if (index == data.length - 1)
    return report(true, "Error ejecutando operador. Falta el segundo operando.");
  if (((data[index - 1] != '1') && (data[index - 1] != '0')) || 
    ((data[index + 1] != '1') && (data[index + 1] != '0')))
    return report(true, "Error ejecutando operador. Los operandos debe ser 0 o 1.");
  return false;
}

/**
 *  Busca operadores y los ejecuta.
 * @param {*} opperatorType - Tipo de operador que se debe buscar.
 * @param {*} data - Arreglo con los datos que se deben procesar.
 * @returns - Devuelve el procesamiento de los datos de entrada o null si ocurre un error.
 */
function executeAll(operator, data){
  while (true){  
    data = deleteSpaces(data);   
    let index = data.indexOf(operator);
    if (index >= 0){ 
      data = (operator == INTERNAL_NOT) ? executeNot(index, data) : execute(operator, index, data);
      if (data == null) return null;     
    }else{
      return data;
    }
  }
}

/**
 * Evalúa un fragmento de expresión booleana en codificación interna.
 * @param {*} data - Fragmento de expresión booleana en codificación interna.
 * @returns - Resultado de la evaluación en la primera posición del array.
 */
function evaluateExpressionFragment(begin, end, data){
  let fragment = []; 
  for(let m = begin; m <= end; m++){  
    fragment.push(data[m]); 
    data[m] = ' ';
  }  
  if (SYMBOLS_OPENER.indexOf(fragment[0]) >= 0) fragment[0] = ' '; 
  if (SYMBOLS_CLOSER.indexOf(fragment[fragment.length - 1]) >= 0) fragment[fragment.length - 1] = ' ';
  fragment = executeAll(INTERNAL_NOT, fragment);
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_AND, fragment); 
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_NAN, fragment); 
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_OR, fragment);
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_NOR, fragment);
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_XOR, fragment);
  if (fragment == null) return null;
  fragment = executeAll(INTERNAL_XNOR, fragment);
  if (fragment == null) return null;
  if (fragment.length == 1){
    data[begin] = fragment[0]; 
    return data;
  }else    
    return report(null, 'Error evaluando expresión agrupada.'); 
}

/**
 * Evalúa una expresión booleana en codificación interna.
 * @param {*} data - Expresión booleana en codificación interna.
 * @returns - Resultado de la evaluación en la primera posición del array.
 */
export function evaluateExpression(data){
  let agrup = 0; 
  while(data.length > 1){
    let stackOfChars = [];
    let stackOfIndex = [];
    agrup = 0;
    data = deleteSpaces(data);
    data.forEach((symbol, index) => {
      if (SYMBOLS_OPENER.indexOf(symbol) >= 0){
        stackOfChars.push(symbol);
        stackOfIndex.push(index);
      }else{
        if (SYMBOLS_CLOSER.indexOf(symbol) >= 0){
          if(stackOfChars.length == 0){
            return report(null, 'Error en los signos de agrupación');
          }else{
            if (! coincidence(symbol, stackOfChars.pop())){
              return report(null, 'Error en los signos de agrupación');
            }else{
              data = evaluateExpressionFragment(stackOfIndex.pop(), index, data);
              if (data == null) return null;
              agrup++;
            }
          }
        }
      }
    });

    if(stackOfChars.length > 0)
      return report(null, 'Error en los signos de agrupación');
    else
      if(agrup == 0){
        data = evaluateExpressionFragment(0, data.length-1, data);
        if (data == null) return null;
      }
  };
  return data[0];  
}




