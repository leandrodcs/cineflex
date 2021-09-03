import Footer from './Footer';
import "./Seats.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Loading from './Loading';
import Seat from './Seat';
import { Link } from 'react-router-dom';

export default function Seats() {

    const {idSessao} = useParams();
    const [sessionInfo, setSessionInfo] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);


    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`)
        .then(res => {
            setSessionInfo(res.data);
        });
    },[]);
    if(sessionInfo.length === 0) {
        return (
            <Loading />
        )
    }
    function selectOrRemoveSeat(seatSelected, selecting) {
        if(selecting) {
            setSeatsSelected([...seatsSelected, seatSelected])
            console.log("ta selecionando!");
        }
        else {
            setSeatsSelected(seatsSelected.filter((seat) => !(seat.id === seatSelected.id)))
            console.log("ta removendo!");
        }
    }
    console.log(seatsSelected);

    return (
        <>
            <main className="wrapper">
                <div className="header">{"Selecione o(s) assento(s)"}</div>
                <ul className="seats">
                    {sessionInfo.seats.map((seat) => <Seat 
                    selectOrRemoveSeat={selectOrRemoveSeat} 
                    seat={seat} 
                    key={seat.id}/>
                    )}
                </ul>
                <div className="seats-label">
                    <div>
                        <div className="circle selected"></div>
                        <div className="label">Selecionado</div>
                    </div>
                    <div>
                        <div className="circle available"></div>
                        <div className="label">Disponível</div>
                    </div>
                    <div>
                        <div className="circle unavailable"></div>
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
            <Footer isSeat={true} movieInfo={sessionInfo}/>
        </>
    )
}