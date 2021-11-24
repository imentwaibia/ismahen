import React from "react";
import { Link } from "react-router-dom";
import {  Nav, NavDropdown } from "react-bootstrap";
//import Button from "components/CustomButtons/Button.js";
export const Home = () => {
  return(
   
    <div>
      <p style={{marginLeft:"400px",fontSize:"40px",color:"#E74C3C"}}>Gestion Des Employés et De Stock</p>


  <div
    style={{ width:"1900px",height:"500px",marginTop: "05%",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVlhr2DOF4vjXUb0H6cjhe3wXOzkY6WBpRtljnCY6SWnL1-n0dppFVDpjf2wqLF2C4oM&usqp=CAU')",backgroundPosition:"center",backgroundSize:"cover",}} className="container border"   >
     <center style={{marginTop: "-10%",}}></center>
  
     
        
          <Link 
            to="/"
            style={{
              paddingRight: "10%",
              fontWeight: "bolder",
              color: "#304ffe",
              flexDirection: "ligne",
            }}
          >
            Acceuil
          </Link>
       
        <Nav
          className="me-auto"
          style={{
            paddingLeft: "90%",
            fontWeight: "bolder",
            color: "#273746",
            flexDirection: "ligne",
            marginTop:"-30px",
            
          }}
        >
          <NavDropdown title="Connexion" style={{color: "#273746"}}>
          <div>
          <Link to="/Login">
            Accées Responsable 
            </Link>
            </div>
            <div>
            <Link to="/Loginmagasin">Accées Magasinier</Link>
            </div>
          </NavDropdown>
        </Nav>
        
        </div>
    </div>
  );
};
export default Home;
