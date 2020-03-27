import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';


import logoImg from '../../assets/logo.svg';


function Profile() {
    const [casos, setCasos] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers:{
                authorization:ongId,
            }
        }).then(response => {
            setCasos(response.data);
        })
    }, [ongId]);

    async function handleDeleteCaso(id){
        try {
            await api.delete(`/casos/${id}`, {
                headers: {
                    authorization: ongId,
                }
            });

            setCasos(casos.filter(caso => caso.id !== id));
        } catch (error) {
            alert('erro ao deletar caso');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
       <div className="profile-container">
           <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/casos/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>

           </header>

           <h1>Casos cadastrados</h1>

           <ul>
               {casos.map(caso => (
                <li key={caso.id}>
                    <strong>CASO:</strong>
                    <p>{caso.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{caso.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(caso.value)}</p>

                    <button onClick={() => handleDeleteCaso(caso.id)} type="button"> <FiTrash2 size={20} color="#a8a8b3"/></button>
                </li>
               ))}
           </ul>
       </div>
    );
}

export default Profile;