/*import { Welcome } from "./components/Welcome.js";

ReactDOM.render(
  React.createElement(Welcome, {
    nombre: "Julián",
  }),
  document.getElementById("react-app")
);*/

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

import { Tarjeta } from "./tarea/Tarea1.js";

ReactDOM.render(
  <Tarjeta
    nombre="Luis Vergera"
    titulo="Programador Front End"
    imagen="https://avatars.githubusercontent.com/u/69331928?v=4"
  />,
  document.getElementById("react-app")
);
