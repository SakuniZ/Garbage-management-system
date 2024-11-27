import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function Home(){

 
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  
    

  

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="homebg.png" class="card-img" alt="..." style={{height: '375px',filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '70px', textAlign:'left',float:'left', maxWidth:'700px'}}><b>WE COLLECT ALL YOUR DIRTY</b> <b class="text-success">STUFF</b></h1>
                
                
                

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right', marginTop:'215px'}}>
                <Link to='/viewproduct'>
                <button type="button" class="btn1 btn-success btn-lg" style={{marginRight: '50px'}}>RESEARCH AND PRODUCTS</button>
                </Link>
                <Link to='/requests'>
                <button type="button" class="btn2 btn-success btn-lg" style={{marginRight: '50px'}}>REQUEST PICKUP</button>
                </Link>
                </div>

             </div>
          </div>

          
          <br></br>
          <br></br>

          <h2><b>OUR SERVICES</b></h2>
          <br></br>


        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">

                <div class="card mb-3" style={{width: '1300px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="homep1.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">Regular Services</h4>
                        <p class="card-text" style={{width: '700px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <br></br>
                        <button type="button" class="btn2 btn-success btn-lg" >LEARN MORE</button>
                    </div>
                    </div>
                </div>
               </div>
                    
                </div>
                <div class="carousel-item">

                <div class="card mb-3" style={{width: '1300px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="homep4.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">Special Services</h4>
                        <p class="card-text" style={{width: '700px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        <br></br>
                        <button type="button" class="btn2 btn-success btn-lg" >LEARN MORE</button>
                    </div>
                    </div>
                </div>
               </div>
                
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" style={{marginLeft:'-40px'}}>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" style={{marginRight:'-40px'}}>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2><b>ABOUT US</b></h2>
            <br></br>

            <div class="card mb-3" style={{width: '1300px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <div class="card-body">
                        <p class="card-text" style={{width: '700px', marginLeft:'40px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <button type="button" class="btn2 btn-success btn-lg" style={{marginLeft:'240px'}}>LEARN MORE</button>
                    </div>
                    </div>
                    <div class="col-md-8" >
                    <img src="homep2.png" class="img-fluid rounded-start" alt="..." style={{float:'right',width:'430px'}}/>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <h2><b>HOW DOES IT WORK?</b></h2>
            <br></br>

            <div class="card mb-3" style={{width: '1300px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="homep3.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text" style={{width: '700px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <button type="button" class="btn2 btn-success btn-lg" >LEARN MORE</button>
                    </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

     
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
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
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