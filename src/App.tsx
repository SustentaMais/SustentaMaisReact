import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Sobre from './pages/sobrenos/Sobre';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Visitante from './pages/visitante/Visitante';
import Login from './pages/login/Login';
import '../src/App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';

import store from './store/store';
import { Provider } from 'react-redux';
import ListaTema from './components/temas/listaTema/ListaTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
        <Provider store={store}>
          <Router>
            <Navbar />
            <div style={{ minHeight: '100vh' }}>
              <Routes> 
                <Route path="/" element={<Visitante />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path="/visitante" element={<Visitante />} />
                <Route path="/cadastrotema" element={<CadastroTema />} />
                <Route path="/cadastrotema/:id" element={<CadastroTema />} />
                <Route path="/tema" element={<ListaTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
              </Routes >
            </div >
          <Footer />
          </Router >
        </Provider>
  );
}

export default App;

