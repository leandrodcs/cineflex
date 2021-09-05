import { useHistory } from 'react-router';
import './TopButton.css';

export default function TopButton({movieId, refreshPage}) {
    let handleUrl;
    const history = useHistory()
    if(!movieId) {
        handleUrl = () => {
            history.push("/");
        }
    }
    else {
        handleUrl = () => {
            history.push(`/sessoes/${movieId}`);
            refreshPage();
        }
    }

    return (
        <div className="top-button" onClick={handleUrl}>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
    )
}