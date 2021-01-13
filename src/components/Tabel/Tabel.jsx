import React from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Tabel.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import Style from "./Tabel.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const Tabel = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
    ],
  };

  const [ModalToglle, setModalToglle] = useState(false);
  const [LoginValid, setLoginValid] = useState(false);
  const [DataUmum, setDataUmum] = useState({});
  const [DataTampil, setDataTampil] = useState({});
  const history = useHistory();

  const toggle = () => {
    setModalToglle(true);
  };
  const toggleClose = () => {
    setModalToglle(false);
  };

  useEffect(() => {
    let axios = require("axios");
    let config = {
      method: "get",
      url: "http://universities.hipolabs.com/search?country=indonesia",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDataUmum(response.data);
        console.log("tes");

        let databebas = DataUmum;
        // alert(DataUmum.length)
        console.log();
        let dataku = {};

        for (let index = 0; index < DataUmum.length; index++) {
          dataku = {
            name: DataUmum[index].name,
            position: DataUmum[index].country,
            office: DataUmum[index].domains[0],
            age: "12",
            salary: "$123",
            date: "2001/06/27",
          };
          data.rows.push(dataku);
          console.log(data.rows);
        }

        setDataTampil(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  useEffect(() => {
    if (LoginValid === true) {
      alert("masuk bos");
      history.push("/admin");
    }
  }, [LoginValid]);

  const LoginAction = () => {
    setLoginValid(true);
  };
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
                <MDBInput label="Your e-mail" type="email" />
                <MDBInput label="Your Password" type="Password" />
                <button onClick={LoginAction} className="btn-green btn">
                  Login
                </button>
              </div>
            </div>
            {/* login end */}
          </MDBModal>
        </div>

        <MDBDataTable
          className={Style.Tabel}
          striped
          bordered
          big
          data={DataTampil}
        />
      </div>
    </div>
  );
};
