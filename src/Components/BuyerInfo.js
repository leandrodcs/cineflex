import { useState } from "react";

export default function BuyerInfo({selectedInfo, updateBuyerInfo, seatsInfo}) {
    const [buyerName, setBuyerName] = useState("");
    const [buyerCpf, setBuyerCpf] = useState("");
    let selectedSeatId = selectedInfo.idAssento;
    let seatName;
    for(let i = 0; i < seatsInfo.length ; i++) {
        if(seatsInfo[i].id === selectedInfo.idAssento) {
            seatName = seatsInfo[i].name;
        }
    }
    updateBuyerInfo(buyerName, buyerCpf, selectedSeatId, seatName);

    return (
        <>
            <div className="buyer-info">
                <p>Nome do comprador: (assento {seatName})</p>
                <input value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder="Digite seu nome..."></input>
            </div>
            <div className="buyer-info">
                <p>CPF do comprador:</p>
                <input value={buyerCpf} onChange={e => setBuyerCpf(e.target.value)} placeholder="Digite seu CPF..."></input>
            </div>
        </>
    )
}