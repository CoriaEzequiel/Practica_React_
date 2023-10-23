import React, { useRef, useState } from "react";
import Team from "../team/Team";

const Truco = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [showTeams, setShowTeams] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const totalPointsRef = useRef(null);

  const totalPointsChangeHandler = (event) => {
    setTotalPoints(event.target.value);
  };

  const checkPointsClickHandler = () => {
    if (
      parseInt(totalPointsRef.current.value) < 18 ||
      parseInt(totalPointsRef.current.value) > 30
    ) {
      alert(
        "El valor ingresado no es válido (debe ser entre 18 y 30). Ingrese nuevamente..."
      );
      setShowTeams(false);
    } else {
      alert("El valor ingresado es correcto!");
      setTotalPoints(parseInt(totalPoints));
      setShowTeams(true);
    }
  };

  const gameOverHandler = (value) => {
    setIsGameOver(value);
  };

  return (
    <div>
      <h1>Partida de Truco</h1>
      <label htmlFor="inputTotalPoints">
        Ingrese el valor de finalización del partido
      </label>
      <input
        type="number"
        id="inputTotalPoints"
        ref={totalPointsRef}
        value={totalPoints}
        onChange={totalPointsChangeHandler}
      />
      <input
        type="button"
        placeholder="Ingrese puntaje..."
        value="Validar puntaje total"
        onClick={checkPointsClickHandler}
      />
      {showTeams && (
        <Team
          teamNumber={"1"}
          totalPoints={totalPoints}
          isGameOver={isGameOver}
          setIsGameOver={gameOverHandler}
        />
      )}
      {showTeams && (
        <Team
          teamNumber={"2"}
          totalPoints={totalPoints}
          isGameOver={isGameOver}
          setIsGameOver={gameOverHandler}
        />
      )}
    </div>
  );
};

export default Truco;
