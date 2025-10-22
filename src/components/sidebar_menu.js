
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';


const SidebarMenu = () => {
    const { collapseSidebar } = useProSidebar();
    const backgroundColor = "#304060";    //303060   304060
    const backgroundColorHover = "#0b5ed7";
  
    return (
      <div style={{ display:'flex', height:'100%', borderStyle:'none' }}>
        <Sidebar 
            width='350px'
            collapsedWidth='80px'
            breakPoint='sm'
            transitionDuration='0'
            closeOnClick='true'
            customBreakPoint='700px'
            backgroundColor={backgroundColor} 
        >
            <Menu menuItemStyles={{
                //Personaliza los elementos del menú según su gerarquía.
                button: ({ level, active, disabled }) => {
                    if (level === 0){
                        return { 
                            color:'#ffffff', 
                            fontSize:22, 
                            backgroundColor:backgroundColor, 
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                    if (level === 1){
                        return { 
                            color:'#ffffff', 
                            fontSize:20, 
                            backgroundColor:backgroundColor,
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                    if (level === 2){
                        return { 
                            color:'#aaaaaa', 
                            fontSize:18, 
                            backgroundColor:backgroundColor,
                            '&:hover': {
                                backgroundColor:backgroundColorHover
                            }
                        } 
                    }
                },
            }}>
            <SubMenu label="Sistemas de numeración">
              <SubMenu label="Elementos teóricos">
                <MenuItem component={<Link to="/numeracion/introduccion" />}>Introducción</MenuItem>  
                <MenuItem component={<Link to="/numeracion/contar" />}>El proceso de contar</MenuItem>
                <MenuItem component={<Link to="/numeracion/computadora" />}>Numeración en computadora</MenuItem>
                <MenuItem component={<Link to="/numeracion/binario_decimal" />}>Binario / Decimal</MenuItem>
                <MenuItem component={<Link to="/numeracion/binario_hexadecimal" />}>Binario / Hexadecimal</MenuItem>
              </SubMenu>          
              <SubMenu label="Para ejercitar">
                <MenuItem component={<Link to="/numeracion/ejercicios/reconocimiento" />}>Reconocer sistema de numeración</MenuItem>
                <MenuItem component={<Link to="/numeracion/ejercicios/decimal_binario" />}>Convertir decimal a binario</MenuItem>
                <MenuItem component={<Link to="/numeracion/ejercicios/binario_decimal" />}>Convertir binario a decimal</MenuItem>
                <MenuItem component={<Link to="/numeracion/ejercicios/binario_hexadecimal" />}>Convertir binario a hexadecimal</MenuItem>
                <MenuItem component={<Link to="/numeracion/ejercicios/hexadecimal_binario" />}>Convertir hexadecimal a binario</MenuItem>
              </SubMenu>          
              <SubMenu label="En la práctica">
                <MenuItem component={<Link to="/numeracion/herramienta/convertidor" />}>Convertidor de numeración</MenuItem>
                <MenuItem component={<Link to="/numeracion/herramienta/generador" />}>Generador de series</MenuItem>
              </SubMenu>          
            </SubMenu>          
            <SubMenu label="Álgebra de Boole">
              <SubMenu label="Elementos teóricos">
                <MenuItem component={<Link to="/boole/introduccion" />}>Introducción</MenuItem>
                <MenuItem component={<Link to="/boole/variables" />}>Variables</MenuItem>
                <MenuItem component={<Link to="/boole/suma" />}>Operación suma</MenuItem>
                <MenuItem component={<Link to="/boole/producto" />}>Operación producto</MenuItem>
                <MenuItem component={<Link to="/boole/negacion" />}>Operación negación</MenuItem>
                <MenuItem component={<Link to="/boole/expresiones" />}>Expresiones compuestas</MenuItem>
                <MenuItem component={<Link to="/boole/notacion" />}>Formas de notación</MenuItem>
                <MenuItem component={<Link to="/boole/leyes" />}>Leyes fundamentales</MenuItem>
                <MenuItem component={<Link to="/boole/representacion" />}>Representación de funciones</MenuItem>
              </SubMenu>          
              <SubMenu label="Para ejercitar">
                <MenuItem component={<Link to="/boole/ejercicios/evaluacion_1" />}>Evaluar expresiones (1)</MenuItem>
                <MenuItem component={<Link to="/boole/ejercicios/evaluacion_2" />}>Evaluar expresiones (2)</MenuItem>
                <MenuItem component={<Link to="/boole/ejercicios/comparacion" />}>Comparar expresiones</MenuItem>
              </SubMenu>          
              <SubMenu label="En la práctica">
                <MenuItem component={<Link to="/boole/herramienta/evaluador" />}>Evaluador</MenuItem>
                <MenuItem component={<Link to="/boole/herramienta/comparador" />}>Comparador</MenuItem>
                <MenuItem component={<Link to="/boole/herramienta/constructor" />}>Constructor</MenuItem>
              </SubMenu>          
            </SubMenu>          
            <SubMenu label="Compuertas lógicas">
              <SubMenu label="Elementos teóricos">
                <MenuItem component={<Link to="/compuertas/introduccion" />}>Introducción</MenuItem>
                <MenuItem component={<Link to="/compuertas/compuertas" />}>Las compuertas</MenuItem>
                <MenuItem component={<Link to="/compuertas/yes" />}>Compuerta BUFFER</MenuItem>
                <MenuItem component={<Link to="/compuertas/not" />}>Compuerta NOT</MenuItem>
                <MenuItem component={<Link to="/compuertas/and" />}>Compuerta AND</MenuItem>
                <MenuItem component={<Link to="/compuertas/or" />}>Compuerta OR</MenuItem>
                <MenuItem component={<Link to="/compuertas/xor" />}>Compuerta XOR</MenuItem>
                <MenuItem component={<Link to="/compuertas/nan" />}>Compuerta NAN</MenuItem>
                <MenuItem component={<Link to="/compuertas/nor" />}>Compuerta NOR</MenuItem>
                <MenuItem component={<Link to="/compuertas/xnor" />}>Compuerta XNOR</MenuItem>
                <MenuItem component={<Link to="/compuertas/circuitos" />}>Circuitos lógicos</MenuItem>
                <MenuItem component={<Link to="/compuertas/conjunto" />}>Conjunto completo</MenuItem>
              </SubMenu>          
              <SubMenu label="Para ejercitar">
                <MenuItem component={<Link to="/compuertas/ejercicios/reconocimiento" />}>Reconocer compuertas</MenuItem>
                <MenuItem component={<Link to="/compuertas/ejercicios/circuitos_funciones" />}>Relacionar circuitos y funciones</MenuItem>
                <MenuItem component={<Link to="/compuertas/ejercicios/compuertas_tablas" />}>Relacionar compuertas y tablas</MenuItem>
              </SubMenu>          
              <SubMenu label="En la práctica">
                <MenuItem component={<Link to="/compuertas/emulador/compuerta" />}>Emulador de compuertas</MenuItem>
                <MenuItem component={<Link to="/compuertas/emulador/circuito" />}>Emulador de circuitos</MenuItem>
                <MenuItem component={<Link to="/compuertas/herramienta/visor" />}>Visor de circuitos</MenuItem>
              </SubMenu>          
            </SubMenu>          
            <SubMenu label="Todos los ejercicios">
              <MenuItem component={<Link to="/numeracion/ejercicios/decimal_binario" />}>Convertir decimal a binario</MenuItem>
              <MenuItem component={<Link to="/numeracion/ejercicios/binario_decimal" />}>Convertir binario a decimal</MenuItem>
              <MenuItem component={<Link to="/numeracion/ejercicios/binario_hexadecimal" />}>Convertir binario a hexadecimal</MenuItem>
              <MenuItem component={<Link to="/numeracion/ejercicios/hexadecimal_binario" />}>Convertir hexadecimal a binario</MenuItem>
              <MenuItem component={<Link to="/boole/ejercicios/evaluacion_1" />}>Evaluar expresiones (1)</MenuItem>
              <MenuItem component={<Link to="/boole/ejercicios/evaluacion_2" />}>Evaluar expresiones (2)</MenuItem>
              <MenuItem component={<Link to="/boole/ejercicios/comparacion" />}>Comparar expresiones</MenuItem>
              <MenuItem component={<Link to="/compuertas/ejercicios/reconocimiento" />}>Reconocer compuertas</MenuItem>
              <MenuItem component={<Link to="/compuertas/ejercicios/circuitos_funciones" />}>Relacionar circuitos y funciones</MenuItem>
              <MenuItem component={<Link to="/compuertas/ejercicios/compuertas_tablas" />}>Relacionar compuertas y tablas</MenuItem>
            </SubMenu>
            <SubMenu label="Herramientas">
              <MenuItem component={<Link to="/numeracion/herramienta/convertidor" />}>Convertidor de numeración</MenuItem>
              <MenuItem component={<Link to="/numeracion/herramienta/generador" />}>Generador de series</MenuItem>
              <MenuItem component={<Link to="/boole/herramienta/evaluador" />}>Evaluador</MenuItem>
              <MenuItem component={<Link to="/boole/herramienta/comparador" />}>Comparador</MenuItem>
              <MenuItem component={<Link to="/boole/herramienta/constructor" />}>Constructor</MenuItem>
              <MenuItem component={<Link to="/compuertas/emulador/compuerta" />}>Emulador de compuertas</MenuItem>
              <MenuItem component={<Link to="/compuertas/emulador/circuito" />}>Emulador de circuitos</MenuItem>
              <MenuItem component={<Link to="/compuertas/herramienta/visor" />}>Visor de circuitos</MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/bibliografia" />}>Bibliografía</MenuItem>
            <MenuItem component={<Link to="/creditos" />}>Créditos</MenuItem>
          </Menu>
        </Sidebar>
        <Outlet />
      </div>
    );
}
  

export default SidebarMenu;