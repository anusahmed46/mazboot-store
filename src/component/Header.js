import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand fw-bold" href="#">MS<i class="fas fa-archway"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{marginLeft:"710px",display:"flex"}}>
          <Link className="btn btn-dark" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-dark" to='/product' style={{marginLeft:"8px"}}>product</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-dark" to='/about' style={{marginLeft:"8px"}}>about</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-dark" to='/contact' style={{marginLeft:"8px"}}>contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header;
