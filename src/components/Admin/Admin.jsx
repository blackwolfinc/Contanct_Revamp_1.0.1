import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
// import './Tabel.css'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import MOCK_DATA from "../MOCK_DATA.json"
import {COLUMNS} from "./colom"
import Style from "./Admin.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const Admin = () => {
  
   


  const [LoginValid, setLoginValid] = useState(false);
  const history = useHistory();

  



    



  useEffect(() => {
    if (LoginValid === true) {
      alert("keluar bos");
      history.push("/");
    }
  }, [LoginValid]);

  const LoginAction = () => {
    setLoginValid(true);
  };
  
  return (
      
    <div className={Style.TabelContainer}>
      <div className={Style.CardContainer}>
        <h1>Contanct Person Admin</h1>
        <div className={Style.BtnLogin}>
          <span  onClick={LoginAction}>
            <b>Logout</b>{" "}
          </span>
        </div>
         
       <ReactFlexyTable data={MOCK_DATA}  globalSearch columns={COLUMNS} filterable nonFilterCols={["gender","email"]}/>
      </div>
    </div>
  );
};
