import React, {useEffect, useState} from 'react';
import '../../index.css'

import axios from "axios";
import {Table} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

const companies = axios.create({
    baseURL: "http://localhost:8000/api"
});



const Company = () => {
    // const [clients, setClients] = useState([]);
    const {id} = useParams();

    const [company, setCompany] = useState([]);


    useEffect(() => {
        companies.get("/companies")
            .then(res => {
                setCompany(res.data.companies);
            }).catch(err => {
                console.log(err);
            }
        );
    } , []);

    function deleteCompany(id){
        companies.delete(`/companies/${id}`)
        setCompany(company.filter(company => company.id !== id))
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Lista de Empresas</h1>
                <Link to="/add-company" className="btn btn-primary btn-edit">Criar Empresa</Link>
            </div>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {company.map(company => (
                    <tr>
                        <td>{company.id}</td>
                        <td>{company.company_name}</td>
                        <td>{company.document}</td>
                        <td>
                            <Link to={`/companies/${company.id}/clients`} className="btn btn-info btn-edit">Clientes</Link>
                            <Link to={`/companies/${company.id}/clients/add`} className="btn btn-success btn-edit">Adicionar Cliente</Link>
                            <Link to={`/companies/${company.id}/edit`} className="btn btn-warning btn-edit">Editar</Link>
                            <button onClick={() => deleteCompany(company.id)} className="btn btn-danger btn-edit">Excluir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default Company;
