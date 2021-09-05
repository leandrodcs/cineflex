import Footer from './Footer';
import "./Seats.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import Loading from './Loading';
import Seat from './Seat';
import { Link } from 'react-router-dom';
import BuyerInfo from './BuyerInfo';
import TopButton from './TopButton';

export default function Seats({selectOrRemoveSeat, seatsSelected, updateBuyerInfo, updateMovieInfo, refreshPage}) {

    const {idSessao} = useParams();
    const [seatsInfo, setSeatsInfo] = useState([]);
    const [movieId, setmovieId] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`)
        .then(res => {
            setSeatsInfo(res.data);
            setmovieId(res.data.movie.id);
            updateMovieInfo(res.data);
        });
    },[]);
    if(seatsInfo.length === 0) {
        return (
            <Loading />
        )
    }
    function goToFinalScreen() {
        for(let i = 0 ; i < seatsSelected.length ; i++) {
            if(seatsSelected[i].nome === "" || seatsSelected[i].cpf === "") {
                return alert("Preencha todos os campos!");
            }
        }
        const handleUrl = () => {
            history.push("/sucesso");
        }
        handleUrl();
    }
    
    return (
        <>
            <TopButton movieId={movieId} refreshPage={refreshPage}/>
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
                {seatsSelected.length ? <button onClick={goToFinalScreen}>Reservar assento(s)</button> : ""}
            </main>
            <Footer isSeat={true} movieInfo={seatsInfo}/>
        </>
    )
}