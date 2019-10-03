import React from "react";

const Display = props => {
    return (
        <div className="display">
            <h2>At Bat</h2>
            <div className="stats">
                <div className="stats-container">
                    <h3>Balls</h3>
                    <p>{props.balls}</p>
                </div>
                <div className="stats-container">
                    <h3>Strikes</h3>
                    <p>{props.strikes}</p>
                </div>
            </div>
        </div>
    );
}

export default Display;