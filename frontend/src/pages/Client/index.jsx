import React, {useEffect, useState} from "react";
import '../../index.css'
import axios from "axios";
import {Table} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";


const request = axios.create({
    baseURL: 'http://localhost:8000/api/companies'
});


export default function Client(){
    const [client, setClient] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        request.get(`/${id}/clients`).then(response => {
            setClient(response.data);
            //console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    function deleteClient(id, clientId){
        request.delete(`/${id}/clients/${clientId}`)
        setClient(client.filter(client => client.id !== clientId))
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Lista de Clientes</h1>
                <Link to='/companies' className="btn btn-secondary btn-edit">Voltar</Link>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Client ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Pontos</th>
                    <th>Nome Empresa</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {client.map(client => (
                    <tr>
                        <td>{client.id}</td>
                        <td>{client.fullname}</td>
                        <td>{client.email}</td>
                        <td>{client.cellphone}</td>
                        <td>{client.points.reduce((total, valorAtual) => {
                                return total + valorAtual.points
                            }, 0)}
                        </td>

                        <td>{client.companies.map(comp =>{
                            return comp.company_name
                            })
                        }</td>
                        <td>
                            {client.companies.map(comp =>{
                                return (
                                    <>
                                        <Link to={`/companies/${comp.id}/clients/${client.id}/points`} className="btn btn-primary btn-edit">Adicionar Pontos</Link>
                                        <Link to={`/companies/${comp.id}/clients/${client.id}/edit`} className="btn btn-warning btn-edit">Editar Cliente</Link>
                                        <button className="btn btn-danger btn-edit" onClick={() => deleteClient(comp.id, client.id)}>Deletar Cliente</button>
                                    </>
                                )
                            })}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}