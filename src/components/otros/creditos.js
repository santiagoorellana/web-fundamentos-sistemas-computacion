import { Autor, Email, Movil, LugarFecha } from "./autor_data";

const Creditos = () => {
    return (
        <>
            <h4>Créditos</h4>
            <p>La presente aplicación es la versión 2.0 rediseñada y reprogramada, de una aplicación diseñada y elaborada en 2009, la cual utilizó el autor como trabajo de tesis de Licenciatura y fue una propuesta para dar solución a la necesidad de perfeccionar el proceso enseñanza-aprendizaje del Tema 4 "Fundamentos de los Sistemas de Computación" contenido en la asignatura "Arquitectura de Computadoras" que se impartían en los Institutos Politécnicos de Informática en Cuba. La versión antigua fue programada con HTML, CSS y JavaScript nativo.</p>
            <p>Esta versión actual 2.0, rediseñada y reprogramada en 2023, conserva el mismo contenido teórico que su anterior versión, pero introduce mejoras en la programación, utilizando las bondades del HTML5, CSS3 y JavaScript con las librerías de ReactJS. </p>
            <p>Aunque inicialmente, el contenido de la presente aplicación fue orientado a un tema específico de una asignatura específica en Cuba, los conocimientos y herramientas presentes en la aplicación pueden ser útiles para todo aquel que le interese estudiar los fundamentos del funcionamiento de las computadoras y circuitos digitales modernos.</p>
            <p>autor: <b><Autor /></b></p>
            <p>email: <b><Email /></b></p>
            <p>movil: <b><Movil /></b></p>
            <p><b><LugarFecha /></b></p>
        </>
    )
}

export default Creditos;