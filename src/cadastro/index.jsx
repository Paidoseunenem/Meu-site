import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from "../components/firebase.jsx";


export default function Cadastro() {
    const auth = getAuth(Firebase);
    const email = 'admin2213@gamil.com';
    const password = 'admin123';

    function Cadastrar() {
    
       return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log('dev bom');

                const user = userCredential.user;

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    return (
        <div className='login'>

            <h1> LOGIN </h1>
            <div className='input'>

                <label>Login</label>
                <input placeholder='email' />
            </div>


            <div className='input'>

                <label>Senha</label>
                <input placeholder=' passoword' />



            </div>

            <button onClick={() => Cadastrar()}> Cadastrar </button>

        </div>
    )

}