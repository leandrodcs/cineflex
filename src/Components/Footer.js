import './Footer.css';

export default function Footer({isSeat}) {

    return (
        <>
            <footer>
                <div className="footer-banner">
                    <img src="https://i.pinimg.com/736x/81/c9/e5/81c9e59f12e05add26b5541a9fe807e5.jpg"/>
                </div>
                <div>
                    <div className="footer-title">Batman the Dark Knight</div>
                    {isSeat ? <div className="footer-title">Quinta-feira - 15:00</div> : ""}
                </div>
            </footer>
            <div className="footer-blank"></div>
        </>
    )
}