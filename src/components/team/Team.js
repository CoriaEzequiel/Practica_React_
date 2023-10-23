import React, { useState } from "react";

const Team = ({ teamNumber, totalPoints, isGameOver, setIsGameOver }) => {
  const [teamPoints, setTeamPoints] = useState(0);

  const addPointsHandler = () => {
    setTeamPoints(teamPoints + 1);
    console.log(teamPoints);
    if (teamPoints === totalPoints) {
      alert(`Ha ganado el equipo ${teamNumber}. FELICITACIONES!`);
      setTeamPoints(0);
      setIsGameOver(true);
    }
  };

  const subtractPointsHandler = () => {
    if (teamPoints > 0) {
      setTeamPoints(teamPoints - 1);
    }
  };

  return (
    <div>
      <h1>
        Puntaje actual del equipo {teamNumber}: {isGameOver ? 0 : teamPoints}
      </h1>
      <input type="button" value="+" onClick={addPointsHandler} />
      <input type="button" value="-" onClick={subtractPointsHandler} />
    </div>
  );
};

export default Team;
