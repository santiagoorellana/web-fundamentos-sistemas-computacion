import "../../App.css";

const BooleEvaluacion = () => {
    return (
        <>
            <h4>Evaluación de expresiones compuestas:</h4>
            <p>Los operadores booleanos se pueden combinar para formar expresiones que contengan más de un operador. En dicho caso, los fragmentos de expresiones contenidos entre paréntesis deben ser evaluados primero, teniendo en cuenta la anidación de los mismos. Los operadores son evaluados en el siguiente orden: negación, producto y suma.</p>
            <p>En el caso de operadores del mismo tipo, estos se evalúan en el orden en que aparecen en la expresión, de izquierda a derecha.</p>
            <p>Un ejemplo de expresión booleana sería:</p>
            <div className="Table">
                <div className='Row'>
                    <div className='Cell'  style={{textAlign: "left"}}>
                        <ul>
                            <li>a'·(b+c)'</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>La negación se representa con un apóstrofe detrás del operando. Si este se encuentra detrás de un signo de agrupación, afecta al resultado de la expresión que se encuentra dentro del paréntesis.</p>
            <p>La suma y la multiplicación se representan con un signo de suma y un signo de multiplicación respectivamente y pueden operar con paréntesis. Ejemplo:</p>
            <div className="Table">
                <div className='Row'>
                    <div className='Cell'  style={{textAlign: "left"}}>
                        <ul>
                            <li>(a+b)+(c+d)·c</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>En la práctica, el signo de multiplicación es omitido para abreviar la escritura de las expresiones. </p>
            <p>Así la expresión booleana anterior sería:</p>
            <div className="Table">
                <div className='Row'>
                    <div className='Cell'  style={{textAlign: "left"}}>
                        <ul>
                            <li>(a+b)+(c+d)c</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BooleEvaluacion;