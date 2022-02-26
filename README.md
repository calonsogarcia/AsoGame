# AsoGame

La idea se basa en desarrollar soluciones digitales que consigan el engagement de los asistentes a los partidos mejorando y aumentando la experiencia de usuario, basado en el caso de estudio 1 planteado por Ironhack.

Hemos desarrollado un prototipo de la app de forma sencilla, para dar soporte a la presentación más elaborada que se puede consultar en:

## El flujo de la app sería el siguiente: 

El asistente al partido podrá navegar por la app de forma libre para consultar los partidos que se desarrollan ese día o los futuros. También podrá navegar por la información del partido al que está asistiendo. 
Esta navegación es limitada, ya que para poder disfrutar de la experiencia completa deberá loguearse.

En el momento en que el usuario se loguea tendrá la posibilidad de escanear el código QR que se encuentra en la puerta del estadio, el cual le redirigirá a una página con un pop-up en el cual se debe introducir el nº de fila y butaca. Esta acción activará el despliegue de una vista con las indicaciones de cómo llegar a su sitio.

También podrá acceder a las siguientes funcionalidades extras:
- Chat
- Tus pronósticos.
- Juega con nosotros
- Tu perfil
- Acumulación de tokens/coins
- Uso de los tokens/coins


## Detalle de las vistas:

### Chat
Chat tipo twitter en vivo, en el cual podrá poner comentarios instantáneos que se compartirán con los demás asistentes al partido.

### Tus pronósticos
Vista en la cual se activarán varias encuestas antes del partido que el usuario podrá contestar. Como por ejemplo: “¿Cuántos goles crees que marcará cada equipo antes del partido?¿Qué jugador crees que será el que más marque?”
<br>
**En caso de que se acierten los pronósticos el usuario recibirá tokens/coins**

### Juega con nosotros
Un mini kahoot/quiz que se llevará a cabo durante el descanso.
<br>
**En caso de que se acierten los pronósticos el usuario recibirá tokens/coins**

### Perfil de usuario
Aquí podrás indicar información personal, así como el equipo del cual eres seguidor.

### Acumulación de tokens/coins
Los tokens/coins serán puntos que se acumularán cuando se aciertan los pronósticos realizados sobre el partido y cuando en el kahoot/quiz se queda clasificado entre los 3 primeros.

### Uso de los tokens/coins
Se podrá hacer uso de los mismos para abonar las consumiciones en la zona de restauración de los pabellones o, si se acumula una determinada cantidad, tener la posibilidad de canjearlos por una entrada para asistir a otro partido.

------------------------------------------------------

## Getting Started

Download and installation: Download the repository code with git clone or use download button.

Run npm install || yarn install on the client && on the server to install the dependencies.

Available Scripts In the project directory, you can run: yarn run dev || npm run dev to raise the server at http://localhost:5005

Then yarn start || npm start

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. 