/* 
Nombre=lib_e_numer_1.js
Autor=Santiago Orellana Pérez 
Fecha=4/02/2010
*/

//*****************************************************
//VARIABLES 
var 
            SI=2;
            NO=1;
    respuesta=new Array();
 respuesta[0]=10;      //Cantidad de respuestas
 respuesta[1]=NO;      //Respuestas para cada una de las preguntas
 respuesta[2]=SI;
 respuesta[3]=SI;
 respuesta[4]=SI;
 respuesta[5]=NO;
 respuesta[6]=SI;
 respuesta[7]=SI;
 respuesta[8]=SI;
 respuesta[9]=SI;
respuesta[10]=NO;
        error=0;
	correctos=0;


//*****************************************************
//FUNCIONES

//------------------------------------------------------
function evaluar(){
	error=0;
correctos=0;
var ass=document.getElementsByName('ss');
for(n=1;n<=respuesta[0];n++){               //Evalúa las respuestas una a una
   if(ass[n-1].selectedIndex!=0){
     if(ass[n-1].selectedIndex==respuesta[n]){
       document.getElementById('o'+n).innerHTML='<FONT color="#000066"><B>Correcto</B></FONT>';  //Respuesta correcta
	   correctos++;  }                                                                          //Contador de correctos	   
     else{
       document.getElementById('o'+n).innerHTML='<FONT color="#ff0000"><B>Error</B></FONT>';     //Respuesta incorrecta
	   error++; };                                                                               //Contador de errores
     };  //Fin del IF
   };    //Fin del FOR
feedback();
};       //Fin de función


//------------------------------------------------------
function feedback(){
if(error+correctos>0){
  if(error>=3){
    c1='Usted tiene dificultad en la realización de este ejercicio.';
    c2='Para acceder inmediatamente a los elementos teóricos necesarios';
    c4=', debe pulsar "Aceptar".';
    if(confirm(c1+'\n\n'+c2+c4)==true)
      window.location.href='../__s_teoría_sist_num_comput.html';
    };  
  };  
};


//------------------------------------------------------
function carga(){
var ass=document.getElementsByName('ss');
for(n=1;n<=respuesta[0];n++)ass[n-1].selectedIndex=0;
};




