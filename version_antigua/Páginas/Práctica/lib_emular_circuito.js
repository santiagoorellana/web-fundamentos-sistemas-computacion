/* 
Nombre=lib_emular_circuito.js
Autor=Santiago Orellana Pérez 
Fecha=4/01/2010
*/
//*****************************************************
var //VARIABLES CONSTANTES
  o_and='*'; //Símbolo para el operador AND
   o_or='+'; //Símbolo para el operador OR
  o_xor='#'; //Símbolo para el operador XOR
  o_not='-'; //Símbolo para el operador NOT
  o_nan='&'; //Símbolo para el operador NAN
  o_nor='!'; //Símbolo para el operador NOR
 o_xnor='$'; //Símbolo para el operador XNOR
max_form=512; //Longitud máxima de la fórmula introducida.
max_var =28;  //Cantidad máxima de variables que se pueden utilizar 
              //en la fórmula introducida por el usuario.
   err=0;     //Vale uno cuando ocurre un error.

//*****************************************************
var //VARIABLES 
 pila_char=new Array();    //Guarda los caracteres de los agrupadores.
   sp_char=0;              //Puntero al último caractere introducido.
  pila_pos=new Array();    //Guarda posición del caracter.
    sp_pos=0;              //Puntero al último número introducido.
v_encontradas=0;
 expresion=new Array();
//*****************************************************
//FUNCIONES

//---------------------------------------------------------
//Señala al usuario la ocurrencia de un error.
//X=Código del error
//Y=Posición del error, en otro caso y=1 

function error(x){
if(x==1)alert("ERROR\nPuede que falte un operando.")
else alert("ERROR\nSintaxis incorrecta.");
err=1;
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
//Codifica en operadores a los símbolos
//X=Arreglo entrante
//retorno=El arreglo procesado

function de_cod_a_cadena(x){
var n=1;
    r='';
while(n<=x[0]){
     if(x[n]==o_and)r+=' and ';   else
     if(x[n]==o_nan)r+=' nan ';   else
     if(x[n]==o_or)r+=' or ';     else
     if(x[n]==o_nor)r+=' nor ';   else
     if(x[n]==o_xor)r+=' xor ';   else
     if(x[n]==o_xnor)r+=' xnor '; else
     if(x[n]==o_not)r+=' not ';   else
     r+=x[n];
     n++};
return string_to_array(r);
};



//---------------------------------------------------------
//Codifica en símbolos a los operadores.
//X=Arreglo entrante
//retorno=El arreglo procesado

function de_cadena_a_cod(x){
var n=0;
while(n<=x[0]){
x=borra_espacio(x);
for(n=1;n<=x[0];n++){
   if(((x[n]=='a')&&(x[n+1]=='n')&&(x[n+2]=='d'))||
      ((x[n]=='A')&&(x[n+1]=='N')&&(x[n+2]=='D'))){    //busca el AND
     x[n]=o_and;                  
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if(((x[n]=='o')&&(x[n+1]=='r'))||
      ((x[n]=='O')&&(x[n+1]=='R'))){                   //busca el operador OR
     x[n]=o_or;
     x[n+1]=' ';
     break;}else;
   if(((x[n]=='x')&&(x[n+1]=='o')&&(x[n+2]=='r'))||
      ((x[n]=='X')&&(x[n+1]=='O')&&(x[n+2]=='R'))){    //busca el XOR
     x[n]=o_xor; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if(((x[n]=='n')&&(x[n+1]=='o')&&(x[n+2]=='t'))||
      ((x[n]=='N')&&(x[n+1]=='O')&&(x[n+2]=='T'))){    //busca el NOT
     x[n]=o_not; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if(((x[n]=='n')&&(x[n+1]=='a')&&(x[n+2]=='n'))||
      ((x[n]=='N')&&(x[n+1]=='A')&&(x[n+2]=='N'))){    //busca el NOT
     x[n]=o_nan; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if(((x[n]=='n')&&(x[n+1]=='o')&&(x[n+2]=='r'))||
      ((x[n]=='N')&&(x[n+1]=='O')&&(x[n+2]=='R'))){    //busca el NOT
     x[n]=o_nor; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if(((x[n]=='x')&&(x[n+1]=='n')&&(x[n+2]=='o')&&(x[n+3]=='r'))||
      ((x[n]=='X')&&(x[n+1]=='N')&&(x[n+2]=='O')&&(x[n+3]=='R'))){    
     x[n]=o_xnor;                                     //busca el NOT
     x[n+1]=' ';
     x[n+2]=' ';
     x[n+3]=' ';
     break;}
   }//fin del FOR
}//fin del WHILE
return borra_espacio(x);
};



//---------------------------------------------------------
//Quita los espacios intermedios.
//X=Arreglo entrante
//retorno=Arreglo procesado

function borra_espacio(x){
var y='';  //cadena auxiliar    
for(var n=1;n<=x[0];n++)if(x[n]!=' ')y=y+x[n];
return string_to_array(y)
};



//---------------------------------------------------------
//Quita los espacios intermedios.
//X=Arreglo entrante
//retorno=Arreglo procesado

function borra_space(x){
var m=1;                      //Puntero auxiliar 
    y=new Array()             //areglo auxiliar    
y[0]=0;                       //Se inicia como vacío
for(var n=1;n<=x[0];n++)
   if(x[n]!=c_space){
     y[m]=x[n];
     m++;}
y[0]=m-1;
return y;
};



//---------------------------------------------------------
//Devuelve una lista con las variables que encuentra en la fórmula.
//X=Arreglo entrante
//retorno=Arreglo con lista de variables. El elemento 0 del arreglo
//        contiene la cantidad de variables encontradas.

function busca_var(x){
var y=new Array();
for(var n=0;n<=x[0];n++)y[n]=0;
for(var n=1;n<=x[0];n++){
   if(((x[n]<='Z')&&(x[n]>='A'))||((x[n]<='z')&&(x[n]>='a')))
     for(m=1;m<=x[0];m++)
        if(y[m]==x[n])break; else
          if(y[m]==0){
            y[m]=x[n];          //se ha encontrado otra variable
            y[0]++;
            break;}}
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
//verifica si existe correspondencia entre los símbolos introducidos
//x=agrupador encontrado
//y=agrupador extraido de la pila
function no_coincid(x,y){
if((x==')')&&(y=='('))return 0; else
if((x==']')&&(y=='['))return 0; else
if((x=='}')&&(y=='{'))return 0; else
return 1;
};

//---------------------------------------------------------
//verifica si existe correspondencia entre los códigos introducidos
//x=agrupador encontrado
//y=agrupador extraido de la pila
function code_no_coincid(x,y){
if((x==c_par)&&(y==a_par))return 0; else
if((x==c_cor)&&(y==a_cor))return 0; else
if((x==c_lla)&&(y==a_lla))return 0; else
return 1;
};

//---------------------------------------------------------
function push_todo(x,y){
push_char(x);
push_pos(y);
};

//---------------------------------------------------------
function push_char(x){
if(sp_char<max_form){
  sp_char++; 
  pila_char[sp_char]=x;}
else error(0);
};

//---------------------------------------------------------
function push_pos(x){
if(sp_pos<max_form){
  sp_pos++; 
  pila_pos[sp_pos]=x;}
else error(0);
};

//---------------------------------------------------------
function pop_char(){
var x=pila_char[sp_char];
if(sp_char!=0)sp_char--;else error(0);
return x;
};

//---------------------------------------------------------
function pop_pos(){
var x=pila_pos[sp_pos];
if(sp_pos!=0)sp_pos--; else error(0);
return x;
};



//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_not(x,y){
if(y[x+1]==o_not)y[x+1]=' '; else      //dos operadores NOT se anulan
if(y[x+1]=='1')y[x+1]='0'; else        //NOT 1 = 0
if(y[x+1]=='0')y[x+1]='1'; else        //NOT 0 = 1
error(0);          //error si el código siguiente no es '1','0' o un NOT
return y;
};



//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_and(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if((y[x-1]=='1')&&(y[x+1]=='1'))y[x]='1'; else y[x]='0';
return y;
};


//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_nan(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if((y[x-1]=='1')&&(y[x+1]=='1'))y[x]='0'; else y[x]='1';
return y;
};


//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_or(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if((y[x-1]=='0')&&(y[x+1]=='0'))y[x]='0'; else y[x]='1';
return y;
};


//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_nor(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if((y[x-1]=='0')&&(y[x+1]=='0'))y[x]='1'; else y[x]='0';
return y;
};



//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_xor(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if(y[x-1]==y[x+1])y[x]='0';else y[x]='1';
return y;
};


//---------------------------------------------------------
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_xnor(x,y){
if(op_error(x,y)==1)error(0);else //error si operandos no son '0' o '1'
if(y[x-1]==y[x+1])y[x]='1';else y[x]='0';
return y;
};



//---------------------------------------------------------
//si los operadores no son '0' o '1' se declara un error devolviendo un 1

function op_error(x,y){
if(((y[x-1]=='1')||(y[x-1]=='0'))&&((y[x+1]=='1')||(y[x+1]=='0')))
  return 0; else return 1;
};



//---------------------------------------------------------
//busca operadores y los ejecuta
//X=Tipo de operador a buscar
//Y=Cadena de texto con el fragmento.

function f_oper(x,y){
var n=0;
while(n<y[0]){                          //esto se repite infinitamente
     y=borra_espacio(y);                //elimina los espacios dejados.
     for(n=1;n<=y[0];n++){              //busca un operador X.
        if(y[n]==x){                    //si lo encuentra, lo ejecuta.
          if(n==y[0])error(1);else{     //error si no hay segundo operando
            if(err==1)return 0;         //Retorno si error.
            if(x==o_not)y=f_not(n,y);   //cada procedimiento recibe la cadena
            if(x==o_and)y=f_and(n,y);   //y la posici¢n del operador hallado.
            if(x==o_or)y=f_or(n,y);
            if(x==o_xor)y=f_xor(n,y);
            if(x==o_nan)y=f_nan(n,y);
            if(x==o_nor)y=f_nor(n,y);
            if(x==o_xnor)y=f_xnor(n,y);
            if(x!=o_not){                 //si la operaci¢n es binaria
              y[n-1]=' ';                 //elimina el primer operando
              y[n+1]=' ';}                //elimina el segundo operando 
            else                          //si la operaci¢n es unaria (NOT)
              y[n]=' ';                   //elimina el primer NOT encontrado 
            break;}}}}
y=borra_espacio(y);                 //elimina los espacios dejados
return y;
};  



//---------------------------------------------------------
//X=posición de primer caracter del fragmento.
//Y=posición del último caracter del fragmento.
//Z=Cadena donde se debe buscar el fragmento.

function eval_frag(x,y,z){
err=0;
if(((z[x]=='(')&&(z[y]==')'))||((z[x]=='[')&&(z[y]==']'))||((z[x]=='{')&&(z[y]=='}')))
  if(y-x==1){
    alert('ERROR\nMal uso de los signos de agrupación.');  
    err=1;
    return 0;
    };
var n='';                     //borra la cadena. longitud = 0
for(var m=x;m<=y;m++){        //copia el fragmento a una variable interna 
   n=n+z[m];                  //y lo elimina de la fórmula
   z[m]=' ';}                 //lo elimina colocando espacios en su lugar
n=string_to_array(n);
if((n[1]=='{')||(n[1]=='[')||(n[1]=='('))n[1]=' '; 
if((n[n[0]]=='}')||(n[n[0]]==']')||(n[n[0]]==')'))n[n[0]]=' ';
n=f_oper(o_not,n);          //busca operadores NOT y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_and,n);          //busca los operadores AND y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_or,n);           //busca los OR y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_xor,n);           //busca los XOR y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_nan,n);           //busca los NAN y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_nor,n);           //busca los NOR y los ejecuta
if(err==1)return 0;         //Retorno si error.
n=f_oper(o_xnor,n);           //busca los XNOR y los ejecuta
if(err==1)return 0;         //Retorno si error.
if(n[0]==1)z[x]=n[1]; else{      //si no hay errores, el resultado de la
  alert('ERROR\nSintaxis incorrecta.');        //evaluaci¢n del fragmento es colocado
  err=1;
  return 0;};
return z;                        //en la fórmula original y devuelto.
};

//---------------------------------------------------------
//Evalúa la expresión de acuerdo con los valores asignados.
//x=Areglo entrante
//retorno=resultado de la evaluación.

function eval_exp(x){
var agrup=0;               //inicia en falso la variable de agrupador encontrado
while(x[0]>1){
   sp_char=0;              //Inicia a cero la pila char
   sp_pos=0;               //Inicia a cero la pila pos
   agrup=0;                //Hace cero el contador de agrupadores
   x=borra_espacio(x);     //elimina los espacios entre los caracteres 
   for(var n=1;n<=x[0];n++){
      if((x[n]=='(')||(x[n]=='[')||(x[n]=='{'))push_todo(x[n],n);else
      if((x[n]==')')||(x[n]==']')||(x[n]=='}')){
        if(sp_char==0){
          alert('Error en los signos de agrupación');
          err=1;
          return 0;} else
        if(no_coincid(x[n],pop_char())==1){
          alert('Error en los signos de agrupación');
          err=1;
          return 0;}
        else{
          x=eval_frag(pop_pos(),n,x);
          agrup++;};
        };
      };
   if(sp_char!=0){
     alert('Error en los signos de agrupación');
     err=1;
     return 0;
     }
   else
     if(agrup==0)x=eval_frag(1,x[0],x);
   };
return x[1];  //resultado final de la evaluación de la expresión
};


//-------------------------------------------------------------
//Controla los eventos provocados por la pulsación de las
//teclas y presenta información en la pantalla.

function tecla(x){
document.getElementById("p1").focus();
var y=document.getElementById("p1").value;
if((x>='A')&&(x<='Z'))
  document.getElementById("p1").value=y+x
else
  if((x=='0')||(x=='1')||(x=='(')||(x==')'))
    document.getElementById("p1").value=y+x
  else
    if(x=='*')document.getElementById("p1").value=y+' and ';
    else
    if(x=='+')document.getElementById("p1").value=y+' or '
    else
    if(x=='-')document.getElementById("p1").value=y+'not '
    else
    if(x=='#')document.getElementById("p1").value=y+' xor ';
    else
    if(x=='&')document.getElementById("p1").value=y+' nan '
    else
    if(x=='!')document.getElementById("p1").value=y+' nor '
    else
    if(x=='$')document.getElementById("p1").value=y+' xnor ';
    else
    if(x=='*')document.getElementById("p1").value=y+' and ';
    else
    if(x=='?')document.getElementById("p1").value='';
    else
    if((x=='<')&&(y.length!=0)){
      y=string_to_array(document.getElementById("p1").value);
      y=array_to_string(de_cadena_a_cod(y));
      y=y.substring(0,y.length-1);
      y=array_to_string(de_cod_a_cadena(string_to_array(y)));
      document.getElementById("p1").value=y;
      }
    else
    if(x=='=')genera_circuito(document.getElementById("p1").value);
}



//---------------------------------------------------
function errores(x){
err=0;
if(x==''){
  document.getElementById("o1").innerHTML='';
  document.getElementById("o2").innerHTML='';
  document.getElementById("o3").innerHTML='';
  return 1;
  };
x=string_to_array(x);
for(var n=1;n<=x[0];n++)    //Busca símbolos (caracteres) no permitidos
   if(((x[n]>'Z')||(x[n]<'A'))&&((x[n]>'z')||(x[n]<'a'))&&(x[n]!=' ')&&
     (x[n]!='(')&&(x[n]!=')')&&(x[n]!='{')&&(x[n]!='}')&&(x[n]!='[')&&(x[n]!=']')){
     alert('Error en:  '+x[n]+'\nSímbolo no permitido.');
     return 1;};
x=de_cadena_a_cod(x);
for(var n=1;n<=x[0];n++){   //Busca símbolos (caracteres) no permitidos
   if(((x[n]>'H')||(x[n]<'A'))&&((x[n]>'h')||(x[n]<'a'))&&(x[n]!=' '))
     if((x[n]!='(')&&(x[n]!=')')&&(x[n]!='{')&&(x[n]!='}')&&(x[n]!='[')&&(x[n]!=']'))
       if((x[n]!=o_and)&&(x[n]!=o_or)&&(x[n]!=o_not)&&(x[n]!=o_xor)&&
          (x[n]!=o_nan)&&(x[n]!=o_nor)&&(x[n]!=o_xnor)){
         alert('Error en:  '+x[n]+'\nSímbolo no permitido.');
         return 1;};};
for(var n=1;n<x[0];n++)    //Busca combinaciones no permitidas
   if((((x[n]<='H')&&(x[n]>='A'))||((x[n]<='h')&&(x[n]>='a')))&&
      (((x[n+1]<='H')&&(x[n+1]>='A'))||((x[n+1]<='h')&&(x[n+1]>='a')))){
     alert('ERROR\nPuede que falten operadores.');
     return 1;};
for(var n=1;n<=x[0];n++){   //Busca errores sintácticos
   if(((x[n]=='*')||(x[n]=='+')||(x[n]=='#')||(x[n]=='&')||(x[n]=='!')||(x[n]=='$'))&&
      ((x[n+1]=='*')||(x[n+1]=='+')||(x[n+1]=='#')||(x[n+1]=='&')||(x[n+1]=='!')||(x[n+1]=='$'))){
     alert('ERROR\nLos operadores deben encontrarse entre dos operandos o expresiones encerradas entre signos de agrupación.'); 
     return 1;}
   if((x[n]=='-')&&((x[n+1]=='*')||(x[n+1]=='+')||(x[n+1]=='#')||(x[n+1]=='&')||(x[n+1]=='!')||(x[n+1]=='$'))){
     alert('ERROR\nEl operador NOT solamente puede colocarse delante de un operando o de una expresión encerrada entre signos de agrupación.'); 
     return 1;}
   };
v_encontradas=busca_var(x);
eval_exp(asig_val(array_to_string(x),0,v_encontradas));
if(err==1)return 1;
return 0;
};


//---------------------------------------------------
//Presenta la emulación

function genera_circuito(x){
err=errores(x);
if(err==1)return 0;
x=de_cadena_a_cod(string_to_array(x));
v_encontradas=busca_var(x);
expresion=x;
document.getElementById("o1").innerHTML='';
for(var n=v_encontradas[0];n>0;n--)document.getElementById("o1").innerHTML+=v_encontradas[n]+'<INPUT type="checkbox" name="cc" id="c'+n+'" class="styleSa" onclick="actualizar()"><BR/>';
document.getElementById("o2").innerHTML='<IMG src="../../Im&aacute;genes/circuitos/circuit_'+v_encontradas[0]+'.gif" width="200px" height="200px">'; 
document.getElementById("o3").innerHTML='<INPUT type="checkbox" name="cc" id="c0" class="styleSa">';
document.getElementById("c0").checked=false;
actualizar();
};



//---------------------------------------------------
function mascara(){
var r=0;
var ccc=document.getElementsByName("cc");
for(m=0;m<v_encontradas[0];m++)if(ccc[m].checked==true)r+=1<<m;    
return r;
};



//---------------------------------------------------
//Actualiza el estado de la salida en dependencia 
//del estado de las entradas.

function actualizar(){
if(eval_exp(asig_val(array_to_string(expresion),mascara(),v_encontradas))=='1')
  document.getElementById("c0").checked=true;
else
  document.getElementById("c0").checked=false;
};


//-------------------------------------------------------------
function carga(){ };

