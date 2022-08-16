import React, { useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../../index.css";

import axios from "axios";

const updateClient = axios.create({
    baseURL: "http://localhost:8000/api/companies/"
})

export default function UpdateClient() {
    const [client, setClient] = useState([]);

    const {id, clientId} = useParams();

    const navigate = useNavigate();

    function onChange(e) {
        setClient({...client, [e.target.name]: e.target.value});
    }

    function onSubmit(e) {
        e.preventDefault();
        updateClient.put(`/${id}/clients/${clientId}`, client)
            .then(res => {
                console.log(res);
                alert("Cliente atualizado com sucesso!");
                navigate(`/companies/${id}/clients`);
            }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Atualizar Cliente</h1>
                <Link to='/companies' className="btn btn-secondary">Voltar</Link>
            </div>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">Nome Completo</label>
                    <input type="text" name="fullname"  className="form-control" id="fullname" placeholder="Nome Completo" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" id="email" placeholder="Email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cellphone">Telefone</label>
                    <input type="text" name="cellphone" className="form-control" id="cellphone" placeholder="Telefone" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </>
    )

}