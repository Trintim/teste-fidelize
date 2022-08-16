import React, { useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../../index.css";

import axios from "axios";

const updateCompanies = axios.create({
    baseURL: "http://localhost:8000/api/companies"
});

export default function CompanyUpdateForm() {

    const [company, setCompany] = useState([]);

    const {id} = useParams();
    const navigate = useNavigate();

    function onChange(e) {
        setCompany({...company, [e.target.name]: e.target.value});
    }

    function onSubmit(e) {
        e.preventDefault();
        updateCompanies.put(`/${id}`, company)
            .then(res => {
                console.log(res);
                alert("Empresa atualizada com sucesso!");
                navigate("/companies");
            }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Editar Empresa</h1>
                <Link to="/companies" className="btn btn-secondary btn-edit">Voltar</Link>
            </div>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="company_name">Nome da Empresa</label>
                    <input type="text" name="company_name"  className="form-control" id="company_name" placeholder="Nome da Empresa" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="document">CNPJ</label>
                    <input type="text" name="document" className="form-control" id="document" placeholder="CNPJ" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary btn-edit">Salvar</button>
            </form>
        </>
    )
}