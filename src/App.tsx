import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
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
import AddPost from './components/estaticos/addPost/AddPost';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarMain from './components/estaticos/navbar/NavbarMain';
import Side_Navbar from './components/estaticos/navbar/Side_NavBar/Side_NavBar';
import CadastroPost from './pages/home/cadastroPost/CadastroPost';
import DeletarPostagem from './pages/home/deletarPostagem/DeletarPostagem';
import ListaPostagem from './pages/home/listaPostagem/ListaPostagem';


function App() {
  return (
        <Provider store={store}>
          <ToastContainer />
          <Router>
            <Side_Navbar/>
            <div style={{ minHeight: '100vh' }}>
              <Routes> 
                <Route path="/" element={<Visitante />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<ListaPostagem />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path="/visitante" element={<Visitante />} />
                <Route path="/cadastrotema" element={<CadastroTema />} />
                <Route path="/cadastrotema/:id" element={<CadastroTema />} />
                <Route path="/tema" element={<ListaTema />} />
                <Route path="/deletartema/:id" element={<DeletarTema />} />
                <Route path="/criarpostagem" element={<CadastroPost />} />
                <Route path="/criarpostagem/:id" element={<CadastroPost />} />
                <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                <Route path="/postagem/:id" element={<ListaPostagem />} />
              </Routes >
            </div >
          <Footer />
          <AddPost />
          </Router >
        </Provider>
  );
}

export default App;

