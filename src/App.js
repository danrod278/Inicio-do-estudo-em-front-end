import styles from './App.css'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Rotas/Home';
import Header from './Components/componentes/header';
import NovoProjeto from './Components/Rotas/NovoProjeto';
import Projetos from './Components/Rotas/Projetos';
import Editar from './Components/Rotas/Editar';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/novoprojeto" element={<NovoProjeto/>} />
        <Route path="/projetos" element={<Projetos/>} />
        <Route path="/projeto/:_id" element={<Editar/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
