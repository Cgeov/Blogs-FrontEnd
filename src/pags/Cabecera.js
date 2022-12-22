import React,{ Component } from "react";
import { Outlet, Link } from "react-router-dom";

class Cabecera extends Component{
    render(){
        return(
            <div>
            <nav class="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container">
            <Link className="navbar-brand" to="/">
            <img src="assets/img/logo.png" alt="logo"/>
            </Link>
                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <Link className="nav-link" to="/">Principal</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/blogs">Articulo</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/gestionar">Gestionar</Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link" to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            <Outlet/>
            </div>
        );
    }
}

export default Cabecera;