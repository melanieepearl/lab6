import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.01);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTimer(0);
    setIsActive(false);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps((prevLaps) => [...prevLaps, timer.toFixed(2)]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      seconds.toFixed(2)
    ).padStart(5, "0")}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <p>Time: {formatTime(timer)}</p>
        <button onClick={handleStartStop}>{isActive ? "Stop" : "Start"}</button>
        <button onClick={recordLap}>Record Lap</button>
        <button onClick={handleReset}>Reset</button>
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
}

export default DurationExercise;
