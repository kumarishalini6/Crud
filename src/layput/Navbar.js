import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                 <Link class="navbar-brand"  href="#">React User</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       
                     </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                           
                        <li class="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                         </li>
       
                        <li class="nav-item">
                             <Link className="nav-link active" to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
                        </li>
                        
                    </ul>
                   
                </div>
                    <Link  className="btn btn-outline-light" to="/add">+Add User</Link>
                 </div>
                
            </nav>
            </>
        );
    }
}
 
export default Navbar;