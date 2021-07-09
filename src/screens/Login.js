import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
    const {setConnected} = props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    //console.log(watch("mail"), watch("password"));
    return (
        <div className="offset-4 mt-5 col-4">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <h1>Connection</h1>
                <div className="text-left form-group">
                    {/* register your input into the hook by invoking the "register" function */}
                    <label for="mail">Identifiant : </label>
                    <input name="mail" id="mail" className="form-control" {...register("mail", { required: true })} />
                    {errors.mail && <span className="text-danger">Veuillez saisir votre identifiant</span>}
                </div>
                <div className="text-left form-group">
                    {/* include validation with required or other standard HTML validation rules */}
                    <label for="password">Mot de passe : </label>
                    <input name="password" id="password" className="form-control" {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span className="text-danger">Veuillez saisir votre mot de passe</span>}
                </div>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
}
export default Login;