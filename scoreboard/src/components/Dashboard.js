import React from "react";

const Dashboard = props => {
    return (
        <div className="dashboard">
            <h2>Controls</h2>
            <div className="controls-container">
                <button onClick={props.addBall}>Ball</button>
                <button onClick={props.addStrike}>Strike</button>
                <button onClick={props.foul}>Foul</button>
                <button onClick={props.hit}>Hit</button>
            </div>
        </div>
    );
}

export default Dashboard;