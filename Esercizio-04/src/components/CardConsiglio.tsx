interface Props {
    consiglio: string;
}

function CardConsiglio({consiglio}: Props) {

    return (
        <div style={{border: "1px solid gray", borderRadius: 25, marginTop: 20, padding: 20, backgroundColor: "#1a1a1a"}}>
            <h4>{consiglio}</h4>
        </div>
    );
}

export default CardConsiglio;