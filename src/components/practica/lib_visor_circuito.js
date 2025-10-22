
/* 
Autor: Santiago A. Orellana P�rez 
Fecha: 26/01/2010
Modificado: 16/04/2023
*/

import { 
  checkErrorsInGatesNotation, 
  searchInputVars, 
  gatesSymbolToInternalCode, 
  INTERNAL_AND, 
  INTERNAL_NAN, 
  INTERNAL_NOR, 
  INTERNAL_NOT, 
  INTERNAL_OR, 
  INTERNAL_XNOR, 
  INTERNAL_XOR 
} from "./lib_base";
import cone from "./fragments/cone.gif";
import con_ab from "./fragments/con_ab.gif";
import con_ar from "./fragments/con_ar.gif";
import con_de from "./fragments/con_de.gif";
import con_iz from "./fragments/con_iz.gif";
import cru from "./fragments/cru.gif";
import der_ab from "./fragments/der_ab.gif";
import der_ar from "./fragments/der_ar.gif";
import f10_and from "./fragments/f10_and.gif";
import f10_not from "./fragments/f10_not.gif";
import f10_or from "./fragments/f10_or.gif";
import f10_xor from "./fragments/f10_xor.gif";
import f11_and from "./fragments/f11_and.gif";
import f1_and from "./fragments/f1_and.gif";
import f1_not from "./fragments/f1_not.gif";
import f1_or from "./fragments/f1_or.gif";
import f1_xor from "./fragments/f1_xor.gif";
import f2_and from "./fragments/f2_and.gif";
import f2_not from "./fragments/f2_not.gif";
import f2_or from "./fragments/f2_or.gif";
import f2_xor from "./fragments/f2_xor.gif";
import f3_and from "./fragments/f3_and.gif";
import f5_and from "./fragments/f5_and.gif";
import f5_not from "./fragments/f5_not.gif";
import f5_or from "./fragments/f5_or.gif";
import f5_xor from "./fragments/f5_xor.gif";
import f6_and from "./fragments/f6_and.gif";
import f6_not from "./fragments/f6_not.gif";
import f6_or from "./fragments/f6_or.gif";
import f6_xor from "./fragments/f6_xor.gif";
import f7_and from "./fragments/f7_and.gif";
import f7_not from "./fragments/f7_not.gif";
import f8_and from "./fragments/f8_and.gif";
import f8_nan from "./fragments/f8_nan.gif";
import f9_and from "./fragments/f9_and.gif";
import f9_not from "./fragments/f9_not.gif";
import f9_or from "./fragments/f9_or.gif";
import f9_xor from "./fragments/f9_xor.gif";
import f_nada from "./fragments/f_nada.gif";
import hori from "./fragments/hori.gif";
import iz_ab from "./fragments/iz_ab.gif";
import iz_ar from "./fragments/iz_ar.gif";
import nodo_A from "./fragments/nodo_A.gif";
import nodo_B from "./fragments/nodo_B.gif";
import nodo_C from "./fragments/nodo_C.gif";
import nodo_con from "./fragments/nodo_con.gif";
import nodo_D from "./fragments/nodo_D.gif";
import nodo_E from "./fragments/nodo_E.gif";
import nodo_F from "./fragments/nodo_F.gif";
import nodo_G from "./fragments/nodo_G.gif";
import nodo_H from "./fragments/nodo_H.gif";
import nodo_Sal from "./fragments/nodo_Sal.gif";
import ver from "./fragments/ver.gif";


var imagesSelector = {
  "cone":cone,
  "con_ab":con_ab,
  "con_ar":con_ar,
  "con_de":con_de,
  "con_iz":con_iz,
  "cru":cru,
  "der_ab":der_ab,
  "der_ar":der_ar,
  "f10_and":f10_and,
  "f10_not":f10_not,
  "f10_or":f10_or,
  "f10_xor":f10_xor,
  "f11_and":f11_and,
  "f1_and":f1_and,
  "f1_not":f1_not,
  "f1_or":f1_or,
  "f1_xor":f1_xor,
  "f2_and":f2_and,
  "f2_not":f2_not,
  "f2_or":f2_or,
  "f2_xor":f2_xor,
  "f3_and":f3_and,
  "f5_and":f5_and,
  "f5_not":f5_not,
  "f5_or":f5_or,
  "f5_xor":f5_xor,
  "f6_and":f6_and,
  "f6_not":f6_not,
  "f6_or":f6_or,
  "f6_xor":f6_xor,
  "f7_and":f7_and,
  "f7_not":f7_not,
  "f8_and":f8_and,
  "f8_nan":f8_nan,
  "f9_and":f9_and,
  "f9_not":f9_not,
  "f9_or":f9_or,
  "f9_xor":f9_xor,
  "f_nada":f_nada,
  "hori":hori,
  "iz_ab":iz_ab,
  "iz_ar":iz_ar,
  "nodo_A":nodo_A,
  "nodo_B":nodo_B,
  "nodo_C":nodo_C,
  "nodo_con":nodo_con,
  "nodo_D":nodo_D,
  "nodo_E":nodo_E,
  "nodo_F":nodo_F,
  "nodo_G":nodo_G,
  "nodo_H":nodo_H,
  "nodo_Sal":nodo_Sal,
  "ver":ver
}

//Codigos numericos de los simbolos.
const NUMERIC_OPEN1 = parseInt(0xE0);
const NUMERIC_OPEN3 = parseInt(0xE1);
const NUMERIC_OPEN2 = parseInt(0xE2);
const NUMERIC_CLOSE1 = parseInt(0xE3);
const NUMERIC_CLOSE3 = parseInt(0xE4);
const NUMERIC_CLOSE2 = parseInt(0xE5);
const NUMERIC_SPACE = parseInt(0xE6);
const NUMERIC_AND = parseInt(0xF0);
const NUMERIC_NAN = parseInt(0xF1);
const NUMERIC_OR = parseInt(0xF2);
const NUMERIC_NOR = parseInt(0xF3);
const NUMERIC_XOR = parseInt(0xF4);
const NUMERIC_XNOR = parseInt(0xF5);
const NUMERIC_NOT = parseInt(0xF6);


var err=0;     		//Vale uno cuando ocurre un error.
const ms_err="Error en la expresi�n";   //Mensaje de error en la expresi�n

var stackOfChars=new Array();     //Guarda los caracteres de los agrupadores.
var stackOfIndex=new Array();     //Guarda posici�n del caracter.
var nivel_x = 0;
var orden_y = 0;
var view = new Array();          //Guarda la vista del circuito(vista[y][x])
var colisiones = false;	          //Indica la ocurrencia de colisiones
var con_colisiones = 0;           //Cantidad de colisiones
var optimizaciones = 0;

var v1='';

var vista_altura = 0;
var vista_ancho = 0;
var max_conec = 0;


const nodeA = [['nodo_A'], ['f_nada'], ['nodo_con']];
const nodeB = [['nodo_B'], ['f_nada'], ['nodo_con']];
const nodeC = [['nodo_C'], ['f_nada'], ['nodo_con']];
const nodeD = [['nodo_D'], ['f_nada'], ['nodo_con']];
const nodeE = [['nodo_E'], ['f_nada'], ['nodo_con']];
const nodeF = [['nodo_F'], ['f_nada'], ['nodo_con']];
const nodeG = [['nodo_G'], ['f_nada'], ['nodo_con']];
const nodeH = [['nodo_H'], ['f_nada'], ['nodo_con']];
const nodeEnd = [['hori','nodo_con','f_nada','nodo_Sal']];


const gr_and = [['f1_and','f2_and','f3_and','f_nada'], ['f5_and','f6_and','f7_and','f8_and'], ['f9_and','f10_and','f11_and','f_nada']];
const gr_nan = [['f1_and','f2_and','f3_and','f_nada'], ['f5_and','f6_and','f7_and','f8_nan'], ['f9_and','f10_and','f11_and','f_nada']];
const gr_or = [['f1_or','f2_or','f3_and','f_nada'], ['f5_or','f6_or','f7_and','f8_and'], ['f9_or','f10_or','f11_and','f_nada']];
const gr_nor = [['f1_or','f2_or','f3_and','f_nada'], ['f5_or','f6_or','f7_and','f8_nan'], ['f9_or','f10_or','f11_and','f_nada']];
const gr_xor = [['f1_xor','f2_xor','f3_and','f_nada'], ['f5_xor','f6_xor','f7_and','f8_and'],['f9_xor','f10_xor','f11_and','f_nada']];
const gr_xnor = [['f1_xor','f2_xor','f3_and','f_nada'], ['f5_xor','f6_xor','f7_and','f8_nan'], ['f9_xor','f10_xor','f11_and','f_nada']];
const gr_not = [['f1_not','f2_not','f_nada','f_nada'], ['f5_not','f6_not','f7_not','f8_nan'], ['f9_not','f10_not','f_nada','f_nada']];

//------------------------------------------------------------
//HORIZONTAL
var lin_hori=new Array();
lin_hori[0]=new Array('hori');

//DERECHA ABAJO
var lin_der_ab=new Array();
lin_der_ab[0]=new Array('der_ab');

//DERECHA ARRIBA
var lin_der_ar=new Array();
lin_der_ar[0]=new Array('der_ar');

//VERTICAL
var lin_ver=new Array();
lin_ver[0]=new Array('ver');

//IZQUIERDA ARRIBA
var lin_iz_ar=new Array();
lin_iz_ar[0]=new Array('iz_ar');

//IZQUIERDA ABAJO
var lin_iz_ab=new Array();
lin_iz_ab[0]=new Array('iz_ab');

//CRUZADA
var lin_cru=new Array();
lin_cru[0]=new Array('cru');

//CONECCI�N DERECHA
var lin_con_der=new Array();
lin_con_der[0]=new Array('con_de');



/**
 * Convierte de cadena a arreglo.
 * @param {*} inputString - String con la expresion de entrada
 * @returns - Array con la expresion. 
 */
function stringToPascalString(inputString){
	var result = new Array();
	result[0] = inputString.length;
	var z = 0;
	while (z <= inputString.length) 
    result[z + 1] = inputString.charAt(z++);
	return result;
}


/**
 * Quita los espacios intermedios.
 * @param {*} inputArray - Datos donde el primer elemento es la cantidad de elementos que hay a continuacion.
 * @returns - Devuelve los mismos datos sin las ocurrencias del NUMERIC_SPACE.
 */
function deleteSpacesInArrayPascalStyle(inputArray){
  let result = [];
  result.push(0); 
  for (let n = 1; n <= inputArray[0]; n++)
    if (inputArray[n] != NUMERIC_SPACE)
      result.push(inputArray[n]);
  result[0] = result.length - 1;
  return result;
}


/**
 * Verifica si existe correspondencia entre los codigos de apertura y cierre.
 * @param {*} actual - agrupador encontrado en la expresion.
 * @param {*} previous - agrupador previamente econtrado en la expresion.
 * @returns - True si hay correspondencia entre los agrupadores.
 */
function codeCoincidence(actual, previous){
  return ((actual == NUMERIC_CLOSE1) && (previous == NUMERIC_OPEN1)) ||
        ((actual == NUMERIC_CLOSE2) && (previous == NUMERIC_OPEN2)) ||
        ((actual == NUMERIC_CLOSE3) && (previous == NUMERIC_OPEN3));
}


//---------------------------------------------------------
var gatesNet = new Array(),  //Red de compuertas enlazadas.
siguiente=0;            //Siguiente posici�n libre para crear compuerta nueva.


/**
 * Crea los nodos en la red sin conectar.
 * @param {*} inputVariables - String Pascal con las variables de entrada.
 * @returns - 
 */
function createNodes(inputVariables){
  for(let n = 0; n <= gatesNet.lenght; n++) gatesNet[n]=0;
  gatesNet[0] = new Array(0,0,0,0,0,0);                      //Crea el nodo base.
  for(let n = 1; n <= inputVariables[0]; n++)
    gatesNet[n] = new Array(inputVariables[n],0,0,0,0,0);
  gatesNet[0][0] = inputVariables[0];                        //Cuenta la cantidad de nodos.
  return inputVariables[0] + 1;                         //Actualiza la posicion para las proximas compuertas.
}


/**
 * Crea una compuerta y la enlaza en la RED.
 * @param {*} gateCode - Tipo de compuerta
 * @param {*} outOfGateA - Apunta a una salida de otra compuerta.
 * @param {*} outOfGateB - Apunta a una salida de otra compuerta.
 * @param {*} x - Nivel posicional X de la compuerta.
 * @param {*} y - Orden posicional Y de la compuerta.
 * @param {*} conectedGates - Cantidad de compuertas que se le conectan.
 */
function createGate(gateCode, outOfGateA, outOfGateB, x, y, conectedGates){
  gatesNet[siguiente] = new Array(gateCode, outOfGateA, outOfGateB, x, y, 0);    //Crea la compuerta.
  gatesNet[outOfGateA][5]++;                                                     //Incrementa el contador de las 
  if (conectedGates == 0) gatesNet[outOfGateB][5]++;                             //compuertas a las que se enlaza.
  siguiente++;                                                              //Suma una compuerta a la RED.
}


/**
 * Sustituye cada variable por su ordinal en la lista de encontradas. 
 * @param {*} expression - Arreglo con la expresion.
 * @param {*} inputVariables - Arreglo con la lista de variables encontradas.
 * @returns - La expresion de entrada con las variables sustituidas por su ordinal.
 */
function replaceVarsWithOrdinals(expression, inputVariables){
  for (let n = 1; n <= inputVariables[0]; n++)
    for (let m = 1; m <= expression[0]; m++)
      if (expression[m] == inputVariables[n])
        expression[m] = n;
  return expression;
}


/**
 * Convierte de codigo interno a codigo numerico.
 * @param {*} inputArray - Expresion a la que se le deben cambiar los codigos.
 * @returns - Expresion con los codigos cambiados.
 */
function internalCodeToNumericalCode(inputArray){
  let n = 1;
  while (n <= inputArray[0]){
    if (inputArray[n] == INTERNAL_AND) inputArray[n] = NUMERIC_AND; else
    if (inputArray[n] == INTERNAL_NAN) inputArray[n] = NUMERIC_NAN; else
    if (inputArray[n] == INTERNAL_OR) inputArray[n] = NUMERIC_OR; else
    if (inputArray[n] == INTERNAL_NOR) inputArray[n] = NUMERIC_NOR; else
    if (inputArray[n] == INTERNAL_XOR) inputArray[n] = NUMERIC_XOR; else
    if (inputArray[n] == INTERNAL_XNOR) inputArray[n] = NUMERIC_XNOR; else
    if (inputArray[n] == INTERNAL_NOT) inputArray[n] = NUMERIC_NOT; else
    if (inputArray[n] == '(') inputArray[n] = NUMERIC_OPEN1; else
    if (inputArray[n] == '{') inputArray[n] = NUMERIC_OPEN3; else
    if (inputArray[n] == '[') inputArray[n] = NUMERIC_OPEN2; else
    if (inputArray[n] == ')') inputArray[n] = NUMERIC_CLOSE1; else
    if (inputArray[n] == '}') inputArray[n] = NUMERIC_CLOSE3; else
    if (inputArray[n] == ']') inputArray[n] = NUMERIC_CLOSE2; else
    if (inputArray[n] == ' ') inputArray[n] = NUMERIC_SPACE;
    n++;
  }
  return inputArray;
}


/**
 * Busca operadores y los crea en la RED.
 * @param {*} operatorCode - Tipo de operador a buscar
 * @param {*} y - Arreglo con el fragmento de expresion.
 * @returns 
 */
function createOperator(operatorCode,y){
  var n=0;
  while(n<y[0]){                           //esto se repite 
    y=deleteSpacesInArrayPascalStyle(y);                   //elimina los espacios dejados.
    for(n=1;n<y[0];n++){                //busca un operador X.
      if(y[n] == operatorCode){                     //si lo encuentra, lo crea en la RED.
        if(n == y[0]){                   //error si no hay segundo operando
          alert(ms_err);
          err=1;
          return 0;
        }else{    
          if(operatorCode != NUMERIC_NOT){
            orden_y++;
            createGate(operatorCode, y[n-1], y[n+1], nivel_x, orden_y, 0); //Enlaza operador binario.
            y[n-1]=NUMERIC_SPACE;               //elimina el primer operando
            y[n+1]=NUMERIC_SPACE;               //elimina el segundo operando 
            y[n]=parseInt(siguiente-1);         //Coloca el indice de RED en la f�rmula.
          }else{
            orden_y++;
            if(y[n+1] == NUMERIC_NOT)           //SI son dos NOT consecutivos
              y[n+1] = NUMERIC_SPACE;           //elimina el segundo NOT
            else {
              createGate(operatorCode, y[n+1], y[n+1], nivel_x, orden_y, 1);    //Enlaza operador unario.
              y[n+1] = parseInt(siguiente-1);                                   //Coloca el indice de RED en la formula.
            }         
            y[n] = NUMERIC_SPACE;               //elimina el primer NOT encontrado 
          }
          break;
        }
      }
    }
  }
  y = deleteSpacesInArrayPascalStyle(y);        //elimina los espacios dejados
  return y;
} 


/**
 * Crea un fragmento de la expresion.
 * @param {*} begin - Posicion de primer caracter del fragmento.
 * @param {*} end - Posicion del ultimo caracter del fragmento.
 * @param {*} expression - Arreglo donde se debe buscar el fragmento.
 * @returns - Punto de salida del fragmento.
 */
function createFragmentOfExpression(begin, end, expression){
  var n=new Array();              //arreglo.longitud = 0
  orden_y = 0;
  for(var m = begin; m <= end; m++){            //copia el fragmento a una variable interna 
    n[m - begin + 1] = expression[m];           //y lo elimina de la formula
    expression[m] = NUMERIC_SPACE;              //lo elimina colocando espacios en su lugar
  }
  n[0] = m - begin;                             //Cantidad de elementos en la formula.
  if ((n[1] == NUMERIC_OPEN1) || (n[1] == NUMERIC_OPEN2) || (n[1] == NUMERIC_OPEN3)){
    nivel_x = stackOfChars.length + 2;
    n[1] = NUMERIC_SPACE;
  }else 
    nivel_x = 1;
  if ((n[n[0]] == NUMERIC_CLOSE1) || (n[n[0]] == NUMERIC_CLOSE2) || (n[n[0]] == NUMERIC_CLOSE3))
    n[n[0]] = NUMERIC_SPACE;
  n = createOperator(NUMERIC_NOT,n);            //crea operadores NOT y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_AND,n);            //crea los operadores AND y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_OR,n);             //crea los OR y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_XOR,n);            //crea los XOR y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_XNOR,n);           //crea los XNOR y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_NAN,n);            //crea los NAN y los enlaza
  if(err==1)return 0;
  n = createOperator(NUMERIC_NOR,n);            //crea los NOR y los enlaza
  if(err==1)return 0;
  if(n[0]==1)
    expression[begin] = n[1]; 
  else{                           //si no hay errores, el punto de salida
    alert(ms_err);
    err=1;
    return 0;
  };                              //del fragmento es colocado en la
  return expression;              //formula original y devuelto.
}


/**
 * Crea el circuito de la expresion completa.
 * @param {*} expression - Expresion que se debe representar.
 * @returns - Punto de salida del circuito.
 */
function createCircuit(expression){
  var agrup = 0;                      //inicia en falso la variable de agrupador encontrado
  while (expression[0] > 1){
    stackOfChars = [];                            //Inicia a cero la pila char
    stackOfIndex = [];                            //Inicia a cero la pila pos
    agrup = 0;                                    //Hace cero el contador de agrupadores
    expression = deleteSpacesInArrayPascalStyle(expression);        //elimina los espacios entre los caracteres 
    for(var n = 1; n <= expression[0]; n++){
      if ((expression[n] == NUMERIC_OPEN1) || (expression[n] == NUMERIC_OPEN2) || (expression[n] == NUMERIC_OPEN3)){
        stackOfChars.push(expression[n]);
        stackOfIndex.push(n);
      }else
        if ((expression[n] == NUMERIC_CLOSE1) || (expression[n] == NUMERIC_CLOSE2) || (expression[n] == NUMERIC_CLOSE3))
          if (! codeCoincidence(expression[n], stackOfChars.pop())){
            alert(ms_err);
            err=1;
            return 0;
          }else{
            expression = createFragmentOfExpression(stackOfIndex.pop(), n, expression);
            if(err==1)return 0;
            agrup++;
          }
    }
    if (stackOfChars.length > 0){
      alert(ms_err);
      err=1;
      return 0;
    }else
      if(agrup==0){
        expression = createFragmentOfExpression(1, expression[0], expression);
        if(err==1)return 0;
      }
  }
  return expression[1];               //Punto de salida del circuito.
}


/**
 * Muestra un elemento en la coordenada indicada.
 * @param {*} x - Coordenada X del elemento.
 * @param {*} y - Coordenada Y del elemento.
 * @param {*} element - Tipo de elemento qeu se debe crear.
 */
function createElement(x, y, element){
  if (max_conec < y)
    max_conec = y;                                  //Busca la posicion mas baja
  for (var n = 0; n < element.length; n++)          //Por cada fila y por
    for (var m = 0; m < element[n].length; m++)     //cada elemento de la 
      view[y + n][x + m] = element[n][m];           //fila, copia la imagen.
}



/**
 * Asigna una coordenada organizativa a la compuerta.
 * @param {*} x 
 */
function organizeGates(x){
  let columnas = new Array();               //contadores de cada una de las columnas
  for (let n = 0; n <= siguiente; n++) columnas[n] = 0; //Pone en cero los contadores de columnas
  for (let n = 1; n < siguiente; n++){
    if ((x[n][1] == 0) && (x[n][2] == 0)){
      x[n][3] = 0;           //Columna donde se ubica;
      x[n][4] = 0;   //Lugar dentro de la columna
    }else{
      if ((x[n][1] <= x[0][0]) && (x[n][2] <= x[0][0])){
        x[n][3] = 1;           //Columna donde se ubica;
        x[n][4] = columnas[1]; //Lugar dentro de la columna
        columnas[1]++; 
      }else{                             //Bloque #1
        if (x[x[n][1]][3] >= x[x[n][2]][3])
          x[n][3] = x[x[n][1]][3] + 1;      //x[n][1] apunta al mayor
        else
          x[n][3] = x[x[n][2]][3] + 1;      //x[n][2] apunta al mayor
        x[n][4] = columnas[x[n][3]];         
        columnas[x[n][3]]++;
      }
    }
  }
}



/**
 * Desplaza las compuertas de acuerdo con la posicion Y de sus antecesoras.
 * @param {*} x 
 * @returns 
 */
function displaceGatesByVerticalPredecessorGates(x){
  for (let n =x [0][0] + 1; n < siguiente; n++)               //Recorre todas las compuertas.
    if (((x[n][1] <= x[0][0]) && (x[n][2] > x[0][0])) || 
      ((x[n][1] > x[0][0]) && (x[n][2] <= x[0][0]))){         //Para los que apuntan a nodo y compuerta simultaneamente
      if (x[x[n][1]][3] >= x[x[n][2]][3])               //Debe situarse detras de la compuerta 
        x[n][4] = x[x[n][1]][4] + 1;                    //se situa detras de la compuerta 
      else{
        x[n][4] = x[x[n][2]][4] + 1;                    //se situa detras de la compuerta 
        let v1 = x[n][1];                               //Intercambia las conecciones para 
        x[n][1] = x[n][2];                              //que la entrada #1 apunte siempre a la compuerta.
        x[n][2] = v1
      }
    }else
      if ((x[n][1] > x[0][0]) && (x[n][2] > x[0][0])){    //IF1 //Para las compuertas que apuntan a dos compuertas simultaneamente
        if (x[n][1] != x[n][2]){                          //IF2 //Para las compuertas binarias (AND,OR,...)
          if (x[x[n][1]][4] < x[x[n][2]][4]){             //Debe situarse detras de la compuerta que esta mas arriba
            if (x[x[n][1]][4] + 1 >= x[x[n][2]][4])
              x[n][4] = x[x[n][2]][4] + 1;           
            else
              x[n][4] = x[x[n][1]][4] + 1;                  //apunta a la que esta mas arriba
          }else{
            if (x[x[n][2]][4] + 1 >= x[x[n][1]][4])
              x[n][4] = x[x[n][1]][4] + 1;           
            else
              x[n][4] = x[x[n][2]][4] + 1;                  // apunta a la que esta mas arriba
          }
        }else{                                              //Para las compuertas unarias (NOT)
          if(x[x[n][1]][4] < x[x[n][2]][4])                 //Esto se puede hacer utilizando solamente una coneccion
            x[n][4] = x[x[n][1]][4];                        // apunta al mayor
          else
            x[n][4] = x[x[n][2]][4];
        }                                                   // apunta al mayor
      }
  return x;
}


/**
 * Desplaza las compuertas para darle espacio a las lineas de coneccion horizontales.
 * @param {*} x 
 * @returns 
 */
function displaceGatesForHorizontalLines(x){
  var ss=0;
  for (let n = x[0][0] + 1; n < siguiente; n++)                   //Recorre todas las compuertas.
    if ((x[n][1] <= x[0][0]) && (x[n][2] <= x[0][0]))             //Para los del nivel #1
      for (let m = n - 1; m > x[0][0]; m--)                       //Recorre compuertas anteriores.
          if ((x[m][1] <= x[0][0]) && (x[m][2] <= x[0][0])){      //Para el pr�ximo que encuentre del nivel #1
            ss = ss + (n - m - 1) + con_colisiones;
            x[n][4] += ss;                             //Dezplaza la compuerta hacia abajo.
            break;
          }                                       //Fin del IF
  colisiones = false;
  return x;
}


/**
 * Ajusta Y de acuerdo con las compuertas que se le conectan desde atras.
 * @param {*} x 
 * @returns 
 */
function adjustByBackGatesConnected(x){
  for (let n = x[0][0] + 1; n < siguiente; n++){                              //Recorre todas las compuertas.
    if (((x[x[n][2]][1] <= x[0][0]) && (x[x[n][2]][2] <= x[0][0])) &&  //Para los que se conectan a los del nivel #1
      ((x[n][1] > x[0][0]) || (x[n][2] > x[0][0]))){
      while ((x[x[n][2]][4] <= x[n][4]) && (x[n][2] > x[0][0] + 1)){
            x[x[n][2]][4]++;                                    //Desplaza la compuerta
            for (let m = x[n][2]; m < siguiente; m++){                 //Recorre todas las compuertas que estan por debajo en el arreglo./
              if ((x[m][1] <= x[0][0]) && (x[m][2] <= x[0][0]))       //Para los del nivel #1
                x[m][4] += 2;
              }
            }
      }
    }
  return x;
}


/**
 * Desplaza las compuertas dejando el espacio para los nodos. Tiene en cuenta el tamaño de las compuertas.
 * @param {*} gatesNet - Array con la red de compuertas enlazadas.
 */
function displaceGatesByNodes(gatesNet){
  let x = gatesNet;
  for (let n = 1; n <= x[0][0]; n++) x[n][3] = n * 2;  
  for (let n = x[0][0] + 1; n < siguiente; n++){
    x[n][3] = x[n][3] * 5 + ((x[0][0] - 1) * 2);  
    x[n][4] = x[n][4] * 4 + 4;
  }
  return x;
}


/**
 * Asigna una coordenada organizativa a las compuertas.
 * @param {*} gatesNet - Array con la red de compuertas enlazadas.
 */
function showGates(gatesNet){
  let x = gatesNet;
  x = displaceGatesByNodes(x);
  x = displaceGatesForHorizontalLines(x);
  x = displaceGatesByVerticalPredecessorGates(x);
  x = adjustByBackGatesConnected(x);
  x = displaceGatesByVerticalPredecessorGates(x);
  //Hace la representacion en la matriz "vista" de las compuertas
  for(let n = 1; n < siguiente; n++){       //Representa compuerta en su coordenada
    x[n][3]++;                              //Sepera el grafico del borde
    x[n][4]++;                              //Sepera el grafico del borde
    if (x[n][0] == NUMERIC_AND) createElement(x[n][3], x[n][4], gr_and); else
    if (x[n][0] == NUMERIC_NAN) createElement(x[n][3], x[n][4], gr_nan); else
    if (x[n][0] == NUMERIC_OR)  createElement(x[n][3], x[n][4], gr_or);  else
    if (x[n][0] == NUMERIC_NOR) createElement(x[n][3], x[n][4], gr_nor); else
    if (x[n][0] == NUMERIC_XOR) createElement(x[n][3], x[n][4], gr_xor); else
    if (x[n][0] == NUMERIC_XNOR) createElement(x[n][3], x[n][4], gr_xnor); else
    if (x[n][0] == NUMERIC_NOT) createElement(x[n][3], x[n][4], gr_not); else
    if((x[n][1] == 0) && (x[n][2] == 0)){         //Representa nodo en su coordenada
      if ((x[n][0] == 'A') || (x[n][0] == 'a')) createElement(x[n][3], x[n][4], nodeA); else
      if ((x[n][0] == 'B') || (x[n][0] == 'b')) createElement(x[n][3], x[n][4], nodeB); else
      if ((x[n][0] == 'C') || (x[n][0] == 'c')) createElement(x[n][3], x[n][4], nodeC); else
      if ((x[n][0] == 'D') || (x[n][0] == 'd')) createElement(x[n][3], x[n][4], nodeD); else
      if ((x[n][0] == 'E') || (x[n][0] == 'e')) createElement(x[n][3], x[n][4], nodeE); else
      if ((x[n][0] == 'F') || (x[n][0] == 'f')) createElement(x[n][3], x[n][4], nodeF); else
      if ((x[n][0] == 'G') || (x[n][0] == 'g')) createElement(x[n][3], x[n][4], nodeG); else
      if ((x[n][0] == 'H') || (x[n][0] == 'h')) createElement(x[n][3], x[n][4], nodeH); 
    }
  }
}


/**
 * Muestra una imagen de un fragmento de linea.
 * @param {*} x1 - Coordenada X de la posicion de la imagen.
 * @param {*} y1 - Coordenada Y de la posicion de la imagen.
 * @param {*} simbolo - Imagen del fragmento de linea que se debe mostrar.
 */
function linea(x1, y1, simbolo){
  if ((simbolo == lin_hori) || (simbolo == lin_ver)){
    if (((simbolo == lin_hori)) && (view[y1][x1] == 'ver'))
      createElement(x1, y1, lin_cru);         //Transforma el elemento
    else  
    if ((simbolo == lin_ver) && (view[y1][x1] == 'hori'))
      createElement(x1, y1, lin_cru);         //Transforma el elemento
    else  
      createElement(x1, y1, simbolo);         //Muestra el elemento normal
    } else
  if (simbolo == lin_iz_ar){
    if (view[y1][x1] == 'hori'){
      //elemento(x1,y1,lin_con_ar);      //Transforma el elemento
    }else
      createElement(x1, y1, simbolo);         //Muestra el elemento normal
    } else
  if (simbolo == lin_iz_ab){
    if (view[y1][x1] == 'hori'){
      //elemento(x1,y1,lin_con_ab);      //Transforma el elemento
    }else
      createElement(x1, y1, simbolo);         //Muestra el elemento normal
    } else
  createElement(x1, y1, simbolo);         //Muestra el elemento normal
}


/**
 * Muestra una imagen de un fragmento de linea a nodo.
 * @param {*} x1 - Coordenada X de la posicion de la imagen.
 * @param {*} y1 - Coordenada Y de la posicion de la imagen.
 */
function lineNode(x1, y1, simbolo){
  if ((simbolo == lin_ver) && (view[y1][x1] == 'hori'))
    createElement(x1, y1, lin_cru);               //Transforma el elemento
  else  
    if ((simbolo == lin_ver) && (view[y1][x1] == 'der_ar'))
      createElement(x1, y1, lin_con_der);         //Transforma el elemento
    else
      createElement(x1, y1, simbolo);             //Muestra el elemento normal
}


/**
 * Enlaza con un nodo.
 */
function linkToNode(x1, x2, y1){
  while(x1 >= x2){                    //lo conecta directamente.
    linea(x1, y1, lin_hori); 
    x1--;
  } 
  linea(x1 + 1, y1, lin_der_ar);
}


/**
 * Enlaza con la salida de una compuerta.
 * @param {*} x1 - Coordenada X del punto 1
 * @param {*} y1 - Coordenada Y del punto 1
 * @param {*} x2 - Coordenada X del punto 2
 * @param {*} y2 - Coordenada Y del punto 2
 */
function linkToGate(x1, y1, x2, y2){
  if(y1 == y2){
    while(x1 >= x2){
        linea(x1, y1, lin_hori);
        x1--;
      }
  }else{                             //bloque #1
    linea(x1, y1, lin_der_ab);        //Dobla la linea hacia abajo
    y1++;                           //Incrementa coordenada Y
    while(y1 < y2){                   //Traza una linea vertical 
        linea(x1, y1, lin_ver);      //direccion abajo = 1
        y1++;};  
    linea(x1, y1, lin_iz_ar);         //Dobla la linea hacia adelante
    x1--;
    while(x1 >= x2){                  //Traza la otra mitad de la linea X
        linea(x1, y1, lin_hori);
        x1--;}
  }                          
}


/**
 * Busca el camino para trazar una conexion entre dso puntos.
 * @param {*} x1 - Coordenada X del punto 1
 * @param {*} y1 - Coordenada Y del punto 1
 * @param {*} x2 - Coordenada X del punto 2
 * @param {*} y2 - Coordenada Y del punto 2
 */
function probe(x1, y1, x2, y2){
let px = 0;
let py = y1;
for (px = x1; px > x2; px--)
  if((view[py][px] != 'ver') && (view[py][px] != 'f_nada')) break;
if (px > x2){                                              //Verifica si se puede trazar una conexion horizontal directamente
  if(view[y1][x1] == 'f_nada')
    linea(x1, y1, lin_der_ab);                            //Si no se puede conectar directamente la horizontal, se verifica si se puede doblar la conexion hacia abajo
  else                                                  //Si no se puede doblar hacia abajo, pide que se reinicie la representacion desplazando una unidad el nivel
	  colisiones = true;
  for (py = y1; py < 99; py++){                                //Repite la exploracion horizontal hasta que encuentra el hueco necesario para crear la linea
     for (px = x1; px > x2; px--)                              //Explora para ver si se puede trazar una horizontal
        if ((view[py][px] != 'ver') && (view[py][px] != 'f_nada')) break;  
     if (px <= x2){
       for (y1; y1 < py; y1++){
          if ((view[y1 + 1][x1] == 'f_nada') || (view[y1 + 1][x1] == 'hori'))
            linea(x1, y1 + 1, lin_ver);
          else
            colisiones=true;
          };
       linea(x1,y1,lin_iz_ar);              //Dobla la l�nea para trazar una horizontal hacia el frente
       break;};};
  for (x1 = x1 - 1; x1 >= x2; x1--)
    linea(x1,y1,lin_hori);                  //Traza la linea horizontal hacia el frente
  }
else
  for (x1; x1 >= x2; x1--) 
    linea(x1,y1,lin_hori);                  //Si la conexio�n horizontal puede hacerse directamente, la realiza
linea(x1+1,y1,lin_der_ar);                  //Terminaci�n de la l�nea horizontal
}


/**
 * Enlaza las compuertas con sus antecesores.
 * @param {*} x 
 */
function linkGates(x){
  var tmp=0;
  for(let n = x[0][0]+1; n < siguiente; n++){    //Enlaza el terminal superior de la compuerta
    if(x[n][0]!=NUMERIC_NOT){               //Para operadores binarios (AND,NAN,OR,NOR,XOR,XNOR)
      if(x[n][1] > x[0][0]){            //de binario a compuerta
        if((x[x[n][1]][4] > x[x[n][2]][4]) && (x[n][2] > x[0][0])){  //Invierte las conecciones si estas se cruzan mutuamente.
          tmp = x[n][1];
          x[n][1] = x[n][2];
          x[n][2] = tmp;
        }
        linkToGate(x[n][3] - 1, x[n][4], x[x[n][1]][3] + 4, x[x[n][1]][4] + 1); 
      }else                           //de binario a nodo
        linkToNode(x[n][3]-1, x[x[n][1]][3], x[n][4]); 
    }else{                            //Para operadores unarios (NOT)
      if(x[n][1] > x[0][0])            //de unario a compuerta
        linkToGate(x[n][3]-1, x[n][4] + 1, x[x[n][1]][3] + 4, x[x[n][1]][4] + 1);  
      else                           //de unario a nodo
        linkToNode(x[n][3]-1,x[x[n][1]][3],x[n][4]+1);
    }
  }
  for (let n = x[0][0] + 1; n < siguiente; n++)      //Enlaza el terminal inferior de la compuerta
    if (x[n][0] != NUMERIC_NOT){               //Para operadores binarios (AND,NAN,OR,NOR,XOR,XNOR)
      if (x[n][2] > x[0][0])                   //de binario a compuerta
        linkToGate(x[n][3] - 1, x[n][4] + 2, x[x[n][2]][3] + 4, x[x[n][2]][4] + 1); 
      else{                                 //de binario a nodo
        if ((x[n][1]<=x[0][0])&&(x[n][2]<=x[0][0]))
          linkToNode(x[n][3]-1, x[x[n][2]][3], x[n][4]+2); 
        else
          probe(x[n][3]-1, x[n][4]+2, x[x[n][2]][3], x[n][4]+2); 
      }
    }
  if (x[0][0] > 1)
    createElement(x[siguiente - 1][3] + 4, x[siguiente - 1][4] + 1, nodeEnd);
  else
    createElement(x[siguiente - 1][3] + 4, x[siguiente - 1][4], nodeEnd);

  //Enlaza los nodos con las terminales de las compuertas
  let sc = 0;
  for (let n = 1; n <= x[0][0]; n++){
    sc = x[n][5];
    for (var ny = x[n][4] + 3; ny < 99; ny++){
      if (view[ny][x[n][3]] == 'der_ar')sc--;      
      if (sc == 0) break;
    }
    for(let my = x[n][4] + 3; my < ny; my++)
    lineNode(x[n][3], my, lin_ver);
  }
}


/**
 * Inicia la tabla con un ancho y altura especificos.
 */
function initView(){
  vista_ancho = 100;
  vista_altura = 100;
  for(let n = 0; n <= vista_altura; n++) 
    view[n] = new Array();
  for(let n = 0; n <= vista_altura; n++)
    for(let m = 0; m <= vista_ancho; m++)
      view[n][m] = 'f_nada';
}


/**
 * Delimita el chncho y altura.
 * @param {*} gatesNet - Red de compuertas enlazadas.
 */
function delimit(gatesNet){
  vista_ancho = gatesNet[siguiente-1][3]+10;   
  vista_altura = 0;
  for (let n = 1; n < siguiente; n++)
    if (gatesNet[n][4] > vista_altura)
      vista_altura = gatesNet[n][4];
  vista_altura += 5;
  if (vista_altura < max_conec + 2)
    vista_altura = max_conec + 2;  
}


/**
 * Crea la tabla HTML que muestra las imagenes que conforman el circuito.
 * @param {*} view - Contiene los datos que conforman el circuito.
 * @param {*} width - Ancho de la vista.
 * @param {*} height - Altura de la vista.
 */
function createTable(view, width, height){
	const styleRow = 'border:1px; border-style:solid border-color:black;display:table-row;';
	const styleCell = 'border:0px;display:table-cell;padding:0px;margin:0px;';  
	const styleImage = 'margin:0px;display:grid;';  
	let v2='';
  v1 = "";
	view[height-1][100] = 'f_nada';
	view[height][100] = 'f_nada';
	for (let n = 0; n < height; n++){
		if (view[n][100] != 'false'){
			v2 = '<div id="o1" style="'+styleRow+'">';
			for(let m = 0; m < width; m++){
				v2 += '<div style="'+styleCell+'"><img src='+imagesSelector[view[n][m]]+' style="'+styleImage+'"></div>';
			}
			v1 += v2 + '</div>';
		}
	}
}


/**
 * Para mejorar la vista del grafico.
 */
function optimize(){
  optimizaciones = 0;
  for (var j = 6; j <= vista_altura; j++){
    for (var i = 0; i <= 100; i++)
      if ((view[j][i] != 'f_nada') && (view[j][i] != 'ver')) break;	  
    if (i >= 100){
      view[j][100] = 'false';	  
      optimizaciones++;
    }
  }
}


/**
 * Construye la vista del circuito a partir de la RED construida por la formula.
 * @param {*} div - ID del elemento HTML div donde se debe construir el grafico.
 */
function constructCircuitView(div){   //Abre una ventana
  max_conec=0;                           //Pone a cero
  colisiones=false                       //No ha ocurrido colisi�n
  con_colisiones=0;                      //Pone a cero el contador de colisiones
  for (let k = 1; k <= 100; k++){
    organizeGates(gatesNet);
    initView();                        //Prepara la tabla_vista
    showGates(gatesNet);
    linkGates(gatesNet);
    if (colisiones == false) break;
    con_colisiones++;
  }
  delimit(gatesNet);
  optimize();                                       //optimiza la vista
  if(err==1)return 0;
  createTable(view, vista_ancho, vista_altura);    //Crea la tabla
  vista_ancho = vista_ancho*7+55;
  vista_altura = (vista_altura - optimizaciones)*7+55;
  if(vista_ancho>750) vista_ancho=750;
  if(vista_altura>550) vista_altura=550;
  document.getElementById(div).innerHTML = v1;
}

/**
 * Convierte un array en array estilo Pascal String.
 * @param {*} inputArray - Expresion en array simple.
 * @returns - Expresion en array estilo Pascal String.
 */
function toPascalArray(inputArray){
  let result = inputArray;
  result.unshift(inputArray.length);
  console.log(result);
  return result;
}


//---------------------------------------------------
export function genera_circuito(expressionInput, div){
  err = checkErrorsInGatesNotation(expressionInput);
  if (err==1) return 0;
  let expression = stringToPascalString(gatesSymbolToInternalCode(expressionInput).replaceAll(" ", ""));
  let inputVariables= toPascalArray(searchInputVars(expression));         //Lista las variables utilizadas
  expression = internalCodeToNumericalCode(expression);                   //Sustituye operadores por "numeros".
  expression = replaceVarsWithOrdinals(expression, inputVariables);       //Sustituye variables por su ordinal en la lista.
  siguiente = createNodes(inputVariables);                                //Crea los nodos en la red.
  createCircuit(expression);
  if(err==1)return 0;
  constructCircuitView(div);
}



//PROBADOS OK conecciones
//  (((A*B)+(A+D))*(B*C))*(A#C+D*A)           OK
//  (A and B)xor not(B or C)                  OK
//  (((A*B)+(A+D))*(B*C))*(A+C)+(A*B*C)+(B*C) OK
//  (A*B*C+B*C+A)+(A*B*C)+(A*B*C+B*C+A)       OK
//  (A*B*C)+(A*B*C*D*E)+(A*B*C*D*E)           OK
//  A+(A#B#C)#((B#A)+D)                       OK
//  (A*B*C)+(A*B*C*D*E)+(F*G*H*D*E)           OK
//  A*B+(H#D)                                 OK
//  A*B+(H+D)                                 OK
//  A*B+A*B+(H+D)                             OK
//  A+(A#B#C)#-((A*B+-(H#D))+-D)              OK
//  A*B+(H+D)+A*B                             OK
//  A*B+(H+D)+A*B+A*B+(H+D)                   OK
//  A*B+(H+D)+A*B+A*B+A*B+A*B+(H+D)           OK
//  (H+D)+A*B*A*B*A+B+A+B+(H+D)+(H+D)         OK
//  A+B+A+(H+D)+(H+D)+A+B+A+B+(H+D)+(H+D)     OK
//  A+B+A+(H+D)+(H+D)*A+B+A+B+(H+D)+(H+D)     OK
//  A+(A#B#C)#-((A*B+-(A+(A#B#C)#((B#A)+D)))+-D)                          OK
//  (((A*B)+(A+D))*(A+(A#B#C)#-((A*B+-(H#D))+-D)))*(A#C+D*A)+(F*G*H*D*E)  OK
//  (((A*B)+(A+D))*(A+(A#B#C)#-((A*B+-(H#D))+-D)))*(A#C+D*A)+(F*G*H*D*E) +(A#B#C)#-((A*B+-(A+(A#B#C)#((B#A)+D)))+-D)  OK

//  A or ( A xor B xor C ) xor not ( ( A and B or not ( H xor D ) ) or not D )  OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G    OK
//  A and B nor D or A and B nor D or A and B nor D                             OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G   OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G    OK
// (((A and B)or(AorD)) and (B and C)) and (A xor C or D and A)    OK
// A or ( H xor (A or ( E xor F xor G ) xor not ( ( A and B or not ( H xor D ) ) or not D )) xor C ) xor not ( ( A and B or not ( H xor D ) ) or not D ) OK