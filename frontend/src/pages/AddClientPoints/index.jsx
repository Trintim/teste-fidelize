import React, {useState} from "react";
import axios from "axios";
import '../../index.css'
import {useParams, useNavigate, Link} from "react-router-dom";

const addPoints = axios.create({
    baseURL: "http://localhost:8000/api/companies"
})

export default function PointsForm(){
    const [points, setPoints] = useState([]);
    const {id, clientId} = useParams();

    const navigate = useNavigate();

    function onChange(e){
        setPoints({...points, [e.target.name]: e.target.value});
    }

    function onSubmit(e){
        e.preventDefault();
        addPoints.post(`${id}/clients/${clientId}/points`, points,{
            headers:{
                Accept: "application/json"
            }
        })
            .then(res => {
                console.log(res);
                alert("Pontos adicionados com sucesso!");
                navigate(`/companies/${id}/clients`);
            }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="create-bar">
                <h1 className="title">Criar Pontos</h1>
                <Link to={`/companies/${id}/clients`} className="btn btn-secondary btn-edit">Voltar</Link>
            </div>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="points">Pontos</label>
                    <input type="text" name="points" className="form-control" id="points" placeholder="Pontos" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary btn-edit">Criar Pontos</button>
            </form>
        </>
    )
}