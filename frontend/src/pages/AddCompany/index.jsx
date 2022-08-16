import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../index.css";

import axios from "axios";

const companies = axios.create({
    baseURL: "http://localhost:8000/api/companies"
});

export default function AddCompany() {

    const [company, setCompany] = useState([]);

    const navigate = useNavigate();

    function onChange(e) {
        setCompany({...company, [e.target.name]: e.target.value});
    }

    function onSubmit(e) {
        e.preventDefault();
        companies.post("", company)
            .then(res => {
                console.log(res);
                alert("Empresa cadastrada com sucesso!");
                navigate("/companies");
            }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Criar Empresa</h1>
                <Link to="/companies" className="btn btn-secondary btn-edit">Voltar</Link>
            </div>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="company_name">Nome da Empresa</label>
                    <input type="text" name="company_name"  className="form-control" id="company_name" placeholder="Nome da Empresa" onChange={onChange} required="true"
                    min="2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="document">CNPJ</label>
                    <input type="text" name="document" className="form-control" id="document" placeholder="CNPJ" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary btn-edit">Criar Empresa</button>
            </form>
        </>
    )
}