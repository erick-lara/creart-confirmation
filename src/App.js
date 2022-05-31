import { useEffect } from 'react';
import './App.css';
import logo from './fundoLPP.png'
import api from './services/api';

function App() {

  useEffect(() => {
    redirect()
  }, []);


  function callApi(value){
    api.post(value)
  }

  function redirect(){
    let token = getToken();
    callApi(token);
    let redirectUrl = "https://creart-front.vercel.app/";

    let redirect = setTimeout(function () {
      window.location.href = redirectUrl;
      window.clearTimeout(redirect);
    }, 5000);
  }

  function getToken(){
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("token")
    return term;
    
  }

  return (
    <>
    <div className='ConteudoLandingPage'>
        <div> <img className='imgLanding' src={logo} alt="" /></div>

        <div className='conteudoEscritoLandingPage'>
            <p className='tituloPrincipalLP'>Bem-Vindo(a) ao Creart!</p>
            <p className='subtituloPrincipalLP'>
                Você será redirecionado para nossa página de login
                <br/>
                <b>Aguarde alguns instantes okay?</b>
            </p>
        </div>
    </div>
    </>
  );
}

export default App;
