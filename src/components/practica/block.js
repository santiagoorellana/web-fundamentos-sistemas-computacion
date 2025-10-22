import circuit_1 from "./blocks/circuit_1.gif";
import circuit_2 from "./blocks/circuit_2.gif";
import circuit_3 from "./blocks/circuit_3.gif";
import circuit_4 from "./blocks/circuit_4.gif";
import circuit_5 from "./blocks/circuit_5.gif";
import circuit_6 from "./blocks/circuit_6.gif";
import circuit_7 from "./blocks/circuit_7.gif";
import circuit_8 from "./blocks/circuit_8.gif";


var imagesSelector = [
    null,
    circuit_1,
    circuit_2,
    circuit_3,
    circuit_4,
    circuit_5,
    circuit_6,
    circuit_7,
    circuit_8
];


const Block = ({inputs, onClic, output}) => {

    const styles1 = {
        height:'240px',
        display:'flex',
        alignItems: 'center'
    }

    const styles2 = {float:'left'}

    const styleCheck = {
        fontFamily:'arial',
        fontSize:'12pt',
        fontWeight:'bold',
        color:'#000066'
    }

    const styleInput = {
        width:'32px',
        height:'26px',
        bordeStyle:'solid',
        maginRight:'0px'
    }

    let inputsElements = [];
    let image = null;
    let outputElement = null;
    if (inputs != null){
        inputs.forEach((element, index) => {
            inputsElements.push(
                <div style={styleInput} key={"div" + index}>
                    {inputs[index]+" "} 
                    <input type="checkbox" id={"checkbox" + index} style={styleCheck} onClick={onClic} />
                </div>);
        });
        if (inputs != null){
            if (inputs.length > 0){
                image = <img src={imagesSelector[inputs.length]} width="200px" height="200px" />; 
            }
        outputElement = (inputs.length > 0) ? <input type="checkbox" style={styleCheck} checked={output} readOnly /> : null;
        }
    }
    return (
        <div id="block" style={styles1} >
            <div key="0" style={styles2} >{inputsElements}</div>
            <div key="1" style={styles2} >{image}</div>
            <div key="2" style={styles2} >{outputElement}</div>
        </div>
    )
}

export default Block;
