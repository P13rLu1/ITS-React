import "./App.css";
import {useState} from "react";

interface PersonaProps {
    nome: string;
    eta: number;
    residenza?: string;
}

function Persona(props: PersonaProps) {
    console.log(props);
    return (
        <>
            <p>Componente Persona</p>
            <p>
                Sono {props.nome} e ho {props.eta} anni
            </p>
            {props.residenza && <p>Abito a {props.residenza}</p>}
        </>
    );

}

// function Counter() {
//   let x = 0;

//   function incrementa() {
//     x++;
//     console.log("Increment x", x);
//   }

//   return (
//     <>
//       <p>Sono stato cliccato {x} volte</p>
//       <input type="button" value="Incrementa" onClick={incrementa} />
//     </>
//   ); senza useState
// }

function Counter() {
    const [x, setX] = useState(0);

    function incrementa() {
        setX(x + 1);
    }

    return (
        <>
            <button onClick={incrementa}>
                <p>
                    Sono stato cliccato {x} {x == 1 ? "volta" : "volte"}
                </p>
            </button>
        </>
    ); // con useState
}

interface User {
    firstName: string;
    lastName: string;
    yearsOld: number;
}

function App() {
    function formatName(user: User) {
        return user.firstName + " " + user.lastName;
    }

    const user: User = {
        firstName: "Pierluigi",
        lastName: "Buttazzo",
        yearsOld: 21,
    };

    const element = (
        <div>
            <h1>Ciao {formatName(user)}!</h1>
            <p>
                {user.yearsOld >= 18
                    ? "Sei maggiorenne"
                    : "Ti mancano " + (18 - user.yearsOld) + "anni"}
            </p>
        </div>
    );

    return (
        <>
            {element}
            <hr/>
            <Persona nome="Pierluigi" eta={21} residenza="Mielendugno"/>
            <Persona nome="Mario" eta={20}/>
            <hr/>
            <Counter/>
        </>
    );
}

export default App;
