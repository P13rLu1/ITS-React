import {useState} from "react";

function CardContatore() {
    const [count, setCount] = useState(20);

    return (
        <div style={{
            borderRadius: 25,
            border: "1px solid black",
            padding: 20,
            marginTop: 20,
            backgroundColor: count < 15 ? "blue" : "red"
        }}>
            <h2 style={{color: "white"}}>La Temperatura é di: {count}°C</h2>
            <button style={{marginRight: 20}} onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

            {(count <= -4) && <p style={{color: "violet"}}>Bruh Che Freddo</p>}
            {(count >= 30) && <p style={{color: "yellow"}}>Bruh Che Caldo</p>}
        </div>
    );
}

export default CardContatore;

