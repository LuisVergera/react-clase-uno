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
/*

----------Tarea 1-----------
import { Tarjeta } from "./tarea/Tarea1.js";

ReactDOM.render(
  <Tarjeta
    nombre="Luis Vergera"
    titulo="Programador Front End"
    imagen="https://avatars.githubusercontent.com/u/69331928?v=4"
  />,
  document.getElementById("react-app")
);*/
/*
import { BlogPost } from "./tarea/Tarea1.js";

ReactDOM.render(
  <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.\n
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre: "Luis Vergera",
      titulo: "Programador Front End",
      imagen: "https://avatars.githubusercontent.com/u/69331928?v=4",
    }}
  />,
  document.getElementById("react-app")
);*/

//------------TAREA 2-----------------------
/*
import { MatchNombre } from "./tarea/Tarea2.js";

ReactDOM.render(
  <MatchNombre nombre="Luis"></MatchNombre>,
  document.getElementById("react-app")
);*/
/*
import { PasswordInput } from "./tarea/Tarea2.js";

ReactDOM.render(
  <PasswordInput minLength={5} type="password"></PasswordInput>,
  document.getElementById("react-app")
);*/
/*
import { ValidationInput } from "./tarea/Tarea2.js";

ReactDOM.render(
  <ValidationInput
    validation={(value) => value.length >= 8}
    isPassword={(value) => value.length >= 8}
  />,
  document.getElementById("react-app")
);*/

//-----------TAREA 3------------------------
/*
import { UncontrolledCheckbox } from "./tarea/Tarea3.js";

ReactDOM.render(
  <UncontrolledCheckbox
    name="Checkbox"
    initialValue={false}
  ></UncontrolledCheckbox>,
  document.getElementById("react-app")
);

import { CheckboxList } from "./tarea/Tarea3.js";

ReactDOM.render(
  <CheckboxList
    items={{
      uno: false,
      dos: true,
      tres: false,
    }}
  />,
  document.getElementById("react-app")
);
*/

//--------TAREA 4-------------------

import { CheckboxListWithState } from "./tarea/Tarea4.js";

ReactDOM.render(
  <CheckboxListWithState
    items={{
      uno: false,
      dos: true,
      tres: false,
    }}
  />,
  document.getElementById("react-app")
);
/*
ReactDOM.render(
  <CheckboxListWithState
    items={{
      uno: false,
      dos: true,
      tres: false,
    }}
  />,
  document.getElementById("react-app")
);*/
