
import Button from 'react-bootstrap/Button';
import { Table, Stack, Form, Alert, Badge, Figure } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ShowModalEvaluation from './show_modal_evaluation';
import  {FaSyncAlt, FaCheck } from "react-icons/fa";
import { Result } from './results';
import ImagesSelect from './images_select';

// Nombres de variables. La cantidad de variables sirve como index de este array.
const varsNames = [
    [],
    ["A"],
    ["A","B"],
    ["A","B","C"],
    ["A","B","C","D"],
    ["A","B","C","D","E"]
];


// Conteo binario de cinco variables.  La cantidad de variables sirve como index de este array.
const binariCounterLengths = [0, 2, 4, 8, 16, 32];

// Conteo binario de cinco variables.
const binariCounter = [
    [0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0], [0, 0, 1, 0, 1], [0, 0, 1, 1, 0], [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 1],
    [0, 1, 1, 0, 0], [0, 1, 1, 0, 1], [0, 1, 1, 1, 0], [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [1, 0, 0, 1, 0], [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0], [1, 0, 1, 0, 1], [1, 0, 1, 1, 0], [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0], [1, 1, 0, 0, 1], [1, 1, 0, 1, 0], [1, 1, 0, 1, 1],
    [1, 1, 1, 0, 0], [1, 1, 1, 0, 1], [1, 1, 1, 1, 0], [1, 1, 1, 1, 1]
];

/**
 * Componente que muestra una pregunta, una evaluación y recibe la respuesta del usuario.
 * @param {string} id - identificador del componente.
 * @param {string} index - Numero de orden que identifica a la pregunta. Se muestra como una letra.
 * Se emplea para conformar el identificador del componente agregándole delante otra cadena:
 * let id = prefix + ordinal;
 * @returns {string} question - Contiene el texto de la pregunta que debe responder el usuario.
 * @param {string[]} options - Lista de las opciones que se deben presentar en el componente SELECT. 
 */
const Question = ({id, index, vars, values, options, evaluation, images=false, width='400px', disabled}) => {
    const ordinalChar = Array.from("abcdefghijklmnopqrstuvwxyz"); 
    let inputResponse = null;
    if (images == true){
        inputResponse = <ImagesSelect id={id} options={options} width={200} disabled={disabled}/>;
    }else{
        if (options.length > 0){
            const selectOptions = [<option value=""></option>];
            options.forEach((element) => {
                selectOptions.push(<option value={element}>{element}</option>);
            });
            inputResponse = 
                <Form.Select id={id} disabled={disabled} >
                    {selectOptions}
                </Form.Select>;
        }
    }

    //Crea las cabeceras de la tabla.
    let heads = [];
    varsNames[vars].forEach((name, index) => {
        if (index <= vars) heads.push(<th>{name}</th>);
    })
    heads.push(<th>{inputResponse}</th>);

    //Crea las filas de la tabla.
    let rows = [];
    binariCounter.forEach((element, index) => {
        if (index < binariCounterLengths[vars]){
            let varsValues = [];
            element.forEach((itemVar, indexVar) => {
                if (indexVar >= element.length - vars){
                    varsValues.push(
                        <td>{element[indexVar]}</td>
                    );
                }
            })
            rows.push(
                <tr>
                    {varsValues}
                    <td>{values[index]}</td>
                </tr>
            );
        }
    });

    return (
        <Table striped bordered hover variant="light" style={{
            minWidth:width, 
            maxWidth:width, 
            display:'inline-block',
            color:'#000088', 
            fontSize:'20px',
            textAlign:"center",
            margin:'5px'
        }}>
            <thead>
                <tr>
                    <th colSpan={vars+1} >
                        {ordinalChar[index]+")"}
                    </th>
                </tr>
                <tr>
                    {heads}
                </tr>
            </thead>
            <tbody>
                {rows}
                <tr>
                    <td colSpan={vars+1}>
                        <Result evaluation={evaluation} />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}


/**
 * Crea un array con todos los componentes de preguntas.
 * @returns {} questions - jbkzjvb
 * @param {string[]} options - Lista de las opciones que se deben presentar en los componentes SELECT. 
 * Si no se pasa el parámetro, el componente SELECT se sustituye por un componente TEXT.
 */
const CreateAllQuestions = ({questions, images, width, disabled}) => {
    let questionsElements = [];
    questions.forEach(element => {
        questionsElements.push(
            <Question 
                index={element[0]}
                vars={element[1]}
                values={element[2]} 
                options={element[3]} 
                id={element[5]}
                evaluation={element[6]}
                images={images}
                disabled={disabled}
                width={width}
            />
        );
    });
    return (
        <>
            {questionsElements}
        </>
    )
}


/**
 * Muestra un ejercicio de seleccionar respuesta correcta.
 * @param {string} title - Texto superior con el nombre o enunciado del ejercicio de preguntas.
 * @param {string} description - Texto que describe cómo se debe realizar el ejercicio de preguntas.
 * @param {string[2][]} questions - Lista de pregustas y respuestas que deben presentarse en el ejercicio.
 * @param {string[]} options - Lista de las opciones que se deben presentar en los componentes SELECT. 
 * Si no se pasa el parámetro, el componente SELECT se sustituye por un componente TEXT.
 * @param {boolean} random - Indica si las preguntas se deben presentar de forma aleatoria.
 * @param {int} count - Indica la cantidad de preguntas que se deben seleccionar para mostrar.
 */
const QuestionsType2 = ({title, description, questions, images, random, count, width}) => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [evaluations, setEvaluations] = useState(0);
    const [modalShow, setModalShow] = useState(0);
    const [disabled, setDisabled] = useState(false);

    function shuffleArray(arrayData) {
        let array = arrayData;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Selecciona las preguntas que se van a mostrar al usuario y agrega datos.
    function selectQuestions(){
        let filtered = questions;
        if (random != null){
            filtered = shuffleArray(filtered);
        }
        if (count != null){
            filtered = filtered.slice(0, (count <= 26) ? count : 26);
        }
        filtered = filtered.map(([vars, values, options, response], index) => (
            [index, vars, values, options, response, "questionResponse_"+index, null]
        ));

        filtered.forEach(item => {
            if (document.getElementById(item[5]) !== null){
                if (images){
                    document.getElementById(item[5]).value = "0";
                }else{
                    document.getElementById(item[5]).value = "";
                }
            }
        });

        setDisabled(false);
        setSelectedQuestions(filtered);
        setEvaluations(0);
    }

    //Inicia el componente.
    useEffect(()=>{selectQuestions(); }, []);

    //Cambia las preguntas.
    function onClickChangeQuestions(e) {
        selectQuestions();
    }
        
    
    //Evalua las respuestas del usuario por cada pregunta.
    function onClickEvaluateResponses(e) {
        let corrects = 0;
        let total = 0;
        let modified = selectedQuestions;

        //Contabiliza las preguntas respondidas.
        modified.forEach(item => {if (document.getElementById(item[5]).value != "") total += 1});

        //Si se han respondido todas las preguntas, las evalua y muestra al usuario.
        if (total == count){
            modified.forEach(element => {
                let userResponse = document.getElementById(element[5]).value.toLowerCase().trim();
                element[6] = userResponse == element[4].toLowerCase().trim();
                console.log(userResponse+" == "+element[4].toLowerCase().trim());
                corrects = element[6] ? corrects + 1 : corrects;
            });
    
            setSelectedQuestions(modified);
            setEvaluations(evaluations + 1);
            setDisabled(true);
    
            if (corrects == total){
                setModalShow(1);
            }
        }else{
            setModalShow(2);
        }
    }

    return (
        <div>
            <div><h4>{title}</h4></div>
            <Alert key="1" variant="primary" style={{paddingTop:'0px', paddingBottom:'0px'}}><p>{description}</p></Alert>
            <div>
                <CreateAllQuestions 
                    questions={selectedQuestions} 
                    images={images}
                    width={width} 
                    disabled={disabled}
                />
            </div>
            <Stack direction="horizontal" gap={3} style={{textAlign:'center', marginBottom:'25px'}} >
                <div className="ms-auto"></div>
                <Button id="evaluar" variant="primary" onClick={onClickChangeQuestions}>
                    <FaSyncAlt fontSize={26} /> Reintentar
                </Button>
                <Button 
                    id="evaluar" 
                    variant="warning" 
                    onClick={onClickEvaluateResponses} 
                    disabled={disabled}
                >
                    <FaCheck fontSize={26} /> Evaluar respuestas
                </Button>
                <div className="ms-auto"></div>
            </Stack>
            <ShowModalEvaluation show={modalShow} onHide={() => setModalShow(0)} />
        </div>
    )
}

export default QuestionsType2;