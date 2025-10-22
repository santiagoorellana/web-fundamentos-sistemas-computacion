
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import  { 
    FaFile, 
    FaAngleLeft, 
    FaAngleDoubleUp, 
    FaAngleRight, 
    FaBars,
    FaQuestion 
} from "react-icons/fa";
import React, { useState } from 'react';


const styleColor = "primary";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children }, ref) => (
      {children}
  ));


const partB = 
    <>
        <Dropdown as={ButtonGroup} variant={styleColor} >
            <Dropdown.Toggle ><FaBars fontSize={20} /></Dropdown.Toggle>
            <Dropdown.Menu>
                <Link to="/numeracion/introduccion"><Dropdown.Item href="/">Sistemas de numeración</Dropdown.Item></Link>
                <Link to="/boole/introduccion"><Dropdown.Item href="/">Álgebra de Boole</Dropdown.Item></Link>
                <Link to="/compuertas/introduccion"><Dropdown.Item href="/">Compuertas lógicas</Dropdown.Item></Link>
                <Link to="/bibliografia"><Dropdown.Item href="/">Bibliografía</Dropdown.Item></Link>
                <Link to="/creditos"><Dropdown.Item href="/">Créditos</Dropdown.Item></Link>
            </Dropdown.Menu>
        </Dropdown>
        {" "}
        <Link to="/ayuda"><Button variant={styleColor}><FaQuestion fontSize={20} /></Button></Link>
    </>


const Navbar = ({simple, prevLink, nextLink, index}) => {

    const prevButton = (prevLink != "") 
        ? <Link to={prevLink}><Button variant={styleColor}><FaAngleLeft fontSize={20} /></Button></Link>
        : <Button variant={"secondary"}><FaAngleLeft fontSize={20} /></Button>;
    const nextButton = (nextLink != "") 
        ? <Link to={nextLink}><Button variant={styleColor}><FaAngleRight fontSize={20} /></Button></Link> 
        : <Button variant={"secondary"}><FaAngleRight fontSize={20} /></Button>;
        
    const partA = 
        <div style={{display: 'inline-block'}}>
            <Button variant={"secondary"}><FaFile fontSize={20} /> {index}</Button>{" "}
                {prevButton}{" "}
                <Link to="/" ><Button variant={styleColor}><FaAngleDoubleUp fontSize={20} /></Button></Link>{" "}
                {nextButton}
        </div>

    if (simple == 'true'){
        return (<nav style={{textAlign:'right'}}>{partA}</nav>);  
    }else{
        return (<nav style={{textAlign:'left'}}>{partA} {partB}</nav>);
    };
}

export default Navbar;