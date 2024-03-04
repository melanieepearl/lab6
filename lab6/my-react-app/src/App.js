import React from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your components go here */}
        <RunningExercise />
        <RepetitionExercise name="Push-ups" />
        <DurationExercise name="Plank" />
      </header>
    </div>
  );
}

export default App;
