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
            setSeatsSelected([...seatsSelected, {id: seatSelected.id}])
        }
        else {
            setSeatsSelected(seatsSelected.filter((seat) => !(seat.id === seatSelected.id)))
        }
    }
    function updateBuyerInfo(buyerName, buyerCpf, selectedId) {
        for(let i = 0; i < seatsSelected.length ; i ++) {
            if(seatsSelected[i].id === selectedId) {
                seatsSelected[i].nome = buyerName;
                seatsSelected[i].cpf = buyerCpf;
            }
        }
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
                        <Seats selectOrRemoveSeat={selectOrRemoveSeat} seatsSelected={seatsSelected} updateBuyerInfo={updateBuyerInfo}/>
                    </Route>
                    <Route exact path="/sucesso">
                        <ConfirmationPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

