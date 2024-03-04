import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [repsCount, setRepsCount] = useState(0);

  const handleIncrement = () => {
    setRepsCount(repsCount + 1);
  };

  const handleReset = () => {
    setRepsCount(0);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Reps: {repsCount}</p>
      <button onClick={handleIncrement}>Increment Reps</button>
      <button onClick={handleReset}>Reset Reps</button>
    </div>
  );
}

export default RepetitionExercise;
