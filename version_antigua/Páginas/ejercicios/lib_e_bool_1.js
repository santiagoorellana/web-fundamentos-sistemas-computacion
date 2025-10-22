/* 
Nombre=lib_e_bool_1.js
Autor=Santiago Orellana Pérez 
Fecha=10/02/2010
*/

//*****************************************************
//VARIABLES

var respuesta=new Array();  //Respuestas de las preguntas
    respuesta[0]=1;         //Tabla 1
    respuesta[1]=5;         //Tabla 2
    respuesta[2]=3;         //Tabla 3
    respuesta[3]=6;         //Tabla 4
    respuesta[4]=4;         //Tabla 5
    respuesta[5]=7;         //Tabla 6
           error=0;
       correctos=0;
	
//*****************************************************
//FUNCIONES

//------------------------------------------------------
function evaluar(){
error=0;
correctos=0;
for(n=1;n<=6;n++)         //Evalúa las respuestas una a una
   if(ass[n-1].selectedIndex!=0)
     if(ass[n-1].selectedIndex==respuesta[n-1]){
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
      window.location.href='../__b_teoría_representación.html';
    };  
  };  
};


//------------------------------------------------------
function carga(){
ass=document.getElementsByName('ss');
for(n=1;n<=6;n++)ass[n-1].selectedIndex=0;
};




