
import { Link } from "react-router-dom";

import React from 'react'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import MOCK_DATA from "../MOCK_DATA.json"
import {COLUMNS} from "./colom"
import "./Tabel.css";
import {
  MDBModal,
  MDBModalHeader,
  MDBInput,
} from "mdbreact";
import Style from "./Tabel.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const Tabel = () => {
  
  //login from 
   const [LoginUsername , SetLoginUsername] = useState({value: ''})
   const [LoginPassword , SetLoginPassword] = useState({value: ''})

  // login end


  const [ModalToglle, setModalToglle] = useState(false);
  const [LoginValid, setLoginValid] = useState(false);
  const history = useHistory();

  const toggle = () => {
    setModalToglle(true);
  };
  const toggleClose = () => {
    setModalToglle(false);
  };


  useEffect(() => {
    if (LoginValid === true) {
      history.push("/admin");
    }
  }, [LoginValid]);

  //hendel login auth akan di taruh di sini
  const LoginAction = () => {

    alert ("anda masuk dengan mengunakan Username  : " +LoginUsername.value +" dan Menggunakan Password : " + LoginPassword.value)
    setLoginValid(true);


  };
  // end Hendel Submit  

  const handleChange1 =(event)=> {    
    SetLoginUsername({value: event.target.value});  
  }

  const handleChange2 =(event)=> {    
    SetLoginPassword({value: event.target.value});  
  }



 
  return (
    <div className={Style.TabelContainer}>
      <div className={Style.CardContainer}>
        <h1>Contanct Person</h1>
        <div className={Style.BtnLogin}>
          <Link onClick={toggle}>
            <b>Login To admin</b>{" "}
          </Link>
          <MDBModal isOpen={ModalToglle} toggle={toggle}>
            {/* login */}
            <div className={Style.LoginContainer}>
              <div className={Style.CardLogin}>
                <MDBModalHeader toggle={toggleClose}>
                  {" "}
                  <h3>Login Admin</h3>
                </MDBModalHeader>
                <form onSubmit={LoginAction}>
                <MDBInput label="Your e-mail" type="email" onChange={handleChange1} value={LoginUsername.value}/>
                <MDBInput label="Your Password" type="Password" onChange={handleChange2} value={LoginPassword.value}/>
                <button type="submit" onClick={LoginAction} className="btn-green btn">
                  Login
                </button>
                </form>
              </div>
            </div>
            {/* login end */}
          </MDBModal>
        </div>

         <ReactFlexyTable data={MOCK_DATA}    globalSearch columns={COLUMNS} filterable nonFilterCols={["gender","email"]}/>
        





      </div>
    </div>
  );
};
