import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";



function Header() {
  
  return (
    <>
        <nav role="navigation" className="navbar navbar-custom">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button data-target="#bs-content-row-navbar-collapse-5" data-toggle="collapse" className="navbar-toggle" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Bootflat-Admin</a>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div id="bs-content-row-navbar-collapse-5" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="getting-started.html">Getting Started</a></li>
              <li className="active"><a href="index.html">Documentation</a></li>
          
              <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">Silverbux <b className="caret"></b></a>
                <ul role="menu" className="dropdown-menu">
                  <li className="dropdown-header">Setting</li>
                  <li><a href="#">Action</a></li>
                  <li className="divider"></li>
                  <li className="active"><a href="#">Separated link</a></li>
                  <li className="divider"></li>
                  <li className="disabled"><a href="#">Signout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
