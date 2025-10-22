
import Router from './router';
import { useEffect, useState, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";

const contentLinks = [
        "/inicio",
        "/numeracion/introduccion",
        "/numeracion/contar",
        "/numeracion/computadora",
        "/numeracion/binario_decimal",
        "/numeracion/binario_hexadecimal",
        "/numeracion/ejercicios/reconocimiento",
        "/numeracion/ejercicios/decimal_binario",
        "/numeracion/ejercicios/binario_decimal",
        "/numeracion/ejercicios/binario_hexadecimal",
        "/numeracion/ejercicios/hexadecimal_binario",
        "/numeracion/herramienta/convertidor",
        "/numeracion/herramienta/generador",
        "/boole/introduccion",
        "/boole/variables",
        "/boole/suma",
        "/boole/producto",
        "/boole/negacion",
        "/boole/expresiones",
        "/boole/notacion",
        "/boole/leyes",
        "/boole/representacion",
        "/boole/ejercicios/evaluacion_1",
        "/boole/ejercicios/evaluacion_2",
        "/boole/ejercicios/comparacion",
        "/boole/herramienta/evaluador",
        "/boole/herramienta/comparador",
        "/boole/herramienta/constructor",
        "/compuertas/introduccion",
        "/compuertas/compuertas",
        "/compuertas/yes",
        "/compuertas/not",
        "/compuertas/and",
        "/compuertas/or",
        "/compuertas/xor",
        "/compuertas/nan",
        "/compuertas/nor",
        "/compuertas/xnor",
        "/compuertas/circuitos",
        "/compuertas/conjunto",
        "/compuertas/ejercicios/reconocimiento",
        "/compuertas/ejercicios/circuitos_funciones",
        "/compuertas/ejercicios/compuertas_tablas",
        "/compuertas/emulador/compuerta",
        "/compuertas/emulador/circuito",
        "/compuertas/herramienta/visor",
        "/bibliografia",
        "/creditos",
    ]


const Content = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const indexLink = contentLinks.indexOf(useLocation().pathname);

    useLayoutEffect(() => {
        setPageIndex((indexLink >= 0) ? indexLink : 0);
        window.scrollTo(0, 0);
    });

    const prevLink = (pageIndex > 0) ? contentLinks[pageIndex - 1] : "";
    const nextLink = (pageIndex < contentLinks.length - 1) ? contentLinks[pageIndex + 1] : "";

    return (
        <div className='box-content'>
            <div style={{width:"100%", display:'table-row'}}>
                <Navbar simple='false' prevLink={prevLink} nextLink={nextLink} index={pageIndex} />
                <p></p>
            </div>
            <div style={{width:"100%", display:'table-row'}}>
                <Router />
            </div>
            <div style={{width:"100%", display:'table-row'}}>
                <Navbar simple='true' prevLink={prevLink} nextLink={nextLink} index={pageIndex} />
            </div>
        </div>
    );
}

export default Content;