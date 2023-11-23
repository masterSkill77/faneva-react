import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import './Couverture.css';
//import logo2 from './efianara.png';

import { FaEnvelope, FaSignInAlt } from "react-icons/fa";

const Navbarlogin = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navbarStyle = {
    background: "#2F4F4F", // Couleur de fond bleue
    color: "white", // Couleur du texte blanc
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Ombre légère
  };

  const dropStyle = {
    // Couleur de fond bleue foncée pour les Dropdowns
    color: "white", // Couleur du texte blanc
    borderRadius: "8px", // Coins arrondis
    // Espace intérieur réduit
    margin: "0px 0", // Marge autour du Dropdown
  };

  const dropItemStyle = {
    color: "black", // Couleur du texte blanc pour les éléments de Dropdown
    "&:hover": {
      background: "#1a5276", // Couleur de fond au survol
    },
  };

  const linkStyle = {
    color: "white", // Couleur du texte blanc
    margin: "0 10px", // Marge autour des liens de navigation
  };

  const logoStyle = {
    color: "white",
    marginRight: "10px", // Marge à droite du logo
  };

  return (
    <Navbar style={navbarStyle} expand="lg" sticky="top" className="Navbar">
      <Navbar.Brand style={logoStyle}>
        <img
          alt="Logo"
          // src={logo2}
          width="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link key="home" href="inscription" style={linkStyle}>
            <FaEnvelope /> Inscription
          </Nav.Link>
          <Nav.Link key="about" href="/" style={linkStyle}>
            <FaSignInAlt /> Se connecter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  {/* Dropdowns */ }
  {/* <Dropdown style={dropStyle}>
          <Dropdown.Toggle variant="transparent" style={dropStyle}>
            Organisation
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={dropItemStyle}>ONG</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={dropItemStyle}>Association</Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={dropItemStyle}>Entreprise</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={dropStyle}>
          <Dropdown.Toggle variant="transparent" style={dropStyle}>
            Offre
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={dropItemStyle}>Stage</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={dropItemStyle}>Emploi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={dropStyle}>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={dropStyle}>
            Secteur activité
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={dropItemStyle}>ONG</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={dropItemStyle}>Association</Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={dropItemStyle}>Entreprise</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

          <Dropdown style={dropStyle}>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={dropStyle}>
            Secteur activité
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={dropItemStyle}>ONG</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={dropItemStyle}>Association</Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={dropItemStyle}>Entreprise</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

  {/* Autres Dropdowns... */ }

  {/* Liens de navigation */ }


};

export default Navbarlogin;
