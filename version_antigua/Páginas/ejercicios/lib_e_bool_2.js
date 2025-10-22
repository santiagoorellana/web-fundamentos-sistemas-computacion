/* 
Nombre=lib_e_bool_2.js
Autor=Santiago Orellana Pérez 
Fecha=11/02/2010
*/

//*****************************************************
//VARIABLES
           error=0;
       correctos=0;
	
//*****************************************************
//FUNCIONES

//------------------------------------------------------
function evaluar(){
error=0;
correctos=0;
err='<FONT color="#ff0000"><B>Error</B></FONT>';
eok='<FONT color="#000066"><B>Correcto</B></FONT>';
if(document.getElementById('s1').selectedIndex!=0)
  if(document.getElementById('s1').selectedIndex==8){
    document.getElementById('o2').innerHTML=eok;
	correctos++; }
  else{
    document.getElementById('o2').innerHTML=err;
	error++; };	
if(document.getElementById('s2').selectedIndex!=0)
  if(document.getElementById('s2').selectedIndex==4){
    document.getElementById('o3').innerHTML=eok;
	correctos++; }	
  else{
    document.getElementById('o3').innerHTML=err; 
	error++; };		
feedback();
};


//------------------------------------------------------
function feedback(){
if(error+correctos>0){
  if(error>=2){
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
document.getElementById('s1').selectedIndex=0;
document.getElementById('s2').selectedIndex=0;
};




