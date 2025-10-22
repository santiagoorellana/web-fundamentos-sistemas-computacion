/* 
Nombre=lib_e_compuertas_3.js
Autor=Santiago Orellana Pérez 
Fecha=11/02/2010
*/

//*****************************************************
//VARIABLES 
var 
    respuesta=new Array();
 respuesta[0]=6;      //Cantidad de respuestas
 respuesta[1]=4;      //Respuestas para cada una de las preguntas
 respuesta[2]=2;
 respuesta[3]=6;
 respuesta[4]=5;
 respuesta[5]=1;
 respuesta[6]=3;
        error=0;
	correctos=0;


//*****************************************************
//FUNCIONES

//------------------------------------------------------
function evaluar(){
        error=0;
	correctos=0;
ass=document.getElementsByName('ss');
for(n=1;n<=respuesta[0];n++)          //Evalúa las respuestas una a una
   if(ass[n-1].selectedIndex!=0)
     if(ass[n-1].selectedIndex==respuesta[n]){
       document.getElementById('o'+n).innerHTML='<FONT color="#000066"><B>Correcto</B></FONT>';  //Respuesta correcta
	   correctos++;  }                                                                          //Contador de correctos	   
     else{
       document.getElementById('o'+n).innerHTML='<FONT color="#ff0000"><B>Error</B></FONT>';    //Respuesta incorrecta
	   error++; };                                                                              //Contador de errores
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
      window.location.href='../_c_teoría.html';
    };  
  };  
};



//------------------------------------------------------
function carga(){
ass=document.getElementsByName('ss');
for(n=1;n<=respuesta[0];n++)ass[n-1].selectedIndex=0;
};




