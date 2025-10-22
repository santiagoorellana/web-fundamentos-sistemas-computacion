/* 
Nombre=lib_e_numer_5.js
Autor=Santiago Orellana Pérez 
Fecha=6/02/2010
*/

//*****************************************************
//VARIABLES 
var 
    respuesta=new Array();
 respuesta[0]=10;        //Cantidad de respuestas
 respuesta[1]='101';      //Respuestas para cada una de las preguntas
 respuesta[2]='1010';
 respuesta[3]='1111';
 respuesta[4]='11010';
 respuesta[5]='11110';
 respuesta[6]='11111111';
 respuesta[7]='11111010';
 respuesta[8]='111111110101';
 respuesta[9]='1100101011111110';
respuesta[10]='1010101111001101';
        error=0;
	correctos=0;


//*****************************************************
//FUNCIONES

//---------------------------------------------------------
//Convierte de cadena a arreglo.
//x=cadena entrante
//retorno=arreglo con la cadena y su longitud

function string_to_array(x){
var y=new Array();
y[0]=x.length;
var z=0;
while(z<=x.length)y[z+1]=x.charAt(z++);
return y;
};

//---------------------------------------------------------
//x=Arreglo entrante
//retorno=Cadena de salida

function array_to_string(x){
var y='';
for(var n=1;n<=x[0];n++)y+=x[n];
return y;
};



//---------------------------------------------------------
//Quita los espacios intermedios.
//X=Arreglo entrante
//retorno=Arreglo procesado

function borra_espacio(x){
var y='';                                       
for(var n=1;n<=x[0];n++)if(x[n]!=' ')y=y+x[n];
return string_to_array(y)
};


//---------------------------------------------------------
//Quita los ceros a la izquierda

function quita_ceros(x){
var n=0;
x=string_to_array(x);
for(n=1;n<=x[0];n++)
   if((x[n]=='0')||(x[n]==' '))x[n]=' '; else break;
return array_to_string(borra_espacio(x));
};



//------------------------------------------------------
function ajustar(x){
return quita_ceros(x);
};


//------------------------------------------------------
function evaluar(){
error=0;
correctos=0;
var att=document.getElementsByName('tt');
for(n=1;n<=respuesta[0];n++)          //Evalúa las respuestas una a una
   if(ajustar(att[n-1].value)!=0)
     if(ajustar(att[n-1].value)==respuesta[n]){
       document.getElementById('o'+n).innerHTML='<FONT color="#000066"><B>Correcto</B></FONT>';  //Respuesta correcta
	   correctos++;  }                                                                         //Contador de correctos	   
     else{
       document.getElementById('o'+n).innerHTML='<FONT color="#ff0000"><B>Error</B></FONT>';     //Respuesta incorrecta
	   error++; };                                                                               //Contador de errores
feedback();
};



//------------------------------------------------------
function feedback(){
if(error+correctos>0){
  if(error>=3){
    c1='Usted tiene dificultad en la realización de este ejercicio.';
    c2='Para acceder inmediatamente a los elementos teóricos necesarios';
    c4=', debe pulsar "Aceptar".';
    if(confirm(c1+'\n\n'+c2+c4)==true)
      window.location.href='../__s_teoría_bin_hexa.html';
    };  
  };  
};


//------------------------------------------------------
function carga(){
att=document.getElementsByName('tt');
for(n=1;n<=respuesta[0];n++)att[n-1].value='';
};


//------------------------------------------------------
function ajustar_numer(x){
y=document.getElementById(x).value;
y=y.toUpperCase();
y=string_to_array(y);
document.getElementById(x).value=array_to_string(borra_espacio(y));
};


