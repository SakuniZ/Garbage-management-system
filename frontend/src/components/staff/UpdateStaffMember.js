import {Link,useParams,useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import React, {useState,useEffect} from "react";


export default function UpdateStaffMember(){

  const [mname, setMName] = React.useState("");
  const [memail, setMEmail] = React.useState("");
  const [mphone, setMPhone] = React.useState("");
  const [mdate, setMDate] = React.useState("");
  const [maddress, setMAddress] = React.useState("");
  const [mage, setMAge] = React.useState("");
  const [mgender, setMGender] = React.useState("");
  const [mrole, setMRole] = React.useState("");
  const [mnic, setMNIC] = React.useState("");
  const [mwdays, setMWDays] = React.useState("");
  const [msalary, setMSalary] = React.useState("");
  const [error, setError] = useState("false");
  const params = useParams();
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(()=>{
    getStaffMemberDetails();
  },[])

  const getStaffMemberDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/staffmember/getsmember/${params.id}`);
    result = await result.json();
    setMName(result.mname);
    setMEmail(result.memail);
    setMPhone(result.mphone);
    setMDate(result.mdate);
    setMAddress(result.maddress);
    setMAge(result.mage);
    setMGender(result.mgender);
    setMRole(result.mrole);
    setMNIC(result.mnic);
    setMWDays(result.mwdays);
    setMSalary(result.msalary);
  }

  const UpdateStaffMember = async () =>{
    console.warn(mname,memail,mphone,mdate,maddress,mage,mgender,mrole,mnic,mwdays,msalary)
    let result = await fetch(`http://localhost:8070/staffmember/updatesmember/${params.id}`,{
      method:'put',
      body:JSON.stringify({mname,memail,mphone,mdate,maddress,mage,mgender,mrole,mnic,mwdays,msalary}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      
      alert("Update Successfully")
      navigate('/AllStaffMembers');
      
    }
    
  }

  var date = new Date();
  date.setDate(date.getDate() + 7);
 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="staffbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>UPDATE</b> <b class="text-success">STAFF</b></h1>
                <br></br>
                <br></br>
                <br></br>

                

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>UPDATE STAFF MEMBER</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
             <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={mname}
                  onChange={(e)=>{

                    setMName(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={memail}
                  onChange={(e)=>{

                    setMEmail(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&memail.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Phone No:</b></label>
                  <input type="tel" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={mphone}
                  onChange={(e)=>{

                    setMPhone(e.target.value = e.target.value.slice(0, 10));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mphone.length<=0?<lable class="text" style={{color:'#FF0000'}}>Phone No can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Date:</b></label>
                  <input type="date" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={mdate} min={new Date().toISOString().split('T')[0]} max={date.toISOString().split('T')[0]}
                  onChange={(e)=>{

                    setMDate(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mdate.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Address:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={maddress}
                  onChange={(e)=>{

                    setMAddress(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&maddress.length<=0?<lable class="text" style={{color:'#FF0000'}}>Address can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Age:</b></label>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={mage}
                  onChange={(e)=>{

                    setMAge(e.target.value = e.target.value.slice(0, 2));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mage.length<=0?<lable class="text" style={{color:'#FF0000'}}>Age can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Gender:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={mgender}
                  onChange={(e)=>{

                    setMGender(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&mgender.length<=0?<lable class="text" style={{color:'#FF0000'}}>Gender can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Role:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={mrole}
                  onChange={(e)=>{

                    setMRole(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Male">Recycling Facility Manager</option>
                    <option value="Female">Driver</option>
                    <option value="Male">Cleaner</option>
                    <option value="Female">Waste Collection Supervisor</option>
                    <option value="Male">Recycling Workers</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&mrole.length<=0?<lable class="text" style={{color:'#FF0000'}}>Role can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>NIC:</b></label>
                  <input type="number" class="form-control is-invalid"   id="validationServer01" aria-label="Default select example" value={mnic}
                  onChange={(e)=>{

                    setMNIC(e.target.value = e.target.value.slice(0, 12));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mnic.length<=0?<lable class="text" style={{color:'#FF0000'}}>NIC can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Working Days Per Month:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example" value={mwdays}
                  onChange={(e)=>{

                    setMWDays(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="7 Days">7 Days</option>
                    <option value="14 Days">14 Days</option>
                    <option value="21 Days">21 Days</option>
                    <option value="30 Days">30 Days</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&mwdays.length<=0?<lable class="text" style={{color:'#FF0000'}}>Working Days can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Salary:</b></label>
                  <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example" value={msalary}
                  onChange={(e)=>{

                    setMSalary(e.target.value);
                  
                    }}required/>
                  <span class="input-group-text">.00</span>
                  <div className="invalid-feedback">
                    {error&&msalary.length<=0?<lable class="text" style={{color:'#FF0000'}}>Salary can't be empty!</lable>:""}
                  </div>
                  </div>
              </div>
             
              <div class="col-12">
              <br></br>
              <Link to='/staffdash'>
              <button type="submit" class="btn btn-success" onClick={UpdateStaffMember}>SUBMIT</button>
              </Link>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>

        

      </div>
      <br></br>
      <br></br>

      <div class="card bg-dark text-white" style={{height: '350px', width:'100%'}}>
           
             <div class="card-img-overlay">
              <br></br>
                <h3 class="card-title" style={{float: 'left'}}><b class="text-success">CONTACT</b></h3>
                <br></br>
                <i class="fa-brands fa-facebook fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-linkedin fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <br></br>
                <br></br>
                

                <div style={{float: 'left'}}>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;greenbin@gmail.com</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                
                </div>

                <div style={{float: 'right',width: '50%'}}>
                <h5 style={{textAlign: 'left'}}>HOME</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>ABOUT US</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>WORKING DAYS</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>SERVICES</h5>

                
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <h style={{float: 'left', marginLeft:'80%'}}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>

                
               
                
                

             </div>
          </div>



      
      </div>
      
      
    )
    
}