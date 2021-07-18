import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [usuario, setUsuario] = useState('');
  
  function handlePesquisa(){
    axios.get('https://api.github.com/users/jailjr/repos').then( response => console.log(response));
  }

  return (
   <>
   <input className="usuarioinput" placeholder="Usuário" value = {usuario} onchange={e=> setUsuario()}></input>
   <button type="button" onClick={handlePesquisa}>Pesquisar</button>
   </>
  );
}

export default App;
