import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";

export default function AllStaffMembers() {
  const conponentPDF = useRef();
  const [staffmembers, setStaffMembers] = useState([]);
  //   const [search, setsearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  //   console.log(search);

  useEffect(() => {
    function getStaffMembers() {
      axios
        .get("http://localhost:8070/staffmember/allsmember")
        .then((res) => {
          setStaffMembers(res.data);
          console.log(res);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStaffMembers();
  });

  async function deleteSMember(id) {
    console.warn(id);
    let result = await fetch(
      `http://localhost:8070/staffmember/deletesmember/${id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();
    if (result) {
      alert("Delete Successfully");
    }
  }

  async function updateSMember(id) {
    console.warn(id);
    let result = await fetch(
      `http://localhost:8070/staffmember/updatesmember/${id}`,
      {
        method: "Update",
      }
    );
    result = await result.json();
    if (result) {
      alert("Update Successfully");
    }
  }

  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: () => alert("Download Successfully"),
  });

  const filteredMembers = staffmembers.filter((item) =>
    item.mname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    //class create form

    <div>
      <div class="card bg-dark text-white">
        <img
          src="financebg.png"
          class="card-img"
          alt="..."
          style={{ height: "375px", filter: "brightness(40%)" }}
        />
        <div class="card-img-overlay">
          <br></br>
          <br></br>
          <h1 class="card-title" style={{ fontSize: "90px" }}>
            <b>ALL STAFF</b> <b class="text-success">MEMBERS</b>
          </h1>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      <div style={{ width: "1350px" }}>
        <br></br>
        <br></br>
        <Link to="/AddStaffMember">
          <button type="button" class="btn1 btn-success btn-lg">
            <i class="fa-solid fa-folder-plus"></i>ADD
          </button>
        </Link>
        <br></br>
        <br></br>

        <form class="d-flex">
          <input
            class="form-control me-2 "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Name"
            aria-label="Search"
          />
        </form>

        <br></br>
        <div>
          <div ref={conponentPDF} style={{ width: "100%" }}>
            <table class="table table-success table-striped">
              <thead class="table table-dark table-striped">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                  <th scope="col">Gender</th>
                  <th scope="col">NIC</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((staffmembers, index) => {
                  return (
                    <tr key={staffmembers._id}>
                      <th scoop="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/get/${staffmembers._id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {staffmembers.mname}{" "}
                        </a>{" "}
                      </td>
                      <td>{staffmembers.memail}</td>
                      <td>{staffmembers.mphone}</td>
                      <td>{staffmembers.mdate}</td>
                      <td>{staffmembers.mgender}</td>
                      <td>{staffmembers.mnic}</td>
                      <td>
                        <a
                          className="btn btn-success"
                          href={`/updatesmember/${staffmembers._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Update
                        </a>

                        <h> </h>

                        <a
                          className="btn btn-secondary"
                          href="#"
                          onClick={() => deleteSMember(staffmembers._id)}
                        >
                          <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <br></br>

          <a className="btn btn-outline-success" href="#" onClick={generatePDF}>
            <i className="fas fa-download"></i>&nbsp;Download
          </a>

          <br></br>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div
        class="card bg-dark text-white"
        style={{ height: "350px", width: "100%" }}
      >
        <div class="card-img-overlay">
          <br></br>
          <h3 class="card-title" style={{ float: "left" }}>
            <b class="text-success">CONTACT</b>
          </h3>
          <br></br>
          <i
            class="fa-brands fa-facebook fa-2xl"
            style={{ float: "right", marginRight: "20px" }}
          ></i>
          <i
            class="fa-brands fa-instagram fa-2xl"
            style={{ float: "right", marginRight: "20px" }}
          ></i>
          <i
            class="fa-brands fa-linkedin fa-2xl"
            style={{ float: "right", marginRight: "20px" }}
          ></i>
          <br></br>
          <br></br>

          <div style={{ float: "left" }}>
            <h5 style={{ textAlign: "left" }}>
              <i class="fa-solid fa-envelope"></i>{" "}
              &nbsp;&nbsp;&nbsp;greenbin@gmail.com
            </h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>
              <i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159
              0580
            </h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>
              <i class="fa-solid fa-location-dot"></i>{" "}
              &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe
            </h5>
          </div>

          <div style={{ float: "right", width: "50%" }}>
            <h5 style={{ textAlign: "left" }}>HOME</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>ABOUT US</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>WORKING DAYS</h5>
            <br></br>
            <h5 style={{ textAlign: "left" }}>SERVICES</h5>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <h style={{ float: "left", marginLeft: "80%" }}>
            privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms &
            conditions
          </h>
        </div>
      </div>
    </div>
  );
}
