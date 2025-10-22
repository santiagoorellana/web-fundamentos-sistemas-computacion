/* 
Nombre=lib_e_compuertas_1.js
Autor=Santiago Orellana Pérez 
Fecha=12/02/2010
*/

//*****************************************************
//VARIABLES 
var 
    respuesta=new Array();
 respuesta[0]=6;      //Cantidad de respuestas
 respuesta[1]=2;      //Respuestas para cada una de las preguntas
 respuesta[2]=1;
 respuesta[3]=4;
 respuesta[4]=3;
 respuesta[5]=5;
 respuesta[6]=6;

    puntero=new Array();
 puntero[0]=6;      //Cantidad de punteros
 puntero[1]=0;      //Primer puntero
 puntero[2]=0;
 puntero[3]=0;
 puntero[4]=0;
 puntero[5]=0;
 puntero[6]=0;

max_imagen=7;           //Cantidad de imágenes en el arreglo siguiente
    imagen=new Array(); //Arreglo de las imágenes
 imagen[0]='../../Imágenes/circuitos/com_0.gif';
 imagen[1]='../../Imágenes/circuitos/com_1.gif';
 imagen[2]='../../Imágenes/circuitos/com_2.gif';
 imagen[3]='../../Imágenes/circuitos/com_3.gif';
 imagen[4]='../../Imágenes/circuitos/com_4.gif';     
 imagen[5]='../../Imágenes/circuitos/com_5.gif';
 imagen[6]='../../Imágenes/circuitos/com_6.gif';
 imagen[7]='../../Imágenes/circuitos/com_7.gif';
        error=0;
	correctos=0;


//*****************************************************
//FUNCIONES

//------------------------------------------------------
function evaluar(){
        error=0;
	correctos=0;
for(n=1;n<=respuesta[0];n++)         //Evalúa las respuestas una a una
   if(puntero[n]!=0)
     if(puntero[n]==respuesta[n]){
       document.getElementById('o'+n).innerHTML='<FONT color="#000066"><B>Correcto</B></FONT>';  //Respuesta correcta
	   correctos++;  }                                                                         //Contador de correctos	   
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
aii=document.getElementsByName('ii');
for(n=1;n<=respuesta[0];n++){
   aii[n-1].setAttribute('src',imagen[0]);
   puntero[n]=0;
   };
};



//------------------------------------------------------
function cambiar(x){
aii=document.getElementsByName('ii');
if(puntero[x]<max_imagen){
  puntero[x]++;
  }
else{
  puntero[x]=0;
  };
aii[x-1].setAttribute('src',imagen[puntero[x]]);
};
