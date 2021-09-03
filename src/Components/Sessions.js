import Footer from './Footer';
import './Sessions.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default function Sessions() {

    const {idFilme} = useParams();
    const [movieInfo, setMovieInfo] = useState([]);


    console.log(idFilme);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            console.log(res);
            setMovieInfo(res.data);
        });
    },[]);
    if(movieInfo.length === 0) {
        return (
            <Loading />
        )
    }
    console.log(movieInfo);




    return (
        <>
            <main className="wrapper">
                <div className="header">Selecione o horário</div>
                <ul className="days-list">
                    {movieInfo.days.map(({weekday, date, showtimes, id}) => (
                        <li className="day" key={id}>
                            <div className="day-header">{weekday} - {date}</div>
                            <ul className="sessions">
                                {showtimes.map(({name, id}) => (
                                    <Link to={`/assentos/${id}`} key={id}>
                                        <li className="session" >{name}</li>
                                    </Link>
                                ))}
                            </ul>
                        </li>
                    ))}

                    <li className="day">
                        <div className="day-header">Quinta-feira - 24/06/2021</div>
                        <ul className="sessions">
                            <li className="session">15:00</li>
                            <li className="session">19:00</li>
                        </ul>
                    </li>
                </ul>
            </main>
            <Footer isSeat={false} movieInfo={movieInfo}/>
        </>
    )
}