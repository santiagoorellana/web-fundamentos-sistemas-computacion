import InputWithKeyboard from "./input_with_keyboard";
import { genera_circuito } from "./lib_visor_circuito";

const CompuertasHerramientaVisor = () => {

        const callbackOnClic = (text1, text2, div) => {
            genera_circuito(text1, div);
        }
    
        return (
            <InputWithKeyboard 
                title="Visor de Circuitos Lógicos"
                description="Para visualizar la estructura de un circuito lógico, debe introducir la descripción del mismo en notación electrónica y pulsar el botón “Mostrar circuito”. "
                type="gates"
                initialText1="A or ( A xor B xor C ) xor not ( ( A and B or not ( H xor D ) ) or not D )" 
                actionLabel="Mostrar circuito" 
                actionCallback={callbackOnClic}
            />
        )
    }

export default CompuertasHerramientaVisor;