import './App.css';
import DrawerAppBar from './Components/navigation/app-bar';
import Stat from "./Components/footer/footer"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
       <Outlet />
      <Stat />
    </div>
  );
}

export default App;
