import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, useParams
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Company from "./pages/Company";
import Navbar from "./components/Navbar";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import PointsForm from "./pages/AddClientPoints";
import CompanyUpdateForm from "./pages/UpdateCompany";
import UpdateClient from "./pages/UpdateClient";
import AddCompany from "./pages/AddCompany";


function App() {
    return (
        <Router>
            <div>
                <Navbar/>

                <div className="container">
                    <Routes>
                        <Route path="/companies" element={<Company/>}/>
                        <Route path="/add-company" element={<AddCompany/>}/>
                        <Route path="/companies/:id/edit" element={<CompanyUpdateForm/>}/>
                        <Route path="/companies/:id/delete" element={<Company/>}/>
                        <Route path="/companies/:id/clients" element={<Client/>}/>
                        <Route path="/companies/:id/clients/add" element={<AddClient/>}/>
                        <Route path="/companies/:id/clients/:clientId/edit" element={<UpdateClient/>}/>
                        <Route path="/companies/:id/clients/:clientId" element={<Client/>}/>
                        <Route path="/companies/:id/clients/:clientId/points" element={<PointsForm/>}/>
                        <Route path="/client" element={<Client/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
