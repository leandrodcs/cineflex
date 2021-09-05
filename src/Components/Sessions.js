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

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`)
        .then(res => {
            setMovieInfo(res.data);
        });
    },[]);
    if(movieInfo.length === 0) {
        return (
            <Loading />
        )
    }

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
                </ul>
            </main>
            <Footer isSeat={false} movieInfo={movieInfo}/>
        </>
    )
}