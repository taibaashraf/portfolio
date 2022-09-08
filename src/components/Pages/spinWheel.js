import React from "react";
import './spinWheel.css';

export const SpinWheel = () => {

    function SpinWheel() {
        var x = 1024;
        var y = 9999;

        var deg = Math.floor(Math.random() * (x - y)) + y;
        document.getElementById('container').style.transform = "rotate(" + deg + "deg)";
    }

    return (
        <div>
            <button id="spin" onClick={SpinWheel}>Spin</button>
            <span className="arrow"></span>
            <div className="container" id="container">
                <div className="one" onClick={SpinWheel}>1</div>
                <div className="two" onClick={SpinWheel}>2</div>
                <div className="three" onClick={SpinWheel}>3</div>
                <div className="four" onClick={SpinWheel}>4</div>
                <div className="five" onClick={SpinWheel}>5</div>
                <div className="six" onClick={SpinWheel}>6</div>
                <div className="seven" onClick={SpinWheel}>7</div>
                <div className="eight" onClick={SpinWheel}>8</div>
            </div>
        </div>
    )
}