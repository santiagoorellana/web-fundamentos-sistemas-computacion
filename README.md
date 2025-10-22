
<h1>Fundamentos de Sistemas de Computacion</h1>

<p>La presente aplicación es la versión 2.0 rediseñada y reprogramada, de una aplicación diseñada y elaborada en 2009, la cual utilizó el autor como trabajo de tesis de Licenciatura y fue una propuesta para dar solución a la necesidad de perfeccionar el proceso enseñanza-aprendizaje del Tema 4 "Fundamentos de los Sistemas de Computación" contenido en la asignatura "Arquitectura de Computadoras" que se impartían en los Institutos Politécnicos de Informática en Cuba. La versión antigua fue programada con HTML, CSS y JavaScript nativo y se encuentra en el directorio "version_antigua". La siguiente imagen es una pantalla de contenido teórico de la versión 2.0 de la aplicación:</p>
<img width="601" alt="contenido" src="https://github.com/user-attachments/assets/a851903b-f07a-48ce-8aac-cdcde1a4c086" />

<p>Esta versión actual 2.0, rediseñada y reprogramada en 2023, conserva el mismo contenido teórico que su anterior versión, pero introduce mejoras en la programación, utilizando las bondades del HTML5, CSS3 y JavaScript con las librerías de ReactJS.</p>

<h2>Ejercicios autoevaluados</h2>
<p>Para cada acápite, la aplicación contiene ejercicios autoevaluados que ayudan al alumno a comprobar si ha adquirido bien el conocimiento. Vease las pantallas siguientes donde se pueden ver ejercicios de cálculo, de selección de varias opciones, de verdadero o falso. Al tocar lo opció "Evaluar respuestas" la aplicación verifica las respuestas escritas o seleccionadas por el estudiante y las marca en verde si son correctas y en caso de incorrectas las marca en rojo.</p>
<img width="484" alt="ejercicio1" src="https://github.com/user-attachments/assets/9350ecc8-8604-4b52-9e2e-131cf20fe148" /><br>
<img width="525" alt="ejercicio2" src="https://github.com/user-attachments/assets/8a2008d8-ea4e-4143-9918-54f28ade6d66" /><br>
<img width="439" alt="ejercicio3" src="https://github.com/user-attachments/assets/7254c5e3-edd2-448d-9ea1-0f94874aadf9" /><br>
<img width="577" alt="ejercicio4" src="https://github.com/user-attachments/assets/5703537d-7378-49aa-905e-c167b7e1ab3e" /><br>

<h2>Herramientas</h2>
<p>Para cada acápite, la aplicación contiene herramientas que permiten calcular operaciones booleanas y numericas o simular circuitos booleanos, para que el estudiante puede observar los procesos de una forma más dinámica y sin necesidad de acudir a un profesor que lo enseñe de forma presencial. Vease las pantallas siguientes donde se pueden ver simuladores de compuertas digitales, emulador de circuitos, visor de circuitos, convertidor de sistemas de numeración, generador de series numericas, comparador de expresiones booleanas...</p>
<img width="400" alt="visor" src="https://github.com/user-attachments/assets/7d41d30e-f98e-43f6-910d-e8e3857638ae" /><br>
<img width="400" alt="emulador circuitos" src="https://github.com/user-attachments/assets/14875d2f-aaf9-405c-92a5-d53ec520268e" /><br>
<img width="400" alt="generador" src="https://github.com/user-attachments/assets/b055ad9d-9986-4880-830e-f76431072e1e" /><br>
<img width="400" alt="convertidor" src="https://github.com/user-attachments/assets/673e5325-db48-422a-97c0-b28bd555ca50" /><br>
<img width="400" alt="evaluador" src="https://github.com/user-attachments/assets/692696f7-9ff5-4796-bf56-89727cb1fba6" /><br>
<img width="400" alt="comparador" src="https://github.com/user-attachments/assets/ef6e209b-ffe6-4be3-8acb-235dd0300428" /><br>


<p>Aunque inicialmente, el contenido de la presente aplicación fue orientado a un tema específico de una asignatura específica en Cuba, los conocimientos y herramientas presentes en la aplicación pueden ser útiles para todo aquel que le interese estudiar los fundamentos del funcionamiento de las computadoras y circuitos digitales modernos.</p>


Esta version está completada solo al 95% y es posible que alguna herramienta no este totalmente funcional.
Si esta interesado en utilizar completamente o de forma parcial estos codigos para algún proyecto, puede contratar mis servicios.

autor: Lic. Santiago A. Orellana Pérez

email: tecnohago@gmail.com

movil: +5354635944

La Habana, Cuba, 2009-2023



<h1>PREPARACION</h1>

Debe ejecutar estos comandos para que se descarguen y se instalen las librerias necesarias para que funcione el proyecto.

Crear proyecto:
npx create-react-app fundamentos-sistemas-computacion

Instalar UI:
npm install react-bootstrap bootstrap
https://react-bootstrap.github.io/

Instalar el Sidebar:
npm install react-pro-sidebar
https://www.npmjs.com/package/react-pro-sidebar

Instalar React Icons
npm install react-icons
https://react-icons.github.io/react-icons/

Instalar React Route Dom v6
npm i -D react-route-dom
https://reactrouter.com/en/main

Luego abra una ventana de lineas de comando en el mismo directorio del proyecto y ejecute el comando:

npm start



<h1>INFORMACION ADICIONAL</h1>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
