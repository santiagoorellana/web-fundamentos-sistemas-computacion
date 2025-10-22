
import { Table, Button } from "react-bootstrap";


const btnStyle = {
    width: '55px',
    height: '30px',
    padding: '0px',
    fontSize:'14px',
    marginBottom:'0px'
}

const tableStyle = {
    width:'auto', 
    height:'auto',

    paddingTop:'0px', 
    paddingBottom:'0px', 
    marginTop:'5px', 
    marginBottom:'5px'
}

const Key = ({id, variant, onClick}) => {
    return (
        <td key={id}><Button style={btnStyle} variant={variant} onClick={()=>onClick(id)} >{id}</Button></td>
    )
}


const KeyboardVars = ({onKeyClick}) => {
    
    return (
        <Table borderless margin={0} variant="primary" style={tableStyle} key={0}>
            <tbody>
                <tr key={0}>
                    <Key id={"A"} variant="primary" onClick={onKeyClick} />
                    <Key id={"B"} variant="primary" onClick={onKeyClick} />
                </tr>
                <tr key={1}>
                    <Key id={"C"} variant="primary" onClick={onKeyClick} />
                    <Key id={"D"} variant="primary" onClick={onKeyClick} />
                </tr>
                <tr key={2}>
                    <Key id={"E"} variant="primary" onClick={onKeyClick} />
                    <Key id={"F"} variant="primary" onClick={onKeyClick} />
                </tr>
                <tr key={3}>
                    <Key id={"G"} variant="primary" onClick={onKeyClick} />
                    <Key id={"H"} variant="primary" onClick={onKeyClick} />
                </tr>
            </tbody>
        </Table>
    )
}


const KeyboardBoolean = ({onKeyClick}) => {
    return (
        <>
            <div key={4} style={{float:'left', width:'auto'}}>                        
                <KeyboardVars onKeyClick={onKeyClick} />
            </div>
            <div key={5} style={{float:'left', width:'auto'}}>                        
                <Table borderless variant="primary" style={tableStyle} key={1}>
                    <tbody>
                        <tr key={0}>
                            <Key id={"["} variant="success" onClick={onKeyClick} />
                            <Key id={"]"} variant="success" onClick={onKeyClick} />
                        </tr>
                        <tr key={1}>
                            <Key id={"("} variant="success" onClick={onKeyClick} />
                            <Key id={")"} variant="success" onClick={onKeyClick} />
                        </tr>
                        <tr key={2}>
                            <Key id={"+"} variant="info" onClick={onKeyClick} />
                            <Key id={"'"} variant="info" onClick={onKeyClick} />
                        </tr>
                        <tr key={3}>
                            <Key id={""} variant="" onClick={onKeyClick} />
                            <Key id={"X"} variant="danger" onClick={onKeyClick} />
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}


const KeyboardLogicGates = ({onKeyClick}) => {
    return (
        <>
            <div style={{float:'left', width:'auto'}}>
                <KeyboardVars onKeyClick={onKeyClick} />
            </div>
            <div style={{float:'left', width:'auto'}}>
                <Table borderless variant="primary"  style={tableStyle} key={2}>
                    <tbody>
                        <tr key={0}>
                            <Key id={"("} variant="success" onClick={onKeyClick} />
                            <Key id={")"} variant="success" onClick={onKeyClick} />
                        </tr>
                        <tr key={1}>
                            <Key id={" and "} variant="info" onClick={onKeyClick} />
                            <Key id={" nan "} variant="info" onClick={onKeyClick} />
                        </tr>
                        <tr key={2}>
                            <Key id={" or "} variant="info" onClick={onKeyClick} />
                            <Key id={" nor "} variant="info" onClick={onKeyClick} />
                        </tr>
                        <tr key={3}>
                            <Key id={" xor "} variant="info" onClick={onKeyClick} />
                            <Key id={" xnor "} variant="info" onClick={onKeyClick} />
                        </tr>
                        <tr key={4}>
                            <Key id={" not "} variant="info" onClick={onKeyClick} />
                            <Key id={"X"} variant="danger" onClick={onKeyClick} />
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}


const Keyboard = ({type, actionLabel, onKeyClick, onActionClick}) => {
    let keyboardElement = [];
    if (type == "boolean"){
        keyboardElement.push(<KeyboardBoolean key="0" onKeyClick={onKeyClick} />);
    }
    if (type == "gates"){
        keyboardElement.push(<KeyboardLogicGates key="0" onKeyClick={onKeyClick} />);
    }
    return(
        <div  key="0" style={{float:'left', width:'auto'}}>
            {keyboardElement}
            <div  key="1" style={{width:'100%'}}>
                <Button variant="warning" onClick={onActionClick} style={{width:'100%'}}>
                    {actionLabel}
                </Button>
            </div>
        </div>
    )
}

export default Keyboard;
