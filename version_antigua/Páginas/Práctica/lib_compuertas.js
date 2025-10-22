/* 
Nombre=lib_emular_circuito.js
Autor=Santiago Orellana Pérez 
Fecha=5/01/2009
*/

//--------------------------------------------------------------------------------
function iniciar(){
ajustar('AND');
ajustar('NAN');
ajustar('OR');
ajustar('NOR');
ajustar('XOR');
ajustar('XNOR');
ajustar('NOT');
ajustar('YES');
};


function ajuste_entradas(x,y){
if(document.getElementById("c"+x).checked==true)    //Ajuste de la entrada B A
  document.getElementById("o"+x).innerHTML='1';  
else 
  document.getElementById("o"+x).innerHTML='0'; 
  
if(document.getElementById("c"+y).checked==true)    //Ajuste de la entrada B  
  document.getElementById("o"+y).innerHTML='1';  
else 
  document.getElementById("o"+y).innerHTML='0'; 
};

//--------------------------------------------------------------------------------
function ajustar(x){
if(x=='AND'){    // c1,c2,c3
  ajuste_entradas(1,2);
  if((document.getElementById("c1").checked==true)&&(document.getElementById("c2").checked==true)){
    document.getElementById("c3").checked=true;  
	document.getElementById("o3").innerHTML='1';}
  else{
    document.getElementById("c3").checked=false;
	document.getElementById("o3").innerHTML='0';}
  } else
if(x=='NAN'){    // c10,c11,c12
  ajuste_entradas(10,11);
  if((document.getElementById("c10").checked==true)&&(document.getElementById("c11").checked==true)){
    document.getElementById("c12").checked=false;  
	document.getElementById("o12").innerHTML='0';}
  else{
    document.getElementById("c12").checked=true;
	document.getElementById("o12").innerHTML='1';}
  } else
if(x=='OR'){     // c4,c5,c6
  ajuste_entradas(4,5);
  if((document.getElementById("c4").checked==true)||(document.getElementById("c5").checked==true)){
    document.getElementById("c6").checked=true;  
	document.getElementById("o6").innerHTML='1';}
  else{
    document.getElementById("c6").checked=false;
	document.getElementById("o6").innerHTML='0';}
  } else
if(x=='NOR'){    // c13,c14,c15
  ajuste_entradas(13,14);
  if((document.getElementById("c13").checked==true)||(document.getElementById("c14").checked==true)){
    document.getElementById("c15").checked=false;
	document.getElementById("o15").innerHTML='0';}
  else{
    document.getElementById("c15").checked=true;
	document.getElementById("o15").innerHTML='1';}
  } else
if(x=='XOR'){    // c7,c8,c9
  ajuste_entradas(7,8);
  if(document.getElementById("c7").checked==document.getElementById("c8").checked){
    document.getElementById("c9").checked=false;
	document.getElementById("o9").innerHTML='0';}
  else{
    document.getElementById("c9").checked=true;
	document.getElementById("o9").innerHTML='1';}
  } else
if(x=='XNOR'){   // c16,c17,c18
  ajuste_entradas(16,17);
  if(document.getElementById("c16").checked==document.getElementById("c17").checked){
    document.getElementById("c18").checked=true; 
	document.getElementById("o18").innerHTML='1';}
  else{
    document.getElementById("c18").checked=false;
	document.getElementById("o18").innerHTML='0';}
  } else
if(x=='NOT'){    // c19,c20
  ajuste_entradas(19,19);
  if(document.getElementById("c19").checked==true){
    document.getElementById("c20").checked=false;
	document.getElementById("o20").innerHTML='0';}
  else{
    document.getElementById("c20").checked=true;
	document.getElementById("o20").innerHTML='1';}
  } else
if(x=='YES'){    // c19,c20
  ajuste_entradas(21,21);
  document.getElementById("c22").checked=document.getElementById("c21").checked;
  document.getElementById("o22").innerHTML=document.getElementById("o21").innerHTML;
  };   
};


//--------------------------------------------------------------------------------
function carga(){
iniciar();
};