import { useState } from 'react';

export default function Seat({seat}) {

    const [selected, setSelected] = useState("");

    function selectSeat() {
        if(!seat.isAvailable) {
            return alert("Esse assento não está disponível!");
        }
        if(selected === "") {
            setSelected("selected");
        }
        if (selected === "selected"){
            setSelected("");
        }
    }



    return (
        <li onClick={selectSeat}
            className={
                seat.isAvailable ?
                `seat available ${selected}` :
                `seat unavailable `
        }>{seat.name}</li>
    )
}