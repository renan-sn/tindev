import React, { useState } from 'react';
import api from '../services/api';

import './Login.css';

import logo from '../assets/logo.png';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    let usuario = [];

    function hundleSubmit(event) {
        event.preventDefault();

        getUser();
    }

    /* REQUISIÇÃO DE USUÁRIO */
    async function getUser() {
        try {
            const response = await api.get(`/${username}`);
            
            const { id, name, bio, avatar_url } = response.data;
            usuario.push( {id, name, bio, avatar_url} );
        
            console.log(usuario);
            history.push('/main');
        } catch {
            alert('Usuário não encontrado');
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={hundleSubmit}>

                <img src={logo} alt="Tinder"/>
                
                <input 
                    type="text" 
                    placeholder="Digite seu usuário Github"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                
                <button type="submit">Login</button>
            
            </form>
        </div>
    );
}
