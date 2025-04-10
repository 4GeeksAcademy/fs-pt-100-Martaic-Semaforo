import React, { useState } from "react";
export const Semaforo = () => {
    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);
    
    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    return (
        <>
        <div className="traffic-light">
            {colors.map((light) => (
                <div 
                    key={light} 
                    className={`light ${light} ${color === light ? "brillo" : ""}`}
                    onClick={() => setColor(light)}
                ></div>
            ))}
            <button onClick={toggleColor}>Cambia el color</button>
        </div>
        <div className="palo"></div>
        
        </>
    );
};

