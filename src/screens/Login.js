import React, {useState, useEffect} from "react";

const Login = (props) => {
    const {setConnected} = props
    return (
        <div className="offset-4 mt-5 col-4">
            <form className="mt-5 text-center" action="">
                <h1>Connexion</h1>
                <div className="form-group text-left">
                    <label for="mail">Identifiant : </label>
                    <input className="form-control" type="text" name="mail"></input>
                </div>
                <div className="form-group text-left">
                    <label for="password">Mot de passe : </label>
                    <input className="form-control" type="password" name="password"></input>
                </div>
                <button className="btn btn-primary" type="button" onClick={() => setConnected(true)}>Se connecter</button>
            </form>
        </div>
    );
}
export default Login;