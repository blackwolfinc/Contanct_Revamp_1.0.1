
// import './Tabel.css'
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import MOCK_DATA from "../MOCK_DATA.json";
import Style from "./Admin.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  MDBModal,
  MDBModalHeader,
  MDBInput,
} from "mdbreact";
export const Admin = () => {
  //data dari member
  const [DataMemberTampil, setDataMember] = useState();
  const [DataMemberId, setDataMemberId] = useState();
  const [DataMemberExt, setDataMemberExt] = useState();
  const [DataDataInput, setDataInput] = useState({value: ''});
  //data dari member end
  const history = useHistory();
  const [idEmploye, setIdEmploye] = useState(0);
  const [ModalToglle, setModalToglle] = useState(false);
  const [LoginValid, setLoginValid] = useState(false);

  function toggle() {
    setModalToglle(true);
    setDataInput({value :''})
 
  };
  const toggleClose = () => {
    setModalToglle(false);
  };

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
       
        const setDataku =()=>{
          
          setDataMember(DataMember.EmployeeName)
          setDataMemberId(DataMember.IdEmployee)
          setDataMemberExt(DataMember.PhoneExt)
          toggle() ;
        }
      
        return (
          <div>
            <img
              src={
                "https://cdn1.iconfinder.com/data/icons/virancie-file/30/file_018-delete_file-text-document-doc-remove-512.png"
              }
              width="30"
              height="20"
              onClick={
                setDataku
              }
            />{" "}
            <img
              src={
                "https://img.favpng.com/13/5/8/computer-icons-scalable-vector-graphics-apple-icon-image-format-png-favpng-cgAuL603i7tr4xHGcwYqr24db.jpg"
              }
              width="30"
              height="20"
              onClick={() =>
                alert("this is edit for id " + DataMember.IdEmployee)
              }
            />
          </div>
        );
      },
    },
  ];

  // cloumend

  useEffect(() => {
    if (LoginValid === true) {
      alert("keluar bos");
      history.push("/");
    }
  }, [LoginValid]);


  const handleChange =(event)=> {    
    setDataInput({value: event.target.value});  
  }
  
  const LoginAction = () => {
    setLoginValid(true);
  };

  const SaveEdit =()=> {

    alert("Save Berhasil Dengan Inputan = "+DataDataInput.value)
    toggleClose()
  }

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
           
              <h3>Edit Data     "<b>{DataMemberTampil}</b>"</h3>
            </MDBModalHeader>
            <MDBInput label={"Data Awal : "+DataMemberExt} type="text" onChange={handleChange} value={DataDataInput.value} />
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
