import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const HeaderPage = () => {
  let navigate = useNavigate();
  const userData = localStorage.getItem('userDetails');
  const logOutHandler = () => {
    localStorage.clear();
    navigate('/');
  }
    return (
    <div>
      <nav class="navbar navbar-default navbar-expand-lg navbar-light">
        <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-left">			
            <li>
              <h4>Infinite Customer List</h4>
            </li>
          </ul>
              {userData !== null && <button class="btn btn-primary" onClick={logOutHandler} style={{marginLeft: '106em', width: '10em'}}>Sign up</button>}
        </div>
      </nav>
    </div>
    )
}

export default HeaderPage;