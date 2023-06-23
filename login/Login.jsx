import React from 'react';
import './Login.css';

export const Login = () => {
  return (
    <>
      <h1>Crie uma conta e tenha  uma prévia do orçamento</h1>
      <div className='content'>
        <div className='content-info'>
          <h1>CodeCoffeer</h1>
          <h3>A tecnologia ao teu lado para superar obstáculos</h3>
        </div>
        <div className='content-login'>
          <form className='content-login-box form-box'>
            <input type='text' className='inputs' placeholder='Email ou telefone' />
            <input type='password' className='inputs' placeholder='Senha' />
            <button className='btn btn-enter'>Entrar</button>
            <a href='#' className='fogot-password'>Esqueceu a senha?</a>
            <hr />
            <button className='btn btn-create-account'>Criar nova conta</button>
          </form>
          <p><strong>Crie um site</strong> e fortaleça a marca da sua empresa</p>
        </div>
      </div>
    </>
  );
};
