

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MDBModal, MDBModalHeader, MDBInput } from "mdbreact";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import MOCK_DATA from "../MOCK_DATA.json";
import Style from "./Admin.module.css";
import './admincCss.css'

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
      header: <i class="far fas fa-sort fa-s"> Name</i> ,
      key: "EmployeeName",
    },
    {
      header: <i class="fas  fa-sort fa-s"> Exts</i>,
      key: "PhoneExt",
    },
    {
      header: <i class="fas  fa-sort fa-s"> E-mail</i>,
      key: "EmailAddress",
    },
    {
      header: <i class="fas  fa-sort fa-s"> Division</i>,
      key: "Division",
    },
    {
      header: <i class="fas  fa-sort fa-s"> Department</i>,
      key: "Department",
    },
    {
      header: <i class="fas  fa-s">  Actions</i>,
      maxWidth: 2,
      className:"tes ini",
      td : (DataMember) => {

        const setDataku = () => {
          setDataMember(DataMember.EmployeeName);
          setDataMemberId(DataMember.IdEmployee);
          setDataMemberExt(DataMember.PhoneExt);
          toggle();
        };

        return (
          <div  onClick={setDataku} className={Style.ActionButtonWrap}>
           <i class="far fa-edit fa-1x"> Edit</i>
            {/* <img
              src={
                "https://www.pngfind.com/pngs/m/70-704605_edit-icon-red-edit-icon-hd-png-download.png"
              }
              width="20"
              height="20"


            />{" "} */}
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
        <h1>Contact Person Admin Panel</h1>
        <div onClick={LoginAction} className={Style.BtnLogin}>
          <span >
            <b>Logout</b>
            {" "}
          </span>
        </div>

        <ReactFlexyTable
          data={MOCK_DATA}
          // globalSearch
          pageSize= {20}
          columns={COLUMNS}
          filterable
          sortable
          pageSizeOptions={[5,10,20,30,50,100,200]}
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
