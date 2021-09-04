import './ConfirmationPage.css';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ConfirmationPage({seatsSelected}) {
    const [load, setLoad] = useState(true);
    const body = {
        ids: seatsSelected.map(s => s.idAssento),
        compradores: seatsSelected.map(s => {
            return {idAssento: s.idAssento, nome: s.nome, cpf: s.cpf}
            }),
    }
    console.log(`body certo -> ${body}`);
    console.log(`seats certo -> ${seatsSelected}`);
    useEffect(() => {
        
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, body)
        .then(res => {
            setLoad(false);
        });
    },[]);
    if(load) {
        return (
            <Loading />
        )
    }

    return (
        <main className="wrapper">
            <div className="header confirmation">Pedido feito<br/>com sucesso!</div>
            <div className="section">
                <div className="title">Filme e sessão</div>
                <div className="info">Enole Holmes</div>
                <div>24/06/2021 15:00</div>
            </div>
            {seatsSelected.map(seat => (
                <div className="section">
                    <div className="title">Ingresso e comprador</div>
                    <div className="info">Assento {seat.seat}</div>
                    <div className="info">Nome: {seat.nome}</div>
                    <div className="info">CPF: {seat.cpf}</div>
                </div>
            ))}
            <button>Voltar para Home</button>
        </main>
    )
}