import logo from './logo.svg';
import './App.css'; 
import Team from './components/team/Team';
import Truco from './components/truco/Truco';
import InputPersonalizado from './components/inputPersonalizado/InputPersonalizado';
import Menu from './components/menu/Menu';
import Modo from './components/cambioColor/CambioColor';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      
      <Team teamNumber="1" totalPoints={30} />
      <Truco/>
      <h2>ola</h2>
      <p>DIBIRI BOING BOING BOING</p>
      
      <InputPersonalizado/>

      <Menu />
      <Modo/>
      <Login/>
    </div>
  );
}

export default App;
