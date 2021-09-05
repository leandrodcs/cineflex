import { useHistory } from 'react-router';
import './TopButton.css';

export default function TopButton({movieId}) {
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
        }
    }

    return (
        <div className="top-button" onClick={handleUrl}>Revert</div>
    )
}