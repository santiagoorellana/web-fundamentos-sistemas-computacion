
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './otros/inicio';

//Contenido teorico
import NumeracionIntroduccion from './teoria/numeracion_introduccion';
import NumeracionContar from './teoria/numeracion_contar';
import NumeracionComputadora from './teoria/numeracion_computadora';
import NumeracionBinarioDecimal from './teoria/numeracion_binario_decimal';
import NumeracionBinarioHexadecimal from './teoria/numeracion_binario_hexadecimal';

import BooleIntroduccion from './teoria/boole_introduccion';
import BooleVariables from './teoria/boole_variables';
import BooleSuma from './teoria/boole_suma';
import BooleProducto from './teoria/boole_producto';
import BooleNegacion from './teoria/boole_negacion';
import BooleExpresiones from './teoria/boole_expresiones';
import BooleNotacion from './teoria/boole_notacion';
import BooleLeyes from './teoria/boole_leyes';
import BooleRepresentacion from './teoria/boole_representacion';

import CompuertasIntroduccion from './teoria/compuertas_introduccion';
import CompuertasCompuertas from './teoria/compuertas_compuertas';
import CompuertasYes from './teoria/compuertas_yes';
import CompuertasNot from './teoria/compuertas_not';
import CompuertasAnd from './teoria/compuertas_and';
import CompuertasOr from './teoria/compuertas_or';
import CompuertasXor from './teoria/compuertas_xor';
import CompuertasNan from './teoria/compuertas_nan';
import CompuertasNor from './teoria/compuertas_nor';
import CompuertasXnor from './teoria/compuertas_xnor';
import CompuertasCircuitos from './teoria/compuertas_circuitos';
import CompuertasConjunto from './teoria/compuertas_conjunto';

//Ejercicios
import NumeracionEjerciciosReconocimiento from './ejercicios/numeracion_reconocimiento';
import NumeracionEjerciciosDecimalBinario from './ejercicios/numeracion_decimal_binario';
import NumeracionEjerciciosBinarioDecimal from './ejercicios/numeracion_binario_decimal';
import NumeracionEjerciciosBinarioHexadecimal from './ejercicios/numeracion_binario_hexadecimal';
import NumeracionEjerciciosHexadecimalBinario from './ejercicios/numeracion_hexadecimal_binario';

import BooleEjerciciosEvaluacion1 from './ejercicios/boole_evaluacion_1';
import BooleEjerciciosEvaluacion2 from './ejercicios/boole_evaluacion_2';
import BooleEjerciciosComparacion from './ejercicios/boole_comparacion';

import CompuertasEjerciciosReconocimiento from './ejercicios/compuertas_reconocimiento';
import CompuertasEjerciciosCircuitosFunciones from './ejercicios/compuertas_circuitos_funciones';
import CompuertasEjerciciosCompuertasTablas from './ejercicios/compuertas_compuertas_tablas';

//Herramientas y simuladores
import NumeracionHerramientaConvertidor from './practica/numeracion_convertidor';
import NumeracionHerramientaGenerador from './practica/numeracion_generador';

import BooleHerramientaEvaluador from './practica/boole_evaluador';
import BooleHerramientaComparador from './practica/boole_comparador';
import BooleHerramientaConstructor from './practica/boole_constructor';

import CompuertasEmuladorCompuertas from './practica/compuertas_compuerta';
import CompuertasEmuladorCircuito from './practica/compuertas_circuito';
import CompuertasHerramientaVisor from './practica/compuertas_visor';

//Otras paginas
import Bibliografia from './otros/bibliografia';
import Creditos from './otros/creditos';
import Page404 from './otros/404';


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} ></Route>
        <Route path="/inicio" element={<Inicio />} ></Route>

        <Route path="/numeracion/introduccion" element={<NumeracionIntroduccion />} ></Route>
        <Route path="/numeracion/contar" element={<NumeracionContar />} ></Route>
        <Route path="/numeracion/computadora" element={<NumeracionComputadora />} ></Route>
        <Route path="/numeracion/binario_decimal" element={<NumeracionBinarioDecimal />} ></Route>
        <Route path="/numeracion/binario_hexadecimal" element={<NumeracionBinarioHexadecimal />} ></Route>

        <Route path="/numeracion/ejercicios/reconocimiento" element={<NumeracionEjerciciosReconocimiento />}></Route>
        <Route path="/numeracion/ejercicios/decimal_binario" element={<NumeracionEjerciciosDecimalBinario />}></Route>
        <Route path="/numeracion/ejercicios/binario_decimal" element={<NumeracionEjerciciosBinarioDecimal />}></Route>
        <Route path="/numeracion/ejercicios/binario_hexadecimal" element={<NumeracionEjerciciosBinarioHexadecimal />}></Route>
        <Route path="/numeracion/ejercicios/hexadecimal_binario" element={<NumeracionEjerciciosHexadecimalBinario />}></Route>

        <Route path="/numeracion/herramienta/convertidor" element={<NumeracionHerramientaConvertidor />}></Route>
        <Route path="/numeracion/herramienta/generador" element={<NumeracionHerramientaGenerador />}></Route>

        <Route path="/boole/introduccion" element={<BooleIntroduccion />}></Route>
        <Route path="/boole/variables" element={<BooleVariables />}></Route>
        <Route path="/boole/suma" element={<BooleSuma />}></Route>
        <Route path="/boole/producto" element={<BooleProducto />}></Route>
        <Route path="/boole/negacion" element={<BooleNegacion />}></Route>
        <Route path="/boole/expresiones" element={<BooleExpresiones />}></Route>
        <Route path="/boole/notacion" element={<BooleNotacion />}></Route>
        <Route path="/boole/leyes" element={<BooleLeyes />}></Route>
        <Route path="/boole/representacion" element={<BooleRepresentacion />}></Route>

        <Route path="/boole/ejercicios/evaluacion_1" element={<BooleEjerciciosEvaluacion1 />}></Route>
        <Route path="/boole/ejercicios/evaluacion_2" element={<BooleEjerciciosEvaluacion2 />}></Route>
        <Route path="/boole/ejercicios/comparacion" element={<BooleEjerciciosComparacion />}></Route>

        <Route path="/boole/herramienta/evaluador" element={<BooleHerramientaEvaluador />}></Route>
        <Route path="/boole/herramienta/comparador" element={<BooleHerramientaComparador />}></Route>
        <Route path="/boole/herramienta/constructor" element={<BooleHerramientaConstructor />}></Route>

        <Route path="/compuertas/introduccion" element={<CompuertasIntroduccion />}></Route>
        <Route path="/compuertas/compuertas" element={<CompuertasCompuertas />}></Route>
        <Route path="/compuertas/yes" element={<CompuertasYes />}></Route>
        <Route path="/compuertas/not" element={<CompuertasNot />}></Route>
        <Route path="/compuertas/and" element={<CompuertasAnd />}></Route>
        <Route path="/compuertas/or" element={<CompuertasOr />}></Route>
        <Route path="/compuertas/xor" element={<CompuertasXor />}></Route>
        <Route path="/compuertas/nan" element={<CompuertasNan />}></Route>
        <Route path="/compuertas/nor" element={<CompuertasNor />}></Route>
        <Route path="/compuertas/xnor" element={<CompuertasXnor />}></Route>
        <Route path="/compuertas/circuitos" element={<CompuertasCircuitos />}></Route>
        <Route path="/compuertas/conjunto" element={<CompuertasConjunto />}></Route>

        <Route path="/compuertas/ejercicios/reconocimiento" element={<CompuertasEjerciciosReconocimiento />}></Route>
        <Route path="/compuertas/ejercicios/circuitos_funciones" element={<CompuertasEjerciciosCircuitosFunciones />}></Route>
        <Route path="/compuertas/ejercicios/compuertas_tablas" element={<CompuertasEjerciciosCompuertasTablas />}></Route>

        <Route path="/compuertas/emulador/compuerta" element={<CompuertasEmuladorCompuertas />}></Route>
        <Route path="/compuertas/emulador/circuito" element={<CompuertasEmuladorCircuito />}></Route>
        <Route path="/compuertas/herramienta/visor" element={<CompuertasHerramientaVisor />}></Route>

        <Route path="/bibliografia" element={<Bibliografia />}></Route>
        <Route path="/creditos" element={<Creditos />}></Route>

        <Route path="*" element={<Page404 />} ></Route>
    </Routes>
  );
}

export default Router;
