import React, { useEffect } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.png'; 
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({ match }) {

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get(`/${match.params.login}`);
            console.log(response);
        }

        loadUsers();
    }, [match]);

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <footer>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                        <strong>Renan Nunes</strong>
                        <p>Algumas ideias</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
