/**
 * Autor: Santiago A. Orellana Perez 
 * Fecha: 24/12/2009
 * Modificado: xx/04/2023
 */

/* global BigInt */
import { stringToArray, trimLeft } from "./lib_base";


const CHARS_BINARY = ["0", "1"];
const CHARS_OCTAL = ["0", "1", "2", "3", "4", "5", "6", "7"];
const CHARS_DECIMAL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const CHARS_HEXADECIMAL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function isStringInNumericSystem(inputString, numericSystem){
  const inputArray = stringToArray(inputString);
  for (let n = 0; n < inputArray.length; n++)
    if (numericSystem.indexOf(inputArray[n]) < 0) return false;
  return true;
};

function isHexadecimal(inputString){
  return isStringInNumericSystem(inputString, CHARS_HEXADECIMAL);
};


function isDecimal(inputString){
  return isStringInNumericSystem(inputString, CHARS_DECIMAL);
};


function isOctal(inputString){
  return isStringInNumericSystem(inputString, CHARS_OCTAL);
};


function isBinary(inputString){
  return isStringInNumericSystem(inputString, CHARS_BINARY);
};



/**
 * Decodifica un string de hasta 4 caracteres que representa un numero binario.
 * @param {string} inputString - Cadena de hasta cuatro caracteres compuesta de ceros y unos.
 * @param {string} hexadecimal - Cadena de hasta cuatro caracteres compuesta de ceros y unos.
 * @returns - Valor como integer. Si hexadecimal=true, devuelve el valor en Hexadecimal.
 */
function simpleDecodeBinary(inputString, hexadecimal){
  switch (inputString) {
    case '0000': return (hexadecimal ? '0' : 0);
    case '000': return (hexadecimal ? '0' : 0);
    case '00': return (hexadecimal ? '0' : 0);
    case '0': return (hexadecimal ? '0' : 0);
    case '0001': return (hexadecimal ? '1' : 1);
    case '001': return (hexadecimal ? '1' : 1);
    case '01': return (hexadecimal ? '1' : 1);
    case '1': return (hexadecimal ? '1' : 1);
    case '0010': return (hexadecimal ? '2' : 2);
    case '010': return (hexadecimal ? '2' : 2);
    case '10': return (hexadecimal ? '2' : 2);
    case '0011': return (hexadecimal ? '3' : 3);
    case '011': return (hexadecimal ? '3' : 3);
    case '11': return (hexadecimal ? '3' : 3);
    case '0100': return (hexadecimal ? '4' : 4);
    case '100': return (hexadecimal ? '4' : 4);
    case '0101': return (hexadecimal ? '5' : 5);
    case '101': return (hexadecimal ? '5' : 5);
    case '0110': return (hexadecimal ? '6' : 6);
    case '110': return (hexadecimal ? '6' : 6);
    case '0111': return (hexadecimal ? '7' : 7);
    case '111': return (hexadecimal ? '7' : 7);
    case '1000': return (hexadecimal ? '8' : 8);
    case '1001': return (hexadecimal ? '9' : 9);
    case '1010': return (hexadecimal ? 'A' : 10);
    case '1011': return (hexadecimal ? 'B' : 11);
    case '1100': return (hexadecimal ? 'C' : 12);
    case '1101': return (hexadecimal ? 'D' : 13);
    case '1110': return (hexadecimal ? 'E' : 14);
    case '1111': return (hexadecimal ? 'F' : 15);    
    default: return 0;
  }
}


/**
 * Codifica un caracter que representa un numero octal o hexadecimal.
 * @param {string} inputString - Cadena con un caracter octal o hexadecimal.
 * @returns - Representacion en Binario del valor de entrada.
 */
 function simpleEncodeBinary(inputChar){
  switch (inputChar.toLowerCase()) {
    case '0': return '0000';
    case '1': return '0001';
    case '2': return '0010';
    case '3': return '0011';
    case '4': return '0100';
    case '5': return '0101';
    case '6': return '0110';
    case '7': return '0111';
    case '8': return '1000';
    case '9': return '1001';
    case 'a': return '1010';
    case 'b': return '1011';
    case 'c': return '1100';
    case 'd': return '1101';
    case 'e': return '1110';
    case 'f': return '1111';    
    default: return 0;
  }
}


export function decimalToBinary(inputString){
  inputString = trimLeft(inputString, "0");
  if (! isDecimal(inputString)) return null;
  let value = parseInt(inputString.replace(" ", ""));
  let result = [];
  while (value > 0){
    if (value % 2 > 0) result.push('1'); else result.push('0');
    value = parseInt(value / 2);
  }
  return result.reverse().join("");
}


export function binaryToDecimal(inputString){
  const symbols = 4;
  if (! isBinary(inputString)) return "";
  if (inputString.length == 0) return "0";
  let result = 0;
  let nible = 1;
  while (inputString.length > 0){
    if (inputString.length >= symbols){
      result += simpleDecodeBinary(inputString.slice(-symbols), false) * nible;
      inputString = inputString.slice(0, -symbols);
      nible *= 16;
    }else{
      result += simpleDecodeBinary(inputString, false) * nible;
      inputString = "";
    }
  }
  return result;
}


function binaryTo(inputString, symbols){
  if (! isBinary(inputString)) return "";
  if (inputString.length == 0) return "0";
  let result = '';
  while (inputString.length > 0){
    if (inputString.length >= symbols){
      result = simpleDecodeBinary(inputString.slice(-symbols), true) + result;
      inputString = inputString.slice(0, -symbols);
    }else{
      result = simpleDecodeBinary(inputString, true) + result;
      inputString = "";
    }
  }
  return result;
}


function toBinary(inputString, symbols){
  if (! isHexadecimal(inputString)) return "";
  if (inputString.length == 0) return "0";
  let result = '';
  for(let i = 0; i < inputString.length; i++) 
    result += simpleEncodeBinary(inputString.charAt(i)).slice(-symbols);
  return result;
}


export function binaryToOctal(inputString){
  return binaryTo(inputString, 3)
}

export function binaryToHexadecimal(inputString){
  return binaryTo(inputString, 4)
}


export function octalToBinary(inputString){
  return toBinary(inputString, 3);
}

export function hexadecimalToBinary(inputString){
  return toBinary(inputString, 4);
}


