import './App.css';
import ConfirmationPage from './ConfirmationPage';
import Header from './Header';
import MainPage from './MainPage';
import Seats from './Seats';
import Sessions from './Sessions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);
    const [movieInfo, setMovieInfo] = useState({})

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies`)
        .then(res => {
            setMoviesList([...res.data])
        });
    },[]);

    if(moviesList.length === 0) {
        return (
            <Loading />
        )
    }

    function selectOrRemoveSeat(seatSelected, selecting) {
        if(selecting) {
            setSeatsSelected([...seatsSelected, {idAssento: seatSelected.id}])
        }
        else {
            setSeatsSelected(seatsSelected.filter((seat) => !(seat.idAssento === seatSelected.id)))
        }
    }
    function updateBuyerInfo(buyerName, buyerCpf, selectedId, seatName) {
        for(let i = 0; i < seatsSelected.length ; i ++) {
            if(seatsSelected[i].idAssento === selectedId) {
                seatsSelected[i].nome = buyerName;
                seatsSelected[i].cpf = buyerCpf;
                seatsSelected[i].seat = seatName;
            }
        }
    }
    function updateMovieInfo(movieInfo) {
        setMovieInfo({title: movieInfo.movie.title, date: movieInfo.day.date, time: movieInfo.name})
    }
    function refreshPage() {
        setSeatsSelected([]);
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage moviesList={moviesList}/>
                    </Route>
                    <Route exact path="/sessoes/:idFilme">
                        <Sessions /> 
                    </Route>
                    <Route exact path="/assentos/:idSessao">
                        <Seats selectOrRemoveSeat={selectOrRemoveSeat} seatsSelected={seatsSelected} updateBuyerInfo={updateBuyerInfo} updateMovieInfo={updateMovieInfo}/>
                    </Route>
                    <Route exact path="/sucesso">
                        <ConfirmationPage seatsSelected={seatsSelected} movieInfo={movieInfo} refreshPage={refreshPage}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

