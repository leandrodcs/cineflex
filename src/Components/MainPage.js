import './MainPage.css';

export default function MainPage() {
    return (
        <>
        <main className="wrapper">
            <div className="header">Selecione o filme</div>
            <ul className="movies-list">
                <li className="movie-banner">
                    <img src="https://i.pinimg.com/736x/81/c9/e5/81c9e59f12e05add26b5541a9fe807e5.jpg"/>
                </li>
                <li className="movie-banner">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg"/>
                </li>
                <li className="movie-banner">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg"/>
                </li>
                <li className="movie-banner">
                    <img src="https://br.web.img3.acsta.net/medias/nmedia/18/92/64/35/20210357.jpg"/>
                </li>
                <li className="movie-banner">
                    <img src="https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg"/>
                </li>
                <li className="movie-banner">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/a/ac/The_Conjuring.jpg"/>
                </li>
            </ul>
        </main>
        </>
    )
}