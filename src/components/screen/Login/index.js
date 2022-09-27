import React from "react";
import  Link from '../../Link';
import styles from './login.module.css';

const Login = () => {
    return (
      <div className={styles.container}>
        <form>
          <input type={"text"} id="nombre" placeholder={"Nombre"}></input>
          <input type={"password"} id="password" placeholder={"Contraseña"}></input>
          <button type="submit">Login</button>
        </form>
        <div>Login</div>
        <Link text={'Ingresar'} to={'/products'}  />
      </div>
    );
  };
  
  export default Login;