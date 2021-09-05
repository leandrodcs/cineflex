import './Footer.css';

export default function Footer({isSeat, movieInfo}) {
    let title = "";
    let posterURL = "";
    let name = "";
    let weekday = "";

    if(!isSeat) {
        posterURL = movieInfo.posterURL
        title = movieInfo.title
    }
    else {
        name = movieInfo.name;
        title = movieInfo.movie.title
        posterURL = movieInfo.movie.posterURL
        weekday =movieInfo.day.weekday;
    }

    return (
        <>
            <footer>
                <div className="footer-banner">
                    <img src={posterURL} alt="Pôster do filme"/>
                </div>
                <div>
                    <div className="footer-title">{title}</div>
                    {isSeat ? <div className="footer-title">{weekday} - {name}</div> : ""}
                </div>
            </footer>
            <div className="footer-blank"></div>
        </>
    )
}