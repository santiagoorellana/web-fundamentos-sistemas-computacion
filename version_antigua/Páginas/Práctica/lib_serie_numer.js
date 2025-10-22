/* 
Nombre=lib_serie_numer.js
Autor=Santiago Orellana Pérez 
Fecha=24/12/2009
*/
//*****************************************************
//VARIABLES 

var 
 pila_char=new Array();    //Guarda los caracteres.
   sp_char=0;              //Puntero al último caractere introducido.
       err=0;              //Vale uno cuando ocurre un error.

//*****************************************************
//FUNCIONES

function push(x){
if(sp_char<256){
  sp_char++; 
  pila_char[sp_char]=x;}
else {
  alert('Error interno');
  err=1;};  
};

//---------------------------------------------------------
function pop(){
var x=pila_char[sp_char];
if(sp_char!=0)
  sp_char--;
else{
  alert('Error interno');
  err=1;};
return x;
};

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
function filtro_hexadecimal(x){
x=string_to_array(x);
for(n=1;n<=x[0];n++)
   if(((x[n]>='0')&&(x[n]<='9'))||((x[n]>='A')&&(x[n]<='F'))||((x[n]>='a')&&(x[n]<='f')))
     x[n]=x[n]; 
   else{
     alert('ERROR\nLos números hexadecimales se componen con los \ncaracteres 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E y F.');
     return 1;};
if(x[0]>8){
  alert('ERROR\nSolamente se permiten números hexadecimales con menos de 9 dígitos.');
  return 1;};
return 0;
};

//---------------------------------------------------------
function filtro_decimal(x){
x=string_to_array(x);
for(n=1;n<=x[0];n++)
   if((x[n]>='0')&&(x[n]<='9'))
     x[n]=x[n]; 
   else{
     alert('ERROR\nLos números decimales se componen con los  \ncaracteres 0,1,2,3,4,5,6,7,8 y 9.');
     return 1;};
if(parseInt(array_to_string(x))>4294967295){
  alert('ERROR\nSolamente se permiten números decimales menores o iguales que 4294967295.');
  return 1;};
return 0;
};

//---------------------------------------------------------
function filtro_octal(x){
x=string_to_array(x);
for(n=1;n<=x[0];n++)
   if((x[n]>='0')&&(x[n]<='7'))
     x[n]=x[n]; 
   else{
     alert('ERROR\nLos números octales se componen con los  \ncaracteres 0,1,2,3,4,5,6 y 7.');
     return 1;};
if((x[0]>11)||((x[0]==11)&&(x[1]>'3'))){
  alert('ERROR\nSolamente se permiten números octales menores o iguales que 37777777777.');
  return 1;};
return 0;
};



//---------------------------------------------------------
function filtro_binario(x){
x=string_to_array(x);
for(n=1;n<=x[0];n++)
   if((x[n]=='0')||(x[n]=='1'))
     x[n]=x[n]; 
   else{
     alert('ERROR\nLos números binarios se componen con los \ncaracteres 0 y 1.');
     return 1;};
if(x[0]>32){
  alert('ERROR\nSolo se permiten números binarios con menos de 33 dígitos.');
  return 1;};
return 0;
};



//---------------------------------------------------------
function decimal_a_binario(x){
x=quita_ceros(x);
var r1='';
    r2='';
if(filtro_decimal(x)==1){
  err=1;
  return 0;
  };
x=array_to_string(borra_espacio(string_to_array(x)));
x=parseInt(x);
push('$');
while(x>0){
          if(x%2>0)push('1'); else push('0');
          x=parseInt(x/2);
          };
while(true){
           r2=pop();
           if(r2=='$')return r1; else r1+=r2;
           };
};


//---------------------------------------------------------
function binario_a_decimal(x){
x=quita_ceros(x);
if(filtro_binario(x)==1){
  err=1;
  return 0;
  };
x=borra_espacio(string_to_array(x));
var n=0;
    r1=0;
for(n=x[0];n>0;n--){
   r1+=parseInt(x[n])*Math.pow(2,x[0]-n);
   };
return r1;
};


//---------------------------------------------------------
function hexadecimal_a_binario(x){
x=quita_ceros(x);
if(filtro_hexadecimal(x)==1){
  err=1;
  return 0;
  };
x=borra_espacio(string_to_array(x));
var n=0;
    r1='';
for(n=1;n<=x[0];n++){
   if(x[n]=='0')r1+='0000'; else
   if(x[n]=='1')r1+='0001'; else
   if(x[n]=='2')r1+='0010'; else
   if(x[n]=='3')r1+='0011'; else
   if(x[n]=='4')r1+='0100'; else
   if(x[n]=='5')r1+='0101'; else
   if(x[n]=='6')r1+='0110'; else
   if(x[n]=='7')r1+='0111'; else
   if(x[n]=='8')r1+='1000'; else
   if(x[n]=='9')r1+='1001'; else
   if((x[n]=='a')||(x[n]=='A'))r1+='1010'; else
   if((x[n]=='b')||(x[n]=='B'))r1+='1011'; else
   if((x[n]=='c')||(x[n]=='C'))r1+='1100'; else
   if((x[n]=='d')||(x[n]=='D'))r1+='1101'; else
   if((x[n]=='e')||(x[n]=='E'))r1+='1110'; else
   if((x[n]=='f')||(x[n]=='F'))r1+='1111';};
return r1;
};


//---------------------------------------------------------
function agrupar_en(x,y){
var m=0;
   r1='';
   r2='';
if(y[0]%x>0)m=x-(y[0]%x); else m=0;
push('$');
for(var n=y[0];n>0;n--)push(y[n]);
while(m!=0){
     push('0')
     m--;};
};


//---------------------------------------------------------
function binario_a_hexadecimal(x){
x=quita_ceros(x);
var r1='';
    r2='';
    r3='';
     m=0;
if(filtro_binario(x)==1){
  err=1;
  return 0;
  };
x=agrupar_en(4,borra_espacio(string_to_array(x)));
while(m==0){
     for(var n=1;n<=4;n++){
        r3=pop();
        if(r3=='$'){
          m=1;
          break;}
        else 
          r2+=r3;
        };
     if(r2=='0000')r1+='0'; else
     if(r2=='0001')r1+='1'; else
     if(r2=='0010')r1+='2'; else
     if(r2=='0011')r1+='3'; else
     if(r2=='0100')r1+='4'; else
     if(r2=='0101')r1+='5'; else
     if(r2=='0110')r1+='6'; else
     if(r2=='0111')r1+='7'; else
     if(r2=='1000')r1+='8'; else
     if(r2=='1001')r1+='9'; else
     if(r2=='1010')r1+='A'; else
     if(r2=='1011')r1+='B'; else
     if(r2=='1100')r1+='C'; else
     if(r2=='1101')r1+='D'; else
     if(r2=='1110')r1+='E'; else
     if(r2=='1111')r1+='F';
     r2='';};
return r1;
};


//---------------------------------------------------------
function octal_a_binario(x){
x=quita_ceros(x);
if(filtro_octal(x)==1){
  err=1;
  return 0;
  };
x=borra_espacio(string_to_array(x));
var n=0;
    r1='';
for(n=1;n<=x[0];n++){
   if(x[n]=='0')r1+='000'; else
   if(x[n]=='1')r1+='001'; else
   if(x[n]=='2')r1+='010'; else
   if(x[n]=='3')r1+='011'; else
   if(x[n]=='4')r1+='100'; else
   if(x[n]=='5')r1+='101'; else
   if(x[n]=='6')r1+='110'; else
   if(x[n]=='7')r1+='111';};
return r1;
};


//---------------------------------------------------------
function binario_a_octal(x){
var r1='';
    r2='';
    r3='';
     m=0;
x=quita_ceros(x);
if(filtro_binario(x)==1){
  err=1;
  return 0;
  };
x=agrupar_en(3,borra_espacio(string_to_array(x)));
while(m==0){
     for(var n=1;n<=3;n++){
        r3=pop();
        if(r3=='$'){
          m=1;
          break;}
        else 
          r2+=r3;
        };
     if(r2=='000')r1+='0'; else
     if(r2=='001')r1+='1'; else
     if(r2=='010')r1+='2'; else
     if(r2=='011')r1+='3'; else
     if(r2=='100')r1+='4'; else
     if(r2=='101')r1+='5'; else
     if(r2=='110')r1+='6'; else
     if(r2=='111')r1+='7';
     r2='';};
return r1;
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
   if(x[n]=='0')x[n]=' '; else break;
r1=array_to_string(borra_espacio(x));
if(r1=='')return '0'; else return r1;
};


//---------------------------------------------------------
function convertir(x){
var z=decimal_a_binario(x+' ');
if(document.getElementById('rb3').checked==true)
  r1=z; else
if(document.getElementById('rb4').checked==true)
  r1=binario_a_octal(z); else
if(document.getElementById('rb6').checked==true)
  r1=binario_a_hexadecimal(z); 
if(r1=='')return '0'; else return r1;
};



//---------------------------------------------------------
function generar_serie(x,y){
var n=0;
    r='';
if(filtro_decimal(x)==1)return 0;
if(filtro_decimal(y)==1)return 0;
x=parseInt(x);
y=parseInt(y);
if(x==y)r=convertir(x); else
if((x<y)&&(y-x<=1024)){
  r+='El rango es creciente desde '+x+'(decimal) hasta '+y+'(decimal).\n\n';
  for(n=x;n<=y;n++)r+=convertir(n)+'\n';
  } else
if((x>y)&&(x-y<=1024)){
  r+='El rango es decreciente desde '+x+'(decimal) hasta '+y+'(decimal).\n\n';
  for(n=x;n>=y;n--)r+=convertir(n)+'\n';
  }
else
  {
  alert('ERROR\nNo se permiten longitudes de rangos mayores que 1024'); 
  return 0;
  };
var tb=open("area_bool.htm","","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620px,height=500px");
if(navigator.appName=="Netscape"){                        //Si Mosilla/Netscape, ejecuta esto.
  var tz=open("nada.htm","","width=1px,height=1px");      //Ventana auxiliar.
  tz.close(); };                                          //lka cierra luego.
tb.document.getElementById("text_tabla").value=r;   
};


//---------------------------------------------------------
function tecla(x){
var y;
if(x=='=')
  generar_serie(document.getElementById("p1").value,document.getElementById("p2").value); 
else
if(document.getElementById("rb1").checked){
  if((x>='0')&&(x<='9'))document.getElementById("p1").value+=x; else
  if(x=='L')document.getElementById("p1").value=''; else
  if(x=='R'){
    y=document.getElementById("p1").value;
    document.getElementById("p1").value=y.substring(0,y.length-1);
    }; 
  }
else
if(document.getElementById("rb2").checked){
  if((x>='0')&&(x<='9'))document.getElementById("p2").value+=x; else
  if(x=='L')document.getElementById("p2").value=''; else
  if(x=='R'){
    y=document.getElementById("p2").value;
    document.getElementById("p2").value=y.substring(0,y.length-1);
    };
  };
};


//------------------------------------------
function foco(x){
if(x==1)document.getElementById('rb1').checked=true; else
if(x==2)document.getElementById('rb2').checked=true; else
if(x==5)document.getElementById('p1').focus(); else
if(x==6)document.getElementById('p2').focus(); 
};


//------------------------------------------
function carga(){
document.getElementById('p1').focus();
document.getElementById('rb1').checked=true;
};


//-------------------------------------------------------------
function carga(){ };





