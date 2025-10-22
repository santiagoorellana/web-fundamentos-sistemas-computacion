/* 
Nombre=lib_visor_circuito.js
Autor=Santiago Orellana Pérez 
Fecha=26/01/2010
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
ms_err="Error en la expresión";   //Mensaje de error en la expresión
//*****************************************************
var //VARIABLES 
 pila_char=new Array();    //Guarda los caracteres de los agrupadores.
   sp_char=0;              //Puntero al último caractere introducido.
  pila_pos=new Array();    //Guarda posición del caracter.
    sp_pos=0;              //Puntero al último número introducido.
   nivel_x=0;
   orden_y=0;
     vista=new Array();    //Guarda la vista del circuito(vista[y][x])
colisiones=false;	           //Indica la ocurrencia de colisiones
con_colisiones=0;              //Cantidad de colisiones
optimizaciones=0;
//*****************************************************
//FUNCIONES


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
     if(x[n]==o_and)r+='and ';   else
     if(x[n]==o_nan)r+='nan ';   else
     if(x[n]==o_or)r+='or ';     else
     if(x[n]==o_nor)r+='nor ';   else
     if(x[n]==o_xor)r+='xor ';   else
     if(x[n]==o_xnor)r+='xnor '; else
     if(x[n]==o_not)r+='not ';   else
     r+=x[n]+' ';
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
   if((x[n]=='a')&&(x[n+1]=='n')&&(x[n+2]=='d')){    //busca el AND
     x[n]=o_and;                  
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if((x[n]=='o')&&(x[n+1]=='r')){                    //busca el operador OR
     x[n]=o_or;
     x[n+1]=' ';
     break;}else;
   if((x[n]=='x')&&(x[n+1]=='o')&&(x[n+2]=='r')){    //busca el XOR
     x[n]=o_xor; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if((x[n]=='n')&&(x[n+1]=='o')&&(x[n+2]=='t')){    //busca el NOT
     x[n]=o_not; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if((x[n]=='n')&&(x[n+1]=='a')&&(x[n+2]=='n')){    //busca el NAN
     x[n]=o_nan; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if((x[n]=='n')&&(x[n+1]=='o')&&(x[n+2]=='r')){    //busca el NOR
     x[n]=o_nor; 
     x[n+1]=' ';
     x[n+2]=' ';
     break;}else;
   if((x[n]=='x')&&(x[n+1]=='n')&&(x[n+2]=='o')&&(x[n+3]=='r')){    
     x[n]=o_xnor;                                    //busca el XNOR
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
//contiene la cantidad de variables encontradas.

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
else{
  alert(ms_err);
  err=1;  
  };
};



//---------------------------------------------------------
function push_pos(x){
if(sp_pos<max_form){
  sp_pos++; 
  pila_pos[sp_pos]=x;}
else{
  alert(ms_err);
  err=1;  
  };
};



//---------------------------------------------------------
function pop_char(){
var x=pila_char[sp_char];
if(sp_char!=0)
  sp_char--;
else{
  alert(ms_err);
  err=1;  
  return 0;};
return x;
};



//---------------------------------------------------------
function pop_pos(){
var x=pila_pos[sp_pos];
if(sp_pos!=0)
  sp_pos--; 
else{
  alert(ms_err);
  err=1;  
  return 0;};
return x;
};




//---------------------------------------------------------
var   red=new Array();  //Red de compuertas enlazadas.
siguiente=0;            //Siguiente posición libre para crear compuerta nueva.
    a_par=parseInt(0xE0);
    a_lla=parseInt(0xE1);
    a_cor=parseInt(0xE2);
    c_par=parseInt(0xE3);
    c_lla=parseInt(0xE4);
    c_cor=parseInt(0xE5);

  c_space=parseInt(0xE6);

    c_and=parseInt(0xF0);
    c_nan=parseInt(0xF1);
     c_or=parseInt(0xF2);
    c_nor=parseInt(0xF3);
    c_xor=parseInt(0xF4);
   c_xnor=parseInt(0xF5);
    c_not=parseInt(0xF6);



//---------------------------------------------------------
//Crea los nodos en la red sin conectar.

function crea_nodos(x){
for(n=0;n<=red.lenght;n++)red[n]=0;
red[0]=new Array(0,0,0,0,0,0); //Crea el nodo base.
for(var n=1;n<=x[0];n++)red[n]=new Array(x[n],0,0,0,0,0);
red[0][0]=n-1;    //Cuenta la cantidad de nodos.
return x[0]+1;    //Actualiza la posición para las próximas compuertas.
};



//---------------------------------------------------------
//Crea una compuerta y la enlaza en la red.
//V=Tipo de compuerta
//W=Apunta a una salida de compuerta.
//X=Apunta a una salida de compuerta.
//Y=Nivel posicional X de la compuerta.
//Z=Orden posicional Y de la compuerta.
//P=Cantidad de compuertas que se le conectan.
//El sexto parámetro no se pasa porque inicia en cero.
//El sexto parámetro es el contador de enlaces a la compuerta.

function crea_compuerta(v,w,x,y,z,p){
if(y>y_max)y_max=y;
if(z>x_max)x_max=x;
red[siguiente]=new Array(v,w,x,y,z,0); //Crea la compuerta.
red[w][5]++;                           //Incrementa el contador de las 
if(p==0)red[x][5]++;                   //compuertas a las que se enlaza.
siguiente++;                           //Suma una compuerta a la RED.
};



//---------------------------------------------------------
//Sustituye cada variable por su ordinal en la lista de encontradas.
//X=Arreglo con la fórmula.
//Y=Arreglo con la lista de variables encontradas.

function de_var_a_ord(x,y){
for(var n=1;n<=y[0];n++)
   for(var m=1;m<=x[0];m++)if(x[m]==y[n])x[m]=n;
return x;
};



//---------------------------------------------------------
function de_cod_a_num(x){
var n=1;
    r='';
while(n<=x[0]){
     if(x[n]==o_and)x[n]=c_and;   else
     if(x[n]==o_nan)x[n]=c_nan;   else
     if(x[n]==o_or)x[n]=c_or;     else
     if(x[n]==o_nor)x[n]=c_nor;   else
     if(x[n]==o_xor)x[n]=c_xor;   else
     if(x[n]==o_xnor)x[n]=c_xnor; else
     if(x[n]==o_not)x[n]=c_not;   else
     if(x[n]=='(')x[n]=a_par;     else
     if(x[n]=='{')x[n]=a_lla;     else
     if(x[n]=='[')x[n]=a_cor;     else
     if(x[n]==')')x[n]=c_par;     else
     if(x[n]=='}')x[n]=c_lla;     else
     if(x[n]==']')x[n]=c_cor;     else
     if(x[n]==' ')x[n]=c_space;
     n++};
return x;
};



//---------------------------------------------------------
//busca operadores y los crea en la RED.
//X=Tipo de operador a buscar
//Y=Arreglo con el fragmento.

function c_oper(x,y){
var n=0;
while(n<y[0]){                           //esto se repite 
     y=borra_space(y);                   //elimina los espacios dejados.
     for(n=1;n<y[0];n++){                //busca un operador X.
        if(y[n]==x){                     //si lo encuentra, lo crea en la RED.
          if(n==y[0]){                   //error si no hay segundo operando
            alert(ms_err);
            err=1;
            return 0;}
          else{    
            if(x!=c_not){
              orden_y++;
              crea_compuerta(x,y[n-1],y[n+1],nivel_x,orden_y,0); //Enlaza operador binario.
              y[n-1]=c_space;              //elimina el primer operando
              y[n+1]=c_space;              //elimina el segundo operando 
              y[n]=parseInt(siguiente-1);} //Coloca el índice de RED en la fórmula.
            else{
              orden_y++;
              if(y[n+1]==c_not)          //SI son dos NOT consecutivos
                y[n+1]=c_space;          //elimina el segundo NOT
              else {
                crea_compuerta(x,y[n+1],y[n+1],nivel_x,orden_y,1); //Enlaza operador unario.
                y[n+1]=parseInt(siguiente-1);}         //Coloca el índice de RED en la fórmula.
              y[n]=c_space;}             //elimina el primer NOT encontrado 
            break;}}}}                   //Cuatro agrupadores (4)
y=borra_space(y);                        //elimina los espacios dejados
return y;
};  



//---------------------------------------------------------
//X=posición de primer caracter del fragmento.
//Y=posición del último caracter del fragmento.
//Z=Arreglo donde se debe buscar el fragmento.
//Salida=Punto de salida del fragmento.

function construir_frag(x,y,z){
var n=new Array();            //arreglo.longitud = 0
orden_y=0;
for(var m=x;m<=y;m++){        //copia el fragmento a una variable interna 
   n[m-x+1]=z[m];             //y lo elimina de la fórmula
   z[m]=c_space;}             //lo elimina colocando espacios en su lugar
n[0]=m-x;                     //Cantidad de elementos en la fórmula.
if((n[1]==a_lla)||(n[1]==a_cor)||(n[1]==a_par)){
  nivel_x=sp_char+2;
  n[1]=c_space;}
else 
  nivel_x=1;
if((n[n[0]]==c_lla)||(n[n[0]]==c_cor)||(n[n[0]]==c_par))n[n[0]]=c_space;
n=c_oper(c_not,n);            //crea operadores NOT y los enlaza
if(err==1)return 0;
n=c_oper(c_and,n);            //crea los operadores AND y los enlaza
if(err==1)return 0;
n=c_oper(c_or,n);             //crea los OR y los enlaza
if(err==1)return 0;
n=c_oper(c_xor,n);            //crea los XOR y los enlaza
if(err==1)return 0;
n=c_oper(c_xnor,n);           //crea los XNOR y los enlaza
if(err==1)return 0;
n=c_oper(c_nan,n);            //crea los NAN y los enlaza
if(err==1)return 0;
n=c_oper(c_nor,n);            //crea los NOR y los enlaza
if(err==1)return 0;
if(n[0]==1)
  z[x]=n[1]; 
else{                          //si no hay errores, el punto de salida
  alert(ms_err);
  err=1;
  return 0;};                  //del fragmento es colocado en la
return z;                     //fórmula original y devuelto.
};



//---------------------------------------------------------
//Explora la expresión para formar un circuito.
//x=Areglo entrante
//Salida=Punto de salida del circuito.

function construir_circuito(x){
var agrup=0;               //inicia en falso la variable de agrupador encontrado
    y_max=0;               //máxima posición de un elemento en el eje Y
    x_max=0;               //máxima posición de un elemento en el eje X
while(x[0]>1){
   sp_char=0;              //Inicia a cero la pila char
   sp_pos=0;               //Inicia a cero la pila pos
   agrup=0;                //Hace cero el contador de agrupadores
   x=borra_space(x);       //elimina los espacios entre los caracteres 
   for(var n=1;n<=x[0];n++){
      if((x[n]==a_par)||(x[n]==a_cor)||(x[n]==a_lla))push_todo(x[n],n);else
      if((x[n]==c_par)||(x[n]==c_cor)||(x[n]==c_lla))
        if(code_no_coincid(x[n],pop_char())==1){
          alert(ms_err);
          err=1;
          return 0;}
        else{
          x=construir_frag(pop_pos(),n,x);
          if(err==1)return 0;
          agrup++;};
      };                   //Fin del FOR     
   if(sp_char!=0){
     alert(ms_err);
     err=1;
     return 0;}
   else
     if(agrup==0){
       x=construir_frag(1,x[0],x);
       if(err==1)return 0;
       };
   };                      //Fin del WHILE
return x[1];               //Punto de salida del circuito.
};



//------------------------------------------------------------
var nodo_con=0;
vista_altura=0;
 vista_ancho=0;
   max_conec=0;
//------------------------------------------------------------


//NODO A
nod_A=new Array();
nod_A[0]=new Array('nodo_A');
nod_A[1]=new Array('f_nada');
nod_A[2]=new Array('nodo_con');

//NODO B
nod_B=new Array();
nod_B[0]=new Array('nodo_B');
nod_B[1]=new Array('f_nada');
nod_B[2]=new Array('nodo_con');

//NODO C
nod_C=new Array();
nod_C[0]=new Array('nodo_C');
nod_C[1]=new Array('f_nada');
nod_C[2]=new Array('nodo_con');

//NODO D
nod_D=new Array();
nod_D[0]=new Array('nodo_D');
nod_D[1]=new Array('f_nada');
nod_D[2]=new Array('nodo_con');

//NODO E
nod_E=new Array();
nod_E[0]=new Array('nodo_E');
nod_E[1]=new Array('f_nada');
nod_E[2]=new Array('nodo_con');

//NODO F
nod_F=new Array();
nod_F[0]=new Array('nodo_F');
nod_F[1]=new Array('f_nada');
nod_F[2]=new Array('nodo_con');

//NODO G
nod_G=new Array();
nod_G[0]=new Array('nodo_G');
nod_G[1]=new Array('f_nada');
nod_G[2]=new Array('nodo_con');

//NODO H
nod_H=new Array();
nod_H[0]=new Array('nodo_H');
nod_H[1]=new Array('f_nada');
nod_H[2]=new Array('nodo_con');

//NODO FIN
nod_fin=new Array();
nod_fin[0]=new Array('hori','nodo_con','f_nada','nodo_Sal');


//------------------------------------------------------------
//AND
gr_and=new Array();
gr_and[0]=new Array('f1_and','f2_and','f3_and','f_nada');
gr_and[1]=new Array('f5_and','f6_and','f7_and','f8_and');
gr_and[2]=new Array('f9_and','f10_and','f11_and','f_nada');

//NAN
gr_nan=new Array();
gr_nan[0]=new Array('f1_and','f2_and','f3_and','f_nada');
gr_nan[1]=new Array('f5_and','f6_and','f7_and','f8_nan');
gr_nan[2]=new Array('f9_and','f10_and','f11_and','f_nada');

//OR
gr_or=new Array();
gr_or[0]=new Array('f1_or','f2_or','f3_and','f_nada');
gr_or[1]=new Array('f5_or','f6_or','f7_and','f8_and');
gr_or[2]=new Array('f9_or','f10_or','f11_and','f_nada');

//NOR
gr_nor=new Array();
gr_nor[0]=new Array('f1_or','f2_or','f3_and','f_nada');
gr_nor[1]=new Array('f5_or','f6_or','f7_and','f8_nan');
gr_nor[2]=new Array('f9_or','f10_or','f11_and','f_nada');

//XOR
gr_xor=new Array();
gr_xor[0]=new Array('f1_xor','f2_xor','f3_and','f_nada');
gr_xor[1]=new Array('f5_xor','f6_xor','f7_and','f8_and');
gr_xor[2]=new Array('f9_xor','f10_xor','f11_and','f_nada');

//XNOR
gr_xnor=new Array();
gr_xnor[0]=new Array('f1_xor','f2_xor','f3_and','f_nada');
gr_xnor[1]=new Array('f5_xor','f6_xor','f7_and','f8_nan');
gr_xnor[2]=new Array('f9_xor','f10_xor','f11_and','f_nada');

//NOT
gr_not=new Array();
gr_not[0]=new Array('f1_not','f2_not','f_nada','f_nada');
gr_not[1]=new Array('f5_not','f6_not','f7_not','f8_nan');
gr_not[2]=new Array('f9_not','f10_not','f_nada','f_nada');

//------------------------------------------------------------
//HORIZONTAL
lin_hori=new Array();
lin_hori[0]=new Array('hori');

//DERECHA ABAJO
lin_der_ab=new Array();
lin_der_ab[0]=new Array('der_ab');

//DERECHA ARRIBA
lin_der_ar=new Array();
lin_der_ar[0]=new Array('der_ar');

//VERTICAL
lin_ver=new Array();
lin_ver[0]=new Array('ver');

//IZQUIERDA ARRIBA
lin_iz_ar=new Array();
lin_iz_ar[0]=new Array('iz_ar');

//IZQUIERDA ABAJO
lin_iz_ab=new Array();
lin_iz_ab[0]=new Array('iz_ab');

//CRUZADA
lin_cru=new Array();
lin_cru[0]=new Array('cru');

//CONECCIÓN DERECHA
lin_con_der=new Array();
lin_con_der[0]=new Array('con_de');



//------------------------------------------------------------
//Muestra un elemento en la coordenada indicada.
function elemento(x,y,z){

if(max_conec<y)max_conec=y;           //Busca la posición más baja
for(var n=0;n<z.length;n++)           //Por cada fila y por
   for(var m=0;m<z[n].length;m++)     //cada elemento de la 
      vista[y+n][x+m]=z[n][m];        //fila, copia la imagen.
};



//------------------------------------------------------------
//Asigna una coordenada organizativa a la compuerta.

function organizar_compuertas(x){
var columnas=new Array();               //contadores de cada una de las columnas
for(n=0;n<=siguiente;n++)columnas[n]=0; //Pone en cero los contadores de columnas
for(n=1;n<siguiente;n++){
   if((x[n][1]==0)&&(x[n][2]==0)){
     x[n][3]=0;           //Columna donde se ubica;
     x[n][4]=0;}         //Lugar dentro de la columna
   else
   if((x[n][1]<=x[0][0])&&(x[n][2]<=x[0][0])){
     x[n][3]=1;           //Columna donde se ubica;
     x[n][4]=columnas[1]; //Lugar dentro de la columna
     columnas[1]++; }
   else{                             //Bloque #1
     if(x[x[n][1]][3]>=x[x[n][2]][3])
       x[n][3]=x[x[n][1]][3]+1;      //x[n][1] apunta al mayor
     else
       x[n][3]=x[x[n][2]][3]+1;      //x[n][2] apunta al mayor
     x[n][4]=columnas[x[n][3]];         
     columnas[x[n][3]]++;
     };                              //Fin de Bloque #1 
   };
};



//------------------------------------------------------------
//Desplaza las compuertas de acuerdo con la posición Y de sus antecesoras.

function frag3(x){
for(n=x[0][0]+1;n<siguiente;n++)                   //Recorre todas las compuertas.
   if(((x[n][1]<=x[0][0])&&(x[n][2]>x[0][0]))||((x[n][1]>x[0][0])&&(x[n][2]<=x[0][0]))){     //Para los que apuntan a nodo y compuerta simultaneamente
     if(x[x[n][1]][3]>=x[x[n][2]][3])              //Debe situarse detrás de la compuerta 
       x[n][4]=x[x[n][1]][4]+1;                    //se sitúa detras de la compuerta 
     else{
       x[n][4]=x[x[n][2]][4]+1;                    //se sitúa detras de la compuerta 
       v1=x[n][1];                                 //Intercambia las conecciones para 
       x[n][1]=x[n][2];                            //que la entrada #1 apunte siempre 
       x[n][2]=v1};                                //a la compuerta.
     } else
   if((x[n][1]>x[0][0])&&(x[n][2]>x[0][0])){ //IF1 //Para las compuertas que apuntan a dos compuertas simultaneamente
     if(x[n][1]!=x[n][2]){                   //IF2 //Para las compuertas binarias (AND,OR,...)
       if(x[x[n][1]][4]<x[x[n][2]][4]){            //Debe situarse detrás de la compuerta que esté más arriba
         if(x[x[n][1]][4]+1>=x[x[n][2]][4])
           x[n][4]=x[x[n][2]][4]+1;           
         else
           x[n][4]=x[x[n][1]][4]+1;                  //apunta a la que está más arriba
         }
       else{
         if(x[x[n][2]][4]+1>=x[x[n][1]][4])
           x[n][4]=x[x[n][1]][4]+1;           
         else
           x[n][4]=x[x[n][2]][4]+1;                  // apunta a la que está más arriba
         };
       }                                          //Fin del IF2
     else{                                         //Para las compuertas unarias (NOT)
       if(x[x[n][1]][4]<x[x[n][2]][4]) //Esto se puede hacer utilizando solamente una conección
         x[n][4]=x[x[n][1]][4];                    // apunta al mayor
       else
         x[n][4]=x[x[n][2]][4];};                  // apunta al mayor
     };                                            //Fin del IF1
return x;
};


//------------------------------------------------------------
//Desplaza las compuertas para darle espacio a las líneas de conección horizontales.

function frag2(x){
var ss=0;
for(n=x[0][0]+1;n<siguiente;n++)                   //Recorre todas las compuertas.
   if((x[n][1]<=x[0][0])&&(x[n][2]<=x[0][0]))      //Para los del nivel #1
     for(m=n-1;m>x[0][0];m--)                      //Recorre compuertas anteriores.
        if((x[m][1]<=x[0][0])&&(x[m][2]<=x[0][0])){//Para el próximo que encuentre del nivel #1
          ss=ss+(n-m-1)+con_colisiones;
          x[n][4]+=ss;                             //Dezplaza la compuerta hacia abajo.
          break;
          };                                       //Fin del IF
colisiones=false;
return x;
};


//------------------------------------------------------------
//Ajusta Y de acuerdo con las compuertas que se le conectan desde atrás.

function frag4(x){
for(n=x[0][0]+1;n<siguiente;n++){                              //Recorre todas las compuertas.
   if(((x[x[n][2]][1]<=x[0][0])&&(x[x[n][2]][2]<=x[0][0]))&&  //Para los que se conectan a los del nivel #1
     ((x[n][1]>x[0][0])||(x[n][2]>x[0][0]))){
     while((x[x[n][2]][4]<=x[n][4])&&(x[n][2]>x[0][0]+1)){
          x[x[n][2]][4]++;                                    //Desplaza la compuerta
          for(m=x[n][2];m<siguiente;m++){                 //Recorre todas las compuertas que estan por debajo en el arreglo./
             if((x[m][1]<=x[0][0])&&(x[m][2]<=x[0][0]))       //Para los del nivel #1
               x[m][4]+=2;
             };                                               //Cierre de FOR 
          };                                                  //Cierre de WHILE
     };                                                       //Cierre de IF
   };                                                         //Fin del FOR
return x;
};



//------------------------------------------------------------
//Desplaza todas las compuertas dejando el espacio para los nodos.
//Tiene en cuenta el tamaño de las compuertas.

function frag1(x){
for(n=1;n<=x[0][0];n++)x[n][3]=n*2;  
for(n=x[0][0]+1;n<siguiente;n++){
   x[n][3]=x[n][3]*5+((x[0][0]-1)*2);  
   x[n][4]=x[n][4]*4+4;
   };
return x;
};





//------------------------------------------------------------
//Asigna una coordenada organizativa a la compuerta.

function mostrar_compuertas(x){
x=frag1(x);
x=frag2(x);
x=frag3(x);
x=frag4(x);
x=frag3(x);
//Hace la representación en la matriz "vista" de las compuertas
for(n=1;n<siguiente;n++){            //Representa compuerta en su coordenada
   x[n][3]++;                        //Sepera el gráfico del borde
   x[n][4]++;                        //Sepera el gráfico del borde
   if(x[n][0]==c_and) elemento(x[n][3],x[n][4],gr_and); else
   if(x[n][0]==c_nan) elemento(x[n][3],x[n][4],gr_nan); else
   if(x[n][0]==c_or)  elemento(x[n][3],x[n][4],gr_or);  else
   if(x[n][0]==c_nor) elemento(x[n][3],x[n][4],gr_nor); else
   if(x[n][0]==c_xor) elemento(x[n][3],x[n][4],gr_xor); else
   if(x[n][0]==c_xnor)elemento(x[n][3],x[n][4],gr_xnor);else
   if(x[n][0]==c_not) elemento(x[n][3],x[n][4],gr_not); else
   if((x[n][1]==0)&&(x[n][2]==0)){   //Representa nodo en su coordenada
     if((x[n][0]=='A')||(x[n][0]=='a'))elemento(x[n][3],x[n][4],nod_A); else
     if((x[n][0]=='B')||(x[n][0]=='b'))elemento(x[n][3],x[n][4],nod_B); else
     if((x[n][0]=='C')||(x[n][0]=='c'))elemento(x[n][3],x[n][4],nod_C); else
     if((x[n][0]=='D')||(x[n][0]=='d'))elemento(x[n][3],x[n][4],nod_D); else
     if((x[n][0]=='E')||(x[n][0]=='e'))elemento(x[n][3],x[n][4],nod_E); else
     if((x[n][0]=='F')||(x[n][0]=='f'))elemento(x[n][3],x[n][4],nod_F); else
     if((x[n][0]=='G')||(x[n][0]=='g'))elemento(x[n][3],x[n][4],nod_G); else
     if((x[n][0]=='H')||(x[n][0]=='h'))elemento(x[n][3],x[n][4],nod_H); 
     };
   };
};



//------------------------------------------------------------
function linea(x1,y1,simbolo){
if((simbolo==lin_hori)||(simbolo==lin_ver)){
  if(((simbolo==lin_hori))&&(vista[y1][x1]=='ver'))
    elemento(x1,y1,lin_cru);         //Transforma el elemento
  else  
  if((simbolo==lin_ver)&&(vista[y1][x1]=='hori'))
    elemento(x1,y1,lin_cru);         //Transforma el elemento
  else  
    elemento(x1,y1,simbolo);         //Muestra el elemento normal
  } else
if(simbolo==lin_iz_ar){
  if(vista[y1][x1]=='hori')
    elemento(x1,y1,lin_con_ar);      //Transforma el elemento
  else
    elemento(x1,y1,simbolo);         //Muestra el elemento normal
  } else
if(simbolo==lin_iz_ab){
  if(vista[y1][x1]=='hori')
    elemento(x1,y1,lin_con_ab);      //Transforma el elemento
  else
    elemento(x1,y1,simbolo);         //Muestra el elemento normal
  } else
elemento(x1,y1,simbolo);         //Muestra el elemento normal
};



//------------------------------------------------------------
function nodo_linea(x1,y1,simbolo){
if((simbolo==lin_ver)&&(vista[y1][x1]=='hori'))
  elemento(x1,y1,lin_cru);               //Transforma el elemento
else  
  if((simbolo==lin_ver)&&(vista[y1][x1]=='der_ar'))
    elemento(x1,y1,lin_con_der);         //Transforma el elemento
  else
    elemento(x1,y1,simbolo);             //Muestra el elemento normal
};



//------------------------------------------------------------
function n_lazar(x1,x2,y1){
while(x1>=x2){                    //lo conecta directamente.
     linea(x1,y1,lin_hori); 
     x1--;}; 
linea(x1+1,y1,lin_der_ar);
};



//------------------------------------------------------------
// x1,y1 = Coordenadas de la compuerta
// x2,y2 = Coordenadas de la compuerta

function c_lazar(x1,y1,x2,y2){
if(y1==y2){
  while(x1>=x2){
       linea(x1,y1,lin_hori);
       x1--;
	   }
  }
else{                             //bloque #1
  linea(x1,y1,lin_der_ab);        //Dobla la línea hacia abajo
  y1++;                           //Incrementa coordenada Y
  while(y1<y2){                   //Traza una línea vertical 
       linea(x1,y1,lin_ver);      //dirección abajo = 1
       y1++;};  
  linea(x1,y1,lin_iz_ar);         //Dobla la línea hacia adelante
  x1--;
  while(x1>=x2){                  //Traza la otra mitad de la línea X
       linea(x1,y1,lin_hori);
       x1--;}
  };                              //Fin del bloque #1
};

//------------------------------------------------------------
function n_tantear(x1,y1,x2,y2){
var px=0;
    py=y1;
for(px=x1;px>x2;px--)if((vista[py][px]!='ver')&&(vista[py][px]!='f_nada'))break;
if(px>x2){                                              //Verifica si se puede trazar una conexión horizontal directamente
  if(vista[y1][x1]=='f_nada')
    linea(x1,y1,lin_der_ab);                            //Si no se puede conectar directamente la horizontal, se verifica si se puede doblar la conexión hacia abajo
  else                                                  //Si no se puede doblar hacia abajo, pide que se reinicie la representación desplazando una unidad el nivel
	colisiones=true;
  for(py=y1;py<99;py++){                                //Repite la exploración horizontal hasta que encuentra el hueco necesario para crear la línea
     for(px=x1;px>x2;px--)                              //Explora para ver si se puede trazar una horizontal
        if((vista[py][px]!='ver')&&(vista[py][px]!='f_nada'))break;  
     if(px<=x2){
       for(y1;y1<py;y1++){
          if((vista[y1+1][x1]=='f_nada')||(vista[y1+1][x1]=='hori'))
            linea(x1,y1+1,lin_ver);
          else
            colisiones=true;
          };
       linea(x1,y1,lin_iz_ar);                          //Dobla la línea para trazar una horizontal hacia el frente
       break;};};
  for(x1=x1-1;x1>=x2;x1--)linea(x1,y1,lin_hori);        //Traza la línea horizontal hacia el frente
  }
else
  for(x1;x1>=x2;x1--)linea(x1,y1,lin_hori);             //Si la conexioón horizontal puede hacerse directamente, la realiza
linea(x1+1,y1,lin_der_ar);                              //Terminación de la línea horizontal
};

//------------------------------------------------------------
//Enlaza las compuertas con sus antecesores.
function enlazar_compuertas(x){
var tmp=0;
for(n=x[0][0]+1;n<siguiente;n++){    //Enlaza el terminal superior de la compuerta
   if(x[n][0]!=c_not){               //Para operadores binarios (AND,NAN,OR,NOR,XOR,XNOR)
     if(x[n][1]>x[0][0]){            //de binario a compuerta
       if((x[x[n][1]][4]>x[x[n][2]][4])&&(x[n][2]>x[0][0])){  //Invierte las conecciones si estas se cruzan mutuamente.
         tmp=x[n][1];
         x[n][1]=x[n][2];
         x[n][2]=tmp;
         };
       c_lazar(x[n][3]-1,x[n][4],x[x[n][1]][3]+4,x[x[n][1]][4]+1); 
       }
     else                           //de binario a nodo
       n_lazar(x[n][3]-1,x[x[n][1]][3],x[n][4]); 
     }
   else{                            //Para operadores unarios (NOT)
     if(x[n][1]>x[0][0])            //de unario a compuerta
       c_lazar(x[n][3]-1,x[n][4]+1,x[x[n][1]][3]+4,x[x[n][1]][4]+1);  
     else                           //de unario a nodo
       n_lazar(x[n][3]-1,x[x[n][1]][3],x[n][4]+1);
     };};
for(n=x[0][0]+1;n<siguiente;n++)    //Enlaza el terminal inferior de la compuerta
   if(x[n][0]!=c_not){              //Para operadores binarios (AND,NAN,OR,NOR,XOR,XNOR)
     if(x[n][2]>x[0][0])            //de binario a compuerta
       c_lazar(x[n][3]-1,x[n][4]+2,x[x[n][2]][3]+4,x[x[n][2]][4]+1); 
     else{                          //de binario a nodo
       if((x[n][1]<=x[0][0])&&(x[n][2]<=x[0][0]))
         n_lazar(x[n][3]-1,x[x[n][2]][3],x[n][4]+2); 
       else
         n_tantear(x[n][3]-1,x[n][4]+2,x[x[n][2]][3],x[n][4]+2); 
       };
     };
if(x[0][0]>1)
  elemento(x[siguiente-1][3]+4,x[siguiente-1][4]+1,nod_fin);
else
  elemento(x[siguiente-1][3]+4,x[siguiente-1][4],nod_fin);

//Enlaza los nodos con las terminales de las compuertas
var sy=0;
    sc=0;
for(n=1;n<=x[0][0];n++){
   sc=x[n][5];
   for(ny=x[n][4]+3;ny<99;ny++){
      if(vista[ny][x[n][3]]=='der_ar')sc--;      
      if(sc==0)break;
      };
   for(my=x[n][4]+3;my<ny;my++)nodo_linea(x[n][3],my,lin_ver);
   };
};




//------------------------------------------------------------
//Inicia la tabla con un ancho y altura

function iniciar_vista(){
vista_ancho=100;
vista_altura=100;
for(n=0;n<=vista_altura;n++)vista[n]=new Array();
for(n=0;n<=vista_altura;n++)
   for(m=0;m<=vista_ancho;m++)vista[n][m]='f_nada';
};



//------------------------------------------------------------
function acotar(x){
vista_ancho=x[siguiente-1][3]+10;   
vista_altura=0;
for(n=1;n<siguiente;n++)
   if(red[n][4]>vista_altura)
     vista_altura=x[n][4];
vista_altura+=5;
if(vista_altura<max_conec+2)vista_altura=max_conec+2;  
};



//------------------------------------------------------------
function crear_tabla(z,px,py){
v1='';
v2='';
z[py-1][100]='f_nada';
z[py][100]='f_nada';
for(n=0;n<py;n++)
   if(z[n][100]!='false'){
     v2='<DIV name="o1" id="o1"><TR>';
     for(m=0;m<px;m++)v2+='<TD><IMG src="../../Im&aacute;genes/circuitos/'+z[n][m]+'.gif">';
     v1+=v2+'</DIV>';
     };	   
};




//------------------------------------------------------------
function optimizar(){
optimizaciones=0;
for(j=6;j<=vista_altura;j++){
   for(i=0;i<=100;i++)if((vista[j][i]!='f_nada')&&(vista[j][i]!='ver'))break;	  
   if(i>=100){
     vista[j][100]='false';	  
	 optimizaciones++;};
   };
};




//------------------------------------------------------------
//Construye la vista del circuito a partir 
//de la RED construida por la fórmula.

function construir_vista_circuito(){   //Abre una ventana
max_conec=0;                           //Pone a cero
colisiones=false                       //No ha ocurrido colisión
con_colisiones=0;                      //Pone a cero el contador de colisiones
for(k=1;k<=100;k++){
   organizar_compuertas(red);
   iniciar_vista();                        //Prepara la tabla_vista
   mostrar_compuertas(red);
   enlazar_compuertas(red);
   if(colisiones==false)break;
   con_colisiones++;
   };
acotar(red);
optimizar();   //optimiza la vista
if(err==1)return 0;
crear_tabla(vista,vista_ancho,vista_altura);    //Crea la tabla
vista_ancho=vista_ancho*7+55;
vista_altura=(vista_altura-optimizaciones)*7+55;
if(vista_ancho>750)vista_ancho=750;
if(vista_altura>550)vista_altura=550;
var tb=open("area_circuito.htm","","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width="+vista_ancho+",height="+vista_altura);
if(navigator.appName=="Netscape"){                        //Si Mosilla/Netscape, ejecuta esto.
  var tz=open("nada.htm","","width=1px,height=1px");      //Ventana auxiliar.
  tz.close(); };                                          //lka cierra luego.
tb.document.getElementById("ot1").innerHTML=v1;
};



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
     ((x[n]!='(')&&(x[n]!=')')&&(x[n]!='{')&&(x[n]!='}')&&(x[n]!='[')&&(x[n]!=']'))){
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
return 0;
};



//---------------------------------------------------
function genera_circuito(x){
err=errores(x);
if(err==1)return 0;
var f1='';   //Función booleana.
    v1=0;    //Arreglo con las variables encontradas en la función.
f1=string_to_array(x);
f1=borra_espacio(de_cadena_a_cod(f1));
v1=busca_var(f1);         //Lista las variables utilizadas
f1=de_cod_a_num(f1);      //Sustituye operadores por "números".
f1=de_var_a_ord(f1,v1);   //Sustituye variables por su ordinal en la lista.
siguiente=crea_nodos(v1); //Crea los nodos en la red.
construir_circuito(f1);
if(err==1)return 0;
construir_vista_circuito();
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
};


//-------------------------------------------------------------
//En blanco para que la llame el BODY
function carga(){ };



//PROBADOS OK conecciones
//  (((A*B)+(A+D))*(B*C))*(A#C+D*A)           OK
//  (A and B)xor not(B or C)                  OK
//  (((A*B)+(A+D))*(B*C))*(A+C)+(A*B*C)+(B*C) OK
//  (A*B*C+B*C+A)+(A*B*C)+(A*B*C+B*C+A)       OK
//  (A*B*C)+(A*B*C*D*E)+(A*B*C*D*E)           OK
//  A+(A#B#C)#((B#A)+D)                       OK
//  (A*B*C)+(A*B*C*D*E)+(F*G*H*D*E)           OK
//  A*B+(H#D)                                 OK
//  A*B+(H+D)                                 OK
//  A*B+A*B+(H+D)                             OK
//  A+(A#B#C)#-((A*B+-(H#D))+-D)              OK
//  A*B+(H+D)+A*B                             OK
//  A*B+(H+D)+A*B+A*B+(H+D)                   OK
//  A*B+(H+D)+A*B+A*B+A*B+A*B+(H+D)           OK
//  (H+D)+A*B*A*B*A+B+A+B+(H+D)+(H+D)         OK
//  A+B+A+(H+D)+(H+D)+A+B+A+B+(H+D)+(H+D)     OK
//  A+B+A+(H+D)+(H+D)*A+B+A+B+(H+D)+(H+D)     OK
//  A+(A#B#C)#-((A*B+-(A+(A#B#C)#((B#A)+D)))+-D)                          OK
//  (((A*B)+(A+D))*(A+(A#B#C)#-((A*B+-(H#D))+-D)))*(A#C+D*A)+(F*G*H*D*E)  OK
//  (((A*B)+(A+D))*(A+(A#B#C)#-((A*B+-(H#D))+-D)))*(A#C+D*A)+(F*G*H*D*E) +(A#B#C)#-((A*B+-(A+(A#B#C)#((B#A)+D)))+-D)  OK

//  A or ( A xor B xor C ) xor not ( ( A and B or not ( H xor D ) ) or not D )  OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G    OK
//  A and B nor D or A and B nor D or A and B nor D                             OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G   OK
//  A and B or C xor D nan E nor F xnor Gand B or C xor D nan E nor F xnor G    OK
// (((A and B)or(AorD)) and (B and C)) and (A xor C or D and A)    OK