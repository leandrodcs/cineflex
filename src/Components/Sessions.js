import Footer from './Footer';
import './Sessions.css';

export default function Sessions() {
    return (
        <>
            <main className="wrapper">
                <div className="header">Selecione o horário</div>
                <ul className="days-list">
                    <li className="day">
                        <div className="day-header">Quinta-feira - 24/06/2021</div>
                        <ul className="sessions">
                            <li className="session">15:00</li>
                            <li className="session">19:00</li>
                        </ul>
                    </li>
                    <li className="day">
                        <div className="day-header">Quinta-feira - 24/06/2021</div>
                        <ul className="sessions">
                            <li className="session">15:00</li>
                            <li className="session">19:00</li>
                        </ul>
                    </li>
                    
                </ul>
            </main>
            <Footer />
        </>
    )
}