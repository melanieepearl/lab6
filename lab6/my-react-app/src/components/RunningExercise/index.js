import React, { useState } from "react";

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, currentTime]);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setCurrentTime(0);
    setLaps([]);
  };

  return (
    <div>
      <h2>Running</h2>
      <div>
        <p>Time: {currentTime}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={recordLap}>Record Lap</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>
              Lap {index + 1}: {lapTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningExercise;
