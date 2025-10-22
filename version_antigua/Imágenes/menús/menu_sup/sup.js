if(typeof(loc)=="undefined"||loc==""){
	var loc="";
	if(document.body&&document.body.innerHTML){
		var tt=document.body.innerHTML.toLowerCase();
		var last=tt.indexOf("sup.js\"");
		if(last>0){
			var first=tt.lastIndexOf("\"",last);
			if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);
			};
		};
	};

var bd=2;
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".sup_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#555691;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.sup_plain:link, a.sup_plain:visited{text-align:left;background-color:#555691;color:#f8f9f9;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.sup_plain:hover, a.sup_plain:active{background-color:#000066;color:#f5f5f7;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.sup_l:link, a.sup_l:visited{text-align:left;background:#555691 url("+loc+"sup_l.gif) no-repeat right;color:#f8f9f9;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.sup_l:hover, a.sup_l:active{background:#000066 url("+loc+"sup_l2.gif) no-repeat right;color: #f5f5f7;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:12pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0xf5f5f7;
var bc=0x000066;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,5,2)
mainMenuItem("sup_b1",".gif",20,79,"javascript:;","","Contenido",2,2,"sup_plain");
//mainMenuItem("sup_b2",".gif",20,79,"javascript:;","","Ayuda",2,2,"sup_plain");
//mainMenuItem("sup_b3",".gif",20,79,"javascript:;","","Créditos",2,2,"sup_plain");
endMainMenu("",0,0);

startSubmenu("sup_b1_3_3","sup_menu",300);
submenuItem("Emulador de compuertas lógicas",loc+"../../../Páginas/Práctica/p_compuertas.html","","sup_plain");
submenuItem("Emulador de circuitos combinatorios",loc+"../../../Páginas/Práctica/p_emular_circuito.html","","sup_plain");
submenuItem("Visor de circuitos combinatorios",loc+"../../../Páginas/Práctica/p_visor_circuito.html","","sup_plain");
endSubmenu("sup_b1_3_3");

startSubmenu("sup_b1_3_2","sup_menu",350);
submenuItem("Reconocimiento de compuertas lógicas",loc+"../../../Páginas/ejercicios/e_compuertas_2.htm","","sup_plain");
submenuItem("Relación entre circuitos y funciones booleanas",loc+"../../../Páginas/ejercicios/e_compuertas_3.htm","","sup_plain");
submenuItem("Relación entre compuertas lógicas y sus tablas",loc+"../../../Páginas/ejercicios/e_compuertas_1.htm","","sup_plain");
endSubmenu("sup_b1_3_2");

startSubmenu("sup_b1_3_1","sup_menu",290);
submenuItem("Introducción",loc+"../../../Páginas/__c_teoría_introducción.html","","sup_plain");
submenuItem("Las compuertas",loc+"../../../Páginas/__c_teoría_compuertas.html","","sup_plain");
submenuItem("Compuerta BUFFER",loc+"../../../Páginas/__c_teoría_com_yes.html","","sup_plain");
submenuItem("Compuerta NOT",loc+"../../../Páginas/__c_teoría_com_not.html","","sup_plain");
submenuItem("Compuerta AND",loc+"../../../Páginas/__c_teoría_com_and.html","","sup_plain");
submenuItem("Compuerta OR",loc+"../../../Páginas/__c_teoría_com_or.html","","sup_plain");
submenuItem("Compuerta XOR",loc+"../../../Páginas/__c_teoría_com_xor.html","","sup_plain");
submenuItem("Compuerta NAN",loc+"../../../Páginas/__c_teoría_com_nan.html","","sup_plain");
submenuItem("Compuerta NOR",loc+"../../../Páginas/__c_teoría_com_nor.html","","sup_plain");
submenuItem("Compuerta XNOR",loc+"../../../Páginas/__c_teoría_com_xnor.html","","sup_plain");
submenuItem("Circuitos lógicos",loc+"../../../Páginas/__c_teoría_circuitos.html","","sup_plain");
submenuItem("Conjunto de compuertas completo",loc+"../../../Páginas/__c_teoría_conjunto_completo.html","","sup_plain");
endSubmenu("sup_b1_3_1");

startSubmenu("sup_b1_3","sup_menu",160);
mainMenuItem("sup_b1_3_1","Elementos teóricos",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_3_2","Para ejercitar",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_3_3","En la práctica",0,0,"javascript:;","","",1,1,"sup_l");
endSubmenu("sup_b1_3");

startSubmenu("sup_b1_2_3","sup_menu",330);
submenuItem("Evaluador de expresiones booleanas",loc+"../../../Páginas/Práctica/p_calcula_bool.html","","sup_plain");
submenuItem("Comparador de expresiones booleanas",loc+"../../../Páginas/Práctica/p_equivalencia_bool.html","","sup_plain");
submenuItem("Generador de expresiones booleanas",loc+"../../../Páginas/Práctica/p_edit_table_bool.html","","sup_plain");
endSubmenu("sup_b1_2_3");

startSubmenu("sup_b1_2_2","sup_menu",330);
submenuItem("Evaluación de expresiones booleanas (1)",loc+"../../../Páginas/ejercicios/e_bool_1.htm","","sup_plain");
submenuItem("Evaluación de expresiones booleanas (2)",loc+"../../../Páginas/ejercicios/e_bool_2.htm","","sup_plain");
submenuItem("Comparación entre expresiones booleanas",loc+"../../../Páginas/ejercicios/e_bool_3.htm","","sup_plain");
endSubmenu("sup_b1_2_2");

startSubmenu("sup_b1_2_1","sup_menu",370);
submenuItem("Introducción",loc+"../../../Páginas/__b_teoría_introducción.html","","sup_plain");
submenuItem("Variables",loc+"../../../Páginas/__b_teoría_variables.html","","sup_plain");
submenuItem("Operación suma",loc+"../../../Páginas/__b_teoría_suma.html","","sup_plain");
submenuItem("Operación producto",loc+"../../../Páginas/__b_teoría_producto.html","","sup_plain");
submenuItem("Operación negación",loc+"../../../Páginas/__b_teoría_negación.html","","sup_plain");
submenuItem("Expresiones compuestas",loc+"../../../Páginas/__b_teoría_ex_compuestas.html","","sup_plain");
submenuItem("Formas de notación del Álgebra de Boole",loc+"../../../Páginas/__b_teoría_notación.html","","sup_plain");
submenuItem("Leyes fundamentales",loc+"../../../Páginas/__b_teoría_leyes.html","","sup_plain");
submenuItem("Modos de representación de funciones booleanas",loc+"../../../Páginas/__b_teoría_representación.html","","sup_plain");
endSubmenu("sup_b1_2_1");

startSubmenu("sup_b1_2","sup_menu",160);
mainMenuItem("sup_b1_2_1","Elementos teóricos",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_2_2","Para ejercitar",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_2_3","En la práctica",0,0,"javascript:;","","",1,1,"sup_l");
endSubmenu("sup_b1_2");

startSubmenu("sup_b1_1_3","sup_menu",320);
submenuItem("Convertidor de sistemas de numeración",loc+"../../../Páginas/Práctica/p_conver_numer.html","","sup_plain");
submenuItem("Generador de series consecutivas",loc+"../../../Páginas/Práctica/p_serie_numer.html","","sup_plain");
endSubmenu("sup_b1_1_3");

startSubmenu("sup_b1_1_2","sup_menu",340);
submenuItem("Reconocimiento de sistemas de numeración",loc+"../../../Páginas/ejercicios/e_numer_1.htm","","sup_plain");
submenuItem("Conversión de decimal a binario",loc+"../../../Páginas/ejercicios/e_numer_3.htm","","sup_plain");
submenuItem("Conversión de binario a decimal",loc+"../../../Páginas/ejercicios/e_numer_2.htm","","sup_plain");
submenuItem("Conversión de binario a hexadecimal",loc+"../../../Páginas/ejercicios/e_numer_4.html","","sup_plain");
submenuItem("Conversión de hexadecimal a binario",loc+"../../../Páginas/ejercicios/e_numer_5.htm","","sup_plain");
endSubmenu("sup_b1_1_2");

startSubmenu("sup_b1_1_1","sup_menu",380);
submenuItem("Introducción",loc+"../../../Páginas/__s_teoría_introducción.html","","sup_plain");
submenuItem("El proceso de contar",loc+"../../../Páginas/__s_teoría_contar.html","","sup_plain");
submenuItem("Los sistemas de numeración y la computadora",loc+"../../../Páginas/__s_teoría_sist_num_comput.html","","sup_plain");
submenuItem("Transformación entre sistema binario y decimal",loc+"../../../Páginas/__s_teoría_bin_decimal.html","","sup_plain");
submenuItem("Transformación entre sistema binario y hexadecimal",loc+"../../../Páginas/__s_teoría_bin_hexa.html","","sup_plain");
endSubmenu("sup_b1_1_1");

startSubmenu("sup_b1_1","sup_menu",160);
mainMenuItem("sup_b1_1_1","Elementos teóricos",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_1_2","Para ejercitar",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_1_3","En la práctica",0,0,"javascript:;","","",1,1,"sup_l");
endSubmenu("sup_b1_1");

startSubmenu("sup_b1","sup_menu",200);
mainMenuItem("sup_b1_1","Sistemas de numeración",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_2","Álgebra de Boole",0,0,"javascript:;","","",1,1,"sup_l");
mainMenuItem("sup_b1_3","Compuertas lógicas",0,0,"javascript:;","","",1,1,"sup_l");
submenuItem("Ayuda",loc+"../../../Páginas/ayu_bib_cred/ayuda.html","","sup_plain");
submenuItem("Bibliografía",loc+"../../../Páginas/ayu_bib_cred/biblio.html","","sup_plain");
submenuItem("Créditos",loc+"../../../Páginas/ayu_bib_cred/creditos.html","","sup_plain");
endSubmenu("sup_b1");

loc="";
