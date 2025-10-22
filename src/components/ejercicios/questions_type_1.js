
import Button from 'react-bootstrap/Button';
import { Table, Stack, Form, Alert, Badge, Figure } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ShowModalEvaluation from './show_modal_evaluation';
import  {FaSyncAlt, FaCheck, FaTimes } from "react-icons/fa";
import { Result, styleHead } from './results';


/**
 * Componente que muestra una pregunta, una evaluación y recibe la respuesta del usuario.
 * @param {string} id - identificador del componente.
 * @param {string} index - Numero de orden que identifica a la pregunta. Se muestra como una letra.
 * Se emplea para conformar el identificador del componente agregándole delante otra cadena:
 * let id = prefix + ordinal;
 * @returns {string} question - Contiene el texto de la pregunta que debe responder el usuario.
 * @param {string[]} options - Lista de las opciones que se deben presentar en el componente SELECT. 
 */
const Question = ({id, index, image, question, options, evaluation, width='80px', imgWidth, imgMax, disabled}) => {
    const ordinalChar = Array.from("abcdefghijklmnopqrstuvwxyz"); 
    let inputResponse = <Form.Control type="text" id={id} disabled={disabled} />;
    if (options != null){
        if (options.length > 0){
            const selectOptions = [<option></option>];
            options.forEach((element) => {
                selectOptions.push(<option value={element}>{element}</option>);
            });
            inputResponse = 
                <Form.Select id={id} aria-label="Default select example" disabled={disabled} >
                    {selectOptions}
                </Form.Select>;
        }
    }

    let imageElement = "";
    if (image != null){
        if (image != ""){
            imageElement = 
            <div  style={{width:'30%', minWidth:'50px'}}>
                <img src={image} style={{width:imgWidth, maxWidth:imgMax}} />
            </div>;
        }
    }

    return (
        <Stack direction="horizontal" gap={1} style={{color:'#000088', fontSize:'20px'}} >
            <div >{ordinalChar[index]+")"}</div>
            {imageElement}
            <div style={{textAlign:'left'}}>{question}</div>
            <div className="ms-auto" style={{maxWidth:width, minWidth:width}}>{inputResponse}</div>
            <div className="vr" />
            <Result evaluation={evaluation} />
        </Stack>
    )
}


/**
 * Crea un array con todos los componentes de preguntas.
 * @returns {} questions - jbkzjvb
 * @param {string[]} options - Lista de las opciones que se deben presentar en los componentes SELECT. 
 * Si no se pasa el parámetro, el componente SELECT se sustituye por un componente TEXT.
 */
const CreateAllQuestions = ({questions, options, width, imgWidth, imgMax, disabled}) => {
    let questionsElements = [];
    questions.forEach(element => {
        questionsElements.push(
            <tr>
                <Question 
                    index={element[4]}
                    image={element[0]}
                    question={element[1]} 
                    id={element[3]}
                    options={options} 
                    evaluation={element[5]}
                    width={width}
                    imgWidth={imgWidth}
                    imgMax={imgMax}
                    disabled={disabled}
                />
            </tr>
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
const QuestionsType1 = ({title, description, questionTitle, responseTitle, questions, options, random, count, width, imgWidth, imgMax}) => {
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
        filtered = filtered.map(([image, question, response], index) => (
            [image, question, response, "questionResponse_"+index, index, null]
        ));

        filtered.forEach(item => {
            //console.log(item[3]);
            if (document.getElementById(item[3]) !== null){
                document.getElementById(item[3]).value = "";
            }
        });

        setDisabled(false);
        setSelectedQuestions(filtered);
        setEvaluations(0);
    }

    //Inicia el componente seleccionando un conjunto de preguntas para mostrar.
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
        modified.forEach(item => {if (document.getElementById(item[3]).value != "") total += 1});

        //Si se han respondido todas las preguntas, las evalua y muestra al usuario.
        if (total == count){
            modified.forEach(element => {
                let userResponse = document.getElementById(element[3]).value.toLowerCase().trim();
                element[5] = userResponse == element[2].toLowerCase().trim();
                corrects = element[5] ? corrects + 1 : corrects;
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <Stack direction="horizontal" gap={1} style={{color:'#000088', fontSize:'20px'}} >
                            <div style={{textAlign:'left'}}>
                                <h5>
                                    <Badge bg="secundary" style={styleHead}>
                                        {questionTitle}
                                    </Badge>
                                </h5>
                            </div>
                            <div className="ms-auto" style={{maxWidth:width, minWidth:width}}>
                                <h5>
                                    <Badge bg="secundary" style={styleHead}>
                                        {responseTitle}
                                    </Badge>
                                </h5>
                            </div>
                            <div className="vr" />
                            <Result evaluation={"..."} />
                        </Stack>
                    </tr>
                </thead>
                <tbody>
                    <CreateAllQuestions 
                        questions={selectedQuestions} 
                        options={options} 
                        width={width} 
                        imgWidth={imgWidth}
                        imgMax={imgMax}
                        disabled={disabled}
                    />
                </tbody>
            </Table>
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

export default QuestionsType1;