
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
  const [ModalToglle2, setModalToglle2] = useState(false);
  const [LoginValid, setLoginValid] = useState(false);

  //set togle modal 
  function toggle() {
    setModalToglle(true);
    setDataInput({value :''})
 
  };
  function toggle2() {
    setModalToglle2(true);
 
  };
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
       
        const setDataku =()=>{
          
          setDataMember(DataMember.EmployeeName)
          setDataMemberId(DataMember.IdEmployee)
          setDataMemberExt(DataMember.PhoneExt)
          toggle() ;
        }

        const setHapusku= ()=> {

          setDataMember(DataMember.EmployeeName)
          setDataMemberId(DataMember.IdEmployee)
          setDataMemberExt(DataMember.PhoneExt)
          toggle2() ;


        }
      
        return (
          <div>
            <img
             src={
              "https://img.favpng.com/13/5/8/computer-icons-scalable-vector-graphics-apple-icon-image-format-png-favpng-cgAuL603i7tr4xHGcwYqr24db.jpg"
            }
             
              width="30"
              height="20"
              onClick={
                setDataku
              }
            />{" "}
          </div>
        );
      },
    },
  ];

  // cloumend

  useEffect(() => {
    if (LoginValid === true) {
      alert("anda Telah Log Out");
      history.push("/");
    }
  }, [LoginValid]);


  const handleChange =(event)=> {    
    setDataInput({value: event.target.value});  
  }
  
  const LoginAction = () => {
    setLoginValid(true);
  };

  const Hapusbenar = ()=>{
    toggleClose2()
    alert("Hapus Berhasil Dengan Inputan = "+DataMemberTampil)
  }

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


      {/* modal hapus */}
      {/* <MDBModal isOpen={ModalToglle2} toggle={toggle2}>
        <div className={Style.LoginContainer}>
          <div className={Style.CardLogin}>
            <MDBModalHeader toggle={toggleClose2} className="text-center">
              {" "}
              <h3>Apakah Anda yakin untuk mengahpus data User:   "<b>{DataMemberTampil}</b>"</h3>
            </MDBModalHeader>
            <button onClick={Hapusbenar} className="btn-red btn">
            Hapus
            </button>
            <button onClick={ toggleClose2} className="btn-green btn">
            Cancle
            </button>
          </div>
        </div>
      </MDBModal> */}
      {/* modal edit hapus  */}
    </div>
  );
};
