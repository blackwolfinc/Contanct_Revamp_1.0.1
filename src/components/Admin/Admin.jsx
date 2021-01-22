

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MDBModal, MDBModalHeader, MDBInput } from "mdbreact";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import MOCK_DATA from "../MOCK_DATA.json";
import Style from "./Admin.module.css";

export const Admin = () => {
  //data dari member
  const [DataMemberTampil, setDataMember] = useState();
  const [DataMemberId, setDataMemberId] = useState();
  const [DataMemberExt, setDataMemberExt] = useState();
  const [DataDataInput, setDataInput] = useState({ value: "" });
  //data dari member end
  // function  Hook Trigger
  const history = useHistory();
  const [idEmploye, setIdEmploye] = useState(0);
  const [ModalToglle, setModalToglle] = useState(false);
  const [ModalToglle2, setModalToglle2] = useState(false);
  const [LoginValid, setLoginValid] = useState(false);

  //set togle modal
  function toggle() {
    setModalToglle(true);
    setDataInput({ value: "" });
  }
  function toggle2() {
    setModalToglle2(true);
  }
  const toggleClose = () => {
    setModalToglle(false);
  };
  const toggleClose2 = () => {
    setModalToglle2(false);
  };
  //set togle modal end
  // coloum
  const COLUMNS = [
    {
      header: "Nama",
      key: "EmployeeName",
    },
    {
      header: "Exts",
      key: "PhoneExt",
    },
    {
      header: "Email",
      key: "EmailAddress",
    },
    {
      header: "Division",
      key: "Division",
    },
    {
      header: "Department",
      key: "Department",
    },
    {
      header: "Actions",
      td: (DataMember) => {
        const setDataku = () => {
          setDataMember(DataMember.EmployeeName);
          setDataMemberId(DataMember.IdEmployee);
          setDataMemberExt(DataMember.PhoneExt);
          toggle();
        };

        return (
          <div>
            <img
              src={
                "https://img.favpng.com/13/5/8/computer-icons-scalable-vector-graphics-apple-icon-image-format-png-favpng-cgAuL603i7tr4xHGcwYqr24db.jpg"
              }
              width="30"
              height="20"
              onClick={setDataku}
            />{" "}
          </div>
        );
      },
    },
  ];

  // cloumend
  // ketika Log out
  useEffect(() => {
    if (LoginValid === true) {
      alert("anda Telah Log Out");
      history.push("/");
    }
  }, [LoginValid]);

  //  ketika input di rubah
  const handleChange = (event) => {
    setDataInput({ value: event.target.value });
  };

  const LoginAction = () => {
    setLoginValid(true);
  };

  // ketika save button di klik
  const SaveEdit = () => {
    alert("Save Berhasil Dengan Inputan = " + DataDataInput.value);
    toggleClose();
  };

  return (
    <div className={Style.TabelContainer}>
      <div className={Style.CardContainer}>
        <h1>Contanct Person Admin</h1>
        <div className={Style.BtnLogin}>
          <span onClick={LoginAction}>
            <b>Logout</b>{" "}
          </span>
        </div>

        <ReactFlexyTable
          data={MOCK_DATA}
          globalSearch
          pageSize= {20}
          columns={COLUMNS}
          filterable
          nonFilterCols={["gender", "email"]}
        />
      </div>
      {/* modal Edit */}
      <MDBModal isOpen={ModalToglle} toggle={toggle}>
        <div className={Style.LoginContainer}>
          <div className={Style.CardLogin}>
            <MDBModalHeader toggle={toggleClose}>
              {" "}
              <h3>
                Edit Data "<b>{DataMemberTampil}</b>"
              </h3>
            </MDBModalHeader>
            <MDBInput
              label={"Data Awal : " + DataMemberExt}
              type="text"
              onChange={handleChange}
              value={DataDataInput.value}
            />
            <button onClick={SaveEdit} className="btn-green btn">
              Save Edit
            </button>
          </div>
        </div>
      </MDBModal>
      {/* modal edit end  */}
    </div>
  );
};
