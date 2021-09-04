import './ConfirmationPage.css';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ConfirmationPage({seatsSelected}) {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const body = {
            ids: seatsSelected.map(s => s.idAssento),
            compradores: seatsSelected,
        }
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, body)
        .then(res => {
            console.log(`resp -> ${res}`);
            console.log(`body -> ${body}`)
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
            <div className="section">
                <div className="title">Ingressos</div>
                <div className="info">Assento 15</div>
                <div className="info">Assento 16</div>
            </div>
            <div className="section"> 
                <div className="title">Comprador</div>
                <div className="info">Nome: João da Silva Sauro</div>
                <div className="info">CPF: 123.456.789-10</div>
            </div>
            <button>Voltar para Home</button>
        </main>
    )
}