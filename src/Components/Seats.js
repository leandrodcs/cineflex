import Footer from './Footer';
import "./Seats.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Loading from './Loading';
import Seat from './Seat';
import { Link } from 'react-router-dom';
import BuyerInfo from './BuyerInfo';

export default function Seats({selectOrRemoveSeat, seatsSelected, updateBuyerInfo, updateMovieInfo}) {

    const {idSessao} = useParams();
    const [seatsInfo, setSeatsInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        .then(res => {
            setSeatsInfo(res.data);
            updateMovieInfo(res.data);
            console.log(res.data);
        });
    },[]);
    if(seatsInfo.length === 0) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <main className="wrapper">
                <div className="header">{"Selecione o(s) assento(s)"}</div>
                <ul className="seats">
                    {seatsInfo.seats.map((seat) => <Seat 
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
                {seatsSelected.map((selectedInfo) => <BuyerInfo updateBuyerInfo={updateBuyerInfo} selectedInfo={selectedInfo} seatsInfo={seatsInfo.seats} key={selectedInfo.id}/>)}
                {seatsSelected.length ? <Link to="/sucesso"><button>Reservar assento(s)</button></Link> : ""}
            </main>
            <Footer isSeat={true} movieInfo={seatsInfo}/>
        </>
    )
}