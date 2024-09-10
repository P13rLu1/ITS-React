interface Props {
    nome: string;
    email: string;
    azienda: string;
}

function CardUtente({nome, email, azienda}: Props) {

    return (
        <div style={{border: "1px solid gray", borderRadius: 25, marginTop: 20, padding: 10}}>
            <h4>{nome}</h4>
            <i>{email}</i>
            <p>Azienda: {azienda}</p>
        </div>
    );
}

export default CardUtente;