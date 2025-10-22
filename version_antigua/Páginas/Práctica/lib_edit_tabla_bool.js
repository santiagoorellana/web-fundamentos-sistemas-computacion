/* 
Nombre=lib_tabla_bool.js
Autor=Santiago Orellana Pérez 
Fecha=23/12/2009
*/

//*******VARIABLES CONSTANTES*********************
var  o_and='*'; //Símbolo para el operador AND
      o_or='+'; //Símbolo para el operador OR
     o_not='-'; //Símbolo para el operador NOT
    lineas=0;   //Cantidad de líneas de la tabla. 
       FDN=0;
       FCN=1;
 num_var_usadas=0;  //Cantidad de variables usadas.

//*******FUNCIONES********************************
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
//Quita los espacios intermedios.
//X=Arreglo entrante
//retorno=Arreglo procesado

function borra_espacio(x){
var y='';                                       
for(var n=1;n<=x[0];n++)if(x[n]!=' ')y=y+x[n];
return string_to_array(y)
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
//Le asigna valores booleanos a las variables encontradas.
//X=Cadena de entrada 
//Y=Máscara de asignación de valores a las variables.
//Z=Arreglo con las variables encontradas.

function asig_val(x,y,z){
var v=string_to_array(x);
for(var n=1;n<=v[0];n++)
   if(((v[n]<='Z')&&(v[n]>='A'))||((v[n]<='z')&&(v[n]>='a')))
     for(var m=1;m<=z[0];m++)
        if(z[m]==v[n]){
          if((y &(1<<(z[0]-m)))==0)v[n]='0'; else v[n]='1';
          break;};
return v;
};

//---------------------------------------------------------
//Devuelve el producto estandar PE de una evaluación.
//x=resultado de la fórmula para la combinación dada en y. Aquí se devuelve el PE (producto estandar)
//Y=contiene los bits correspondientes a cada variable
//z=contiene la cantidad de variables

function pe(x,y,z){
var v1=1 << z;
    v2=2;
    v3=1;
    v4=new Array();
chr=new Array(8,'A','B','C','D','E','F','G','H');
if(x==1){
   v4[1]='(';
   while(z!=0){
        v1=v1 >>> 1;
        if((y & v1)!=0){
           v4[v2]=chr[v3];
           v4[v2+1]=' ';
           v3++;
           v2+=2; //v2+=2;
           z--}
        else{
           v4[v2]=chr[v3];
           v4[v2+1]="'";
           v4[v2+2]=' ';
           v3++;
           v2+=3; //v2+=3;
           z--};
         v4[0]=v2-1;
         };
   v4[v4[0]]=')';
   }
else v4[0]=0;
v4=array_to_string(borra_espacio(v4));
return v4;
};


//---------------------------------------------------------
//Devuelve la suma estandar SE de una evaluación.
//x=resultado de la fórmula para la combinación dada en y. Aquí se devuelve el PE (producto estandar)
//Y=contiene los bits correspondientes a cada variable
//z=contiene la cantidad de variables

function se(x,y,z){
var v1=1 << z;
    v2=2;
    v3=1;
    v4=new Array();
chr=new Array(8,'A','B','C','D','E','F','G','H');
if(x==0){
   v4[1]='(';
   while(z!=0){
        v1=v1 >>> 1;
        if((y & v1)==0){
           v4[v2]=chr[v3];
           v4[v2+1]=o_or;
           v3++;
           v2+=2;
           z--}
        else{
           v4[v2]=chr[v3];
           v4[v2+1]="'";
           v4[v2+2]=o_or;
           v3++;
           v2+=3;
           z--};
         v4[0]=v2-1;
         };
   v4[v4[0]]=')';
   }
else v4[0]=0;
v4=array_to_string(v4);
return v4;
};

//---------------------------------------------------------
function mostrar_lineas(){ 
chr=new Array(8,'A','B','C','D','E','F','G','H');
num_var_usadas=document.getElementById("s1").selectedIndex+1;  //Aquí se cambia la cantidad de variables
if(num_var_usadas>5)
  if(confirm("El procesamiento de sus datos puede tardar unos minutos.")==false){
    document.getElementById("s1").selectedIndex=0;
    mostrar_lineas();
    return 0;
    };
lineas=Math.pow(2,num_var_usadas);
document.getElementById("o1").innerHTML='';
if(lineas!=1){
  var usadas='';
  chr[0]=num_var_usadas;                    //Cantidad de variables utilizadas.
  for(m=1;m<=chr[0];m++)usadas+='<FONT size="2" face="Tahoma">&nbsp;'+chr[m]+'</FONT>'; //Copia del arreglo la cantidad de variables especificada insertando espacios intermedios.
  document.getElementById("o1").innerHTML+='<DIV name="o2" id="o2">&nbsp;&nbsp;'+usadas+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resultado</DIV>';
  for(n=0;n<lineas;n++){
     bin='';
     chr[0]=num_var_usadas;                      //Cantidad de variables utilizadas.
     for(m=1;m<=chr[0];m++)bin+='&nbsp;'+chr[m]; //Copia del arreglo la cantidad de variables especificada insertando espacios intermedios.
     bin=asig_val(bin,lineas-n-1,chr);           //Le asigna valor numérico a las variables devolviendo el resultado en un arreglo.
     bin=array_to_string(bin);                   //Convierte el arreglo devuelto, en una cadena.
     document.getElementById("o1").innerHTML+='<DIV name="o2" id="o2">&nbsp;&nbsp;'+bin+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'<INPUT type="checkbox" name="c1" id="c1"></DIV>';
     };  //Fin del bucle
  };     //Fin del IF
};       //Fin de función 


//---------------------------------------------------------
//Devuelve la Forma Disyuntiva Normal o Forma Conjuntiva Normal

function canon(x){
var r='';
lin=document.getElementsByName("c1");
if(x==FDN){
  for(var n=0;n<lineas;n++){
     if(lin[n].checked==true){
       if(r=='')r=pe(1,lineas-1-n,num_var_usadas);else 
         r+='+'+pe(1,lineas-1-n,num_var_usadas);
       }
     }
  }
else
if(x==FCN){
  for(var n=0;n<lineas;n++){
     if(lin[n].checked==false){
       if(r=='')r=se(0,lineas-1-n,num_var_usadas);else 
         r+=se(0,lineas-1-n,num_var_usadas);
         }
     }
  }
return r;
};


//---------------------------------------------------------
//Muestra la función en forma canónica 
//de la tabla introducida por el usuario.

function calcula_funcion(){
var v1='';
    tb=0;
if(document.getElementById("r1").checked)v1=canon(FDN);else v1=canon(FCN);
if(v1==''){
  alert('En este caso particular, no se puede utilizar el método matemático seleccionado.');
  return 0;};
tb=open("area_bool.htm","","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620px,height=500px");
if(navigator.appName=="Netscape"){                        //Si Mosilla/Netscape, ejecuta esto.
  var tz=open("nada.htm","","width=1px,height=1px");      //Ventana auxiliar.
  tz.close(); };                                          //lka cierra luego.
tb.document.getElementById("text_tabla").value='La tabla construida por usted, puede ser respresentada \npor la expresión booleana siguiente: \n\n'+v1;
};



//-------------------------------------------------------------
function carga(){ };

