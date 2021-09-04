import './ConfirmationPage.css';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ConfirmationPage({seatsSelected, movieInfo, refreshPage}) {
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
                <div className="info">{movieInfo.title}</div>
                <div>{movieInfo.date} {movieInfo.time}</div>
            </div>
            {seatsSelected.map(seat => (
                <div className="section">
                    <div className="title">Ingresso e comprador</div>
                    <div className="info">Assento {seat.seat}</div>
                    <div className="info">Nome: {seat.nome}</div>
                    <div className="info">CPF: {seat.cpf}</div>
                </div>
            ))}
            <Link to="/" onClick={refreshPage}>
            <button>Voltar para Home</button>
            </Link>
        </main>
    )
}