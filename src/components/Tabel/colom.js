export  const COLUMNS =[

{
    header : "Nama",
    key:"EmployeeName",
   
},
{
    header : "Exts",
    key:"PhoneExt"

},
{
    header : "Email",
    key:"EmailAddress"

},
{
    header : "Division",
    key:"Division"

},
{
    header : "Department",
    key:"Department"

},
{
    header: 'Actions',
    td: (data) => {
      return (
        <div>
          <img
            src={"https://img.favpng.com/13/5/8/computer-icons-scalable-vector-graphics-apple-icon-image-format-png-favpng-cgAuL603i7tr4xHGcwYqr24db.jpg"}
            width='30'
            height='20'
            onClick={() => alert('this is delete for id ' + data.id)}
          />{' '}
          // delete icon
          <img
            src={"https://img.favpng.com/13/5/8/computer-icons-scalable-vector-graphics-apple-icon-image-format-png-favpng-cgAuL603i7tr4xHGcwYqr24db.jpg"}
            width='30'
            height='20'
            onClick={() => alert('this is edit for id ' + data.id)}
          /> // edit icon
        </div>
      )
    }
},



]