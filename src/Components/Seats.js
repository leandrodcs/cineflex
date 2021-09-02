import Footer from './Footer';
import "./Seats.css";

export default function Seats() {
    const arr = [
        "01","02","03","04","05","06","07","08","09","10",
        "01","02","03","04","05","06","07","08","09","10",
        "01","02","03","04","05","06","07","08","09","10",
        "01","02","03","04","05","06","07","08","09","10",
        "01","02","03","04","05","06","07","08","09","10"
    ];

    return (
        <>
            <main className="wrapper">
                <div className="header">{"Selecione o(s) assento(s)"}</div>
                <ul className="seats">
                    {arr.map((num) => <li className="seat">{num}</li>)}
                </ul>
                <div className="seats-label">
                    <div>
                        <div className="ball selected"></div>
                        <div className="label">Selecionado</div>
                    </div>
                    <div>
                        <div className="ball available"></div>
                        <div className="label">Disponível</div>
                    </div>
                    <div>
                        <div className="ball unavailable"></div>
                        <div className="label">Indisponível</div>
                    </div>
                </div>
                <div className="buyer-info">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div className="buyer-info">
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
                <button>Reservar assento(s)</button>
            </main>
            <Footer isSeat/>
        </>
    )
}