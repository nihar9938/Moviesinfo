import React from 'react';

const  Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" href="#">
              MovieMania
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            <a href='#' className=" text-lg brand-text text-white ">Login</a>
            </li>
            <li className="nav-item d-inline-block mr-4 ">
              <a href='#' className=" text-lg brand-text text-white ">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;