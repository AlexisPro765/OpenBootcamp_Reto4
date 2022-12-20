import { useState } from "react";

export const FiguraComponent = () => {
    const [r, setR] = useState('0');
    const [g, setG] = useState('0');
    const [b, setB] = useState('0');

    const [cambiarColor, setCambiarColor] = useState(true);

    const configurarCambioColor = () => {
        setCambiarColor(!cambiarColor);
    };

    const cambiarColorAleatoriamente = () => {
        if (cambiarColor) {
            setR(Math.round(Math.random() * (255 - 0 + 1)));
            setG(Math.round(Math.random() * (255 - 0 + 1)));
            setB(Math.round(Math.random() * (255 - 0 + 1)));
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div onMouseMove={cambiarColorAleatoriamente} onDoubleClick={configurarCambioColor} style={{ margin: '20px', width: '255px', height: '255px', background: "rgb(" + r + "," + g + "," + b + ")" }}>

                </div>
            </div>
            <div>
                <p style={{ color: cambiarColor ? "green" : "red" }}>
                    {(cambiarColor ? 'Puede ' : 'No puede ') + 'cambiar color'}
                </p>
            </div>
        </div>
    );
};