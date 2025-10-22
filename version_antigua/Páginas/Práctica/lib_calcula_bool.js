/* 
Nombre=lib_calcula_bool.js
Autor=Santiago Orellana Pérez 
Fecha=21/12/2009
*/

//----Símbolos utilizados en la interfáz-------------
// '·' =Símbolo para el operador Producto
// '+' =Símbolo para el operador Suma
// ''' =Símbolo para el operador Negación

//*****************************************************
var //VARIABLES CONSTANTES
   o_and='*';   //Símbolo para el operador AND
    o_or='+';   //Símbolo para el operador OR
   o_not='-';   //Símbolo para el operador NOT
max_form=512;   //Longitud máxima de la fórmula introducida.
 max_var=28;    //Cantidad máxima de variables que se pueden utilizar 
                //en la fórmula introducida por el usuario.
//*****************************************************
var //VARIABLES 
  pila_char=new Array();    //Guarda los caracteres de los agrupadores.
    sp_char=0;              //Puntero al último caractere introducido.
   pila_pos=new Array();    //Guarda posición del caracter.
     sp_pos=0;              //Puntero al último número introducido.
        err=0;              //Vale uno cuando ocurre un error.
err_mensaje='';             //Mensajes de errores.

//*****************************************************
//FUNCIONES

//---------------------------------------------------------
//Señala al usuario la ocurrencia de un error.
function error(x,y){
alert('ERROR INTERNO');
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
//Convierte de arreglo a cadena.
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
//Devuelve una lista con las variables que encuentra en la fórmula.
//X=Arreglo entrante
//retorno=Arreglo con lista de variables. El elemento 0 del arreglo
//        contiene la cantidad de variables encontradas.

function busca_var(x){
var y=new Array();
    z='';
for(var n=0;n<=x[0];n++)y[n]=0;
for(var n=1;n<=x[0];n++){
   if(((x[n]<='Z')&&(x[n]>='A'))||((x[n]<='z')&&(x[n]>='a')))
     for(m=1;m<=x[0];m++)
        if(y[m]==x[n])break; else
          if(y[m]==0){
            y[m]=x[n];          //se ha encontrado otra variable
            y[0]++;
            break;
            }
        }
for(var n=y[0];n>0;n--)z+=y[n]; //invierte arreglo de variables
y=string_to_array(z);
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
          break;
		  };
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
err=0;
if(sp_char<max_form){
  sp_char++; 
  pila_char[sp_char]=x;}
else{
  alert('Error interno');
  err=1; 
  return 0; 
  };
};

//---------------------------------------------------------
function push_pos(x){
err=0;
if(sp_pos<max_form){
  sp_pos++; 
  pila_pos[sp_pos]=x;}
else{
  alert('Error interno');
  err=1;
  return 0;
  };
};

//---------------------------------------------------------
function pop_char(){
err=0;
var x=pila_char[sp_char];
if(sp_char!=0)sp_char--;
else{
  alert('Error interno');
  err=1;
  return '';
  };
return x;
};

//---------------------------------------------------------
function pop_pos(){
err=0;
var x=pila_pos[sp_pos];
if(sp_pos!=0)sp_pos--; 
else{
  alert('Error interno');
  err=1;
  return '';
  };
return x;
};

//---------------------------------------------------------
//Operación NOT
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_not(x,y){
if(y[x+1]==o_not)y[x+1]=' '; else      //dos operadores NOT se anulan
if(y[x+1]=='1')y[x+1]='0'; else        //NOT 1 = 0
if(y[x+1]=='0')y[x+1]='1'; else        //NOT 0 = 1
error(8,1);          //error si el código siguiente no es '1','0' o un NOT
return y;
};

//---------------------------------------------------------
//Operación AND
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_and(x,y){
if(op_error(x,y)==1)error(9,1);else //error si operadores no son '0' o '1'
if((y[x-1]=='1')&&(y[x+1]=='1'))y[x]='1'; else y[x]='0';
return y;
};

//---------------------------------------------------------
//Operador OR
//X=posici¢n del operador en la cadena y
//Y=cadena con el fragmento

function f_or(x,y){
if(op_error(x,y)==1)error(10,1);else //error si operadores no son '0' o '1'
if((y[x-1]=='0')&&(y[x+1]=='0'))y[x]='0'; else y[x]='1';
return y;
};

//---------------------------------------------------------
//si los operadores no son '0' o '1' se declara un error devolviendo un 1

function op_error(x,y){
if(((y[x-1]=='1')||(y[x-1]=='0'))&&((y[x+1]=='1')||(y[x+1]=='0')))
  return 0; else return 1;
};

//---------------------------------------------------------
//Busca operadores y los ejecuta
//X=Tipo de operador a buscar
//Y=Cadena de texto con el fragmento.

function f_oper(x,y){
var n=0;
while(n<y[0]){                          //esto se repite infinitamente
     y=borra_espacio(y);                //elimina los espacios dejados.
     for(n=1;n<=y[0];n++){              //busca un operador X.
        if(y[n]==x){                    //si lo encuentra, lo ejecuta.
          if(n==y[0])error(8,1);
		  else{   //error si no hay segundo operando
            if(x==o_not)y=f_not(n,y);   //cada procedimiento recibe la cadena
            if(x==o_and)y=f_and(n,y);   //y la posici¢n del operador hallado.
            if(x==o_or)y=f_or(n,y);
            if(x!=o_not){                 //si la operaci¢n es binaria
              y[n-1]=' ';                 //elimina el primer operando
              y[n+1]=' ';}                //elimina el segundo operando 
            else                          //si la operaci¢n es unaria (NOT)
              y[n]=' ';                   //elimina el primer NOT encontrado 
            break;
			}
		  }
	    }
     }
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
   z[m]=' ';
   };                 //lo elimina colocando espacios en su lugar
n=string_to_array(n);
if((n[1]=='{')||(n[1]=='[')||(n[1]=='('))n[1]=' '; 
if((n[n[0]]=='}')||(n[n[0]]==']')||(n[n[0]]==')'))n[n[0]]=' ';
n=f_oper(o_not,n);               //busca operadores NOT y los ejecuta
n=f_oper(o_and,n);               //busca los operadores AND y los ejecuta
n=f_oper(o_or,n);                //busca los OR y los ejecuta
if(n[0]==1)z[x]=n[1]; else{      //si no hay errores, el resultado de la
  alert('Error interno');        //evaluaci¢n del fragmento es colocado
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
          agrup++;
		  };
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

//---------------------------------------------------------
//Convierte de notación simplificada a código (+/-/*)

function simple_to_code(x){
var y='';
    z='';
for(var n=x.length-1;n>0;n--){ //Copia la cadena a la inversa y transformada a código
   if(x[n]=="'")y+='-'; else   //Cambia signo de negación
   if(x[n]=='·')y+='*'; else   //Cambia signo de multiplicación
   if(x[n]=='{')y+='}'; else   //Invierte los agrupadores
   if(x[n]=='(')y+=')'; else
   if(x[n]=='[')y+=']'; else
   if(x[n]=='}')y+='{'; else
   if(x[n]==')')y+='('; else
   if(x[n]==']')y+='['; else
   y+=x[n];
   };
y=string_to_array(y)
for(var n=1;n<y.length;n++){   //Coloca signos de multiplicación omitidos
   if(((y[n]<='Z')&&(y[n]>='A'))||((y[n]<='z')&&(y[n]>='a'))||(y[n]=='0')||(y[n]=='1')){
     if(((y[n+1]<='Z')&&(y[n+1]>='A'))||((y[n+1]<='z')&&(y[n+1]>='a'))||(y[n+1]=='0')||(y[n+1]=='1'))
       z+=y[n]+'*'; else
     if((y[n+1]=='{')||(y[n+1]=='(')||(y[n+1]=='['))
       z+=y[n]+'*'; else
     if(y[n+1]=='-')
       z+=y[n]+'*'; 
     else z+=y[n];
	 }
   else
   if((y[n]=='}')||(y[n]==')')||(y[n]==']')){
     if((y[n+1]=='{')||(y[n+1]=='(')||(y[n+1]=='['))z+=y[n]+'*'; else
     if(((y[n+1]<='Z')&&(y[n+1]>='A'))||((y[n+1]<='z')&&(y[n+1]>='a'))||(y[n+1]=='0')||(y[n+1]=='1'))
       z+=y[n]+'*'; else     
     if(y[n+1]=='-')z+=y[n]+'*'; else z+=y[n];
	 }
   else
     z+=y[n];
   };
return string_to_array(z);
};


//--------------------------------------------------------
//Controla los eventos provocados por la pulsación de las teclas.

function tecla(x){
document.getElementById("pantalla").focus();
var y=document.getElementById("pantalla").value;
if((x>='A')&&(x<='H'))
  document.getElementById("pantalla").value=y+x
else
  if((x=='0')||(x=='1')||(x=='(')||(x==')'))
    document.getElementById("pantalla").value=y+x;
  else
    if(x=='·')document.getElementById("pantalla").value=y+'·';
    else
    if(x=='+')document.getElementById("pantalla").value=y+'+';
    else
    if(x=='-')document.getElementById("pantalla").value=y+"'";
    else 
    if(x=='L')document.getElementById("pantalla").value='';
    else 
    if(x=='R'){
      y=document.getElementById("pantalla").value;
      document.getElementById("pantalla").value=y.substring(0,y.length-1);
	  }
    else
    if((x=='=')&&(document.getElementById("pantalla").value!=''))
      genera_tabla(document.getElementById("pantalla").value);
}

//--------------------------------------------------
//Encuentra los errores de la función tecleada

function errores(x){
var y='';
x=string_to_array(x);
for(var n=1;n<=x[0];n++){   //Busca símbolos (caracteres) no permitidos
   if(((x[n]>'Z')||(x[n]<'A'))&&((x[n]>'z')||(x[n]<'a'))&&(x[n]!=' '))
     if((x[n]!='(')&&(x[n]!=')')&&(x[n]!='{')&&(x[n]!='}')&&(x[n]!='[')&&(x[n]!=']'))
       if((x[n]!='+')&&(x[n]!='·')&&(x[n]!="'")&&(x[n]!='0')&&(x[n]!='1')){
         y='Error en:  '+x[n]+'\nSímbolo no permitido.';
         return y;
		 };
   };
for(var n=1;n<=x[0];n++){   //Busca errores sintácticos
   if((x[1]=='+')||(x[1]=='·'))
     y='Error en:  '+x[1]+x[2]+'\nLos operadores booleanos de suma y producto deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al principio de la expresión.'; else
   if((x[x[0]]=='+')||(x[x[0]]=='·'))
     y='Error en:  '+x[x[0]-1]+x[x[0]]+'\nLos operadores booleanos de suma y producto deben ubicarse entre dos operandos. Por esta razón, no pueden aparecer al final de la expresión.'; else
   if(x[1]=="'")
     y='Error en:  '+x[1]+x[2]+'\nEl operador booleano de negación debe ubicarse detrás del operando al cual afecta. Por esta razón, no puede aparecer como primer símbolo de la expresión.'; else
   if(((x[n]=='+')&&(x[n+1]=='+'))||((x[n]=='·')&&(x[n+1]=='·')))
     y='Error en:  '+x[n]+x[n+1]+'\nLos operadores booleanos no se deben repetir.'; else
   if(((x[n]=='+')&&(x[n+1]=='·'))||((x[n]=='·')&&(x[n+1]=='+')))
     y='Error en:  '+x[n]+x[n+1]+'\nLos operadores booleanos de suma y producto, no deben aparecer de forma consecutiva.'; else
   if(((x[n]=='+')&&(x[n+1]=="'"))||((x[n]=='·')&&(x[n+1]=="'")))
     y='Error en:  '+x[n]+x[n+1]+'\nLos operadores booleanos de suma y producto, no pueden ser afectados por el operador de negación.'; else
   if((x[n]=='+')&&((x[n-1]=="{")||(x[n-1]=='(')||(x[n-1]=='[')))
     y='Error en:  '+x[n-1]+x[n]+'\nEl operador de suma booleana, debe aparecer entre dos operandos.'; else
   if((x[n]=='+')&&((x[n+1]=="}")||(x[n+1]==')')||(x[n+1]==']')))
     y='Error en:  '+x[n]+x[n+1]+'\nEl operador de suma booleana, debe aparecer entre dos operandos.'; else
   if((x[n]=='·')&&((x[n-1]=="{")||(x[n-1]=='(')||(x[n-1]=='[')))
     y='Error en:  '+x[n-1]+x[n]+'\nEl operador de producto booleano, debe aparecer entre dos operandos.'; else
   if((x[n]=='·')&&((x[n+1]=="}")||(x[n+1]==')')||(x[n+1]==']')))
     y='Error en:  '+x[n]+x[n+1]+'\nEl operador de producto booleano, debe aparecer entre dos operandos.'; 
   };
return y;
};

//---------------------------------------------------
//Abre una ventana donde presenta la tabla veritativa de la 
//expresión booleana introducida en la "pantalla".

function genera_tabla(x){
x=array_to_string(borra_espacio(string_to_array(x)));
err_mensajes=errores(x);
if(err_mensajes!=''){
  alert(err_mensajes);
  return;
  };
var exp_bool=array_to_string(simple_to_code(string_to_array(x)));
var lin='\nEvaluando la expresión ';
lin+=' '+x+' para todas las posibles combinaciones de sus variables, obtenemos la tabla booleana siguiente: \n\n ';
exp_bool=string_to_array(exp_bool);
//-------Imprime_la_cabecera_de_la_tabla--------------
var v_encontradas=busca_var(exp_bool);
if(v_encontradas[0]>8)
  if(confirm("Usted está utilizando más de 8 variables, por lo que la operación puede tardar varios minutos e incluso dificultar el procesamiento de la computadora.\n¿Desea cancelar la operación?")==false)return ;
var columnas=v_encontradas[0]*2+1;
for(var n=1;n<=v_encontradas[0];n++)lin+=v_encontradas[n]+' ';
lin+='|'+x+'\n';
//-------Imprime_la_división_horizontal_de_la_tabla-----
for(n=1;n<=columnas;n++)lin+='-';
lin+='|';
for(n=1;n<=11;n++)lin+='-';
//-------Imprime_las_líneas_restantes_de_la_tabla---------
n=Math.pow(2,v_encontradas[0])-1; 
var bin='';
exp_bool=array_to_string(exp_bool); 
err=0;
for(n;n>=0;n--){
   bin='';
   for(var m=1;m<=v_encontradas[0];m++)bin+=v_encontradas[m]+' ';
   lin+='\n'+' ';
   lin+=array_to_string(asig_val(bin,n,v_encontradas))+'| ';
   lin+=eval_exp(asig_val(exp_bool,n,v_encontradas));
   if(err==1)return 0;
   };
var tb=open("area_bool.htm","RESULTADO","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620px,height=500px");
if(navigator.appName=="Netscape"){                        //Si Mosilla/Netscape, ejecuta esto.
  var tz=open("nada.htm","","width=1px,height=1px");      //Ventana auxiliar.
  tz.close(); };                                          //lka cierra luego.
tb.document.getElementById('text_tabla').value=lin+'\n';  //Actualiza contenido de la ventana nueva
};


//-------------------------------------------------------------
function carga(){ };



//problema en la línea 493-494 (con el MOZILLA)