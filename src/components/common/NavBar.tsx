import React from 'react'
import { Link } from 'react-router-dom'


const NavBar : React.FC<{}> = () => {


    return (

        <div>
            <nav className="navbar navbar-expand-md  navbar-light bg-light my-card">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <Link to="/">
                <span className="navbar-brand font-weight-bold my-color " >
                    <i className="fas fa-feather-alt"></i>
                    <span className="mx-2">
                        Plantilla
                    </span>
                </span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <Link to="/">
                    <span className="mx-1">
                        Home
                    </span>
                </Link>
                <Link to="/about">
                    <span className="mx-1">
                    About
                    </span>
                </Link>
                <Link to="/users">
                    <span className="mx-1">
                    Users
                    </span>
                </Link>
                
            </div>
          
            </nav>

        </div>
    )
}

export default NavBar