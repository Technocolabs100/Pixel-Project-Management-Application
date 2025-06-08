import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function TableExample() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Tables</h3>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row align-item-center">
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Basic Table</h6>
          </div>
          <div className="card-body basic-custome-color">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Otto</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Wilson</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Alexander</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3  bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Variants Table</h6>
            <p>
              Use contextual classes to color tables, table rows or individual
              cells.
            </p>
          </div>
          <div className="card-body  variants-custome-color">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-primary">
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-success">
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-danger">
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-warning">
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-info">
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-light">
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3  bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Striped Table</h6>
            <p>
              Use <code>.table-striped</code> to add zebra-striping to any table
              row within the <code>&lt;tbody&gt;</code>.
            </p>
          </div>
          <div className="card-body basic-custome-color">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Otto</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Wilson</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Alexander</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3  bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Hoverable Table</h6>
            <p>
              Add <code>.table-hover</code> to enable a hover state on table
              rows within a <code>&lt;tbody&gt;</code>.
            </p>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Otto</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Wilson</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Alexander</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3  bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Datatable</h6>
          </div>
          <div className="card-body">
            <table
              id="patient-table"
              className="table table-hover align-middle mb-0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Patients</th>
                  <th>Age</th>
                  <th>Adress</th>
                  <th>Admited</th>
                  <th>Discharge</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PT-0001</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar3.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Molly </span>
                  </td>
                  <td>45</td>
                  <td>70 Bowman St. South Windsor, CT 06074</td>
                  <td>May 13, 2021</td>
                  <td>May 16, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        {" "}
                        <span className="sr-only">40% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-info">Admit</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0011</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar1.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Brian</span>
                  </td>
                  <td>35</td>
                  <td>123 6th St. Melbourne, FL 32904</td>
                  <td>May 13, 2021</td>
                  <td>May 22, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0045</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar2.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Julia</span>
                  </td>
                  <td>42</td>
                  <td>4 Shirley Ave. West Chicago, IL 60185</td>
                  <td>May 17, 2021</td>
                  <td>May 16, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0030</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar4.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Sonia</span>
                  </td>
                  <td>25</td>
                  <td>123 6th St. Melbourne, FL 32904</td>
                  <td>May 13, 2021</td>
                  <td>May 23, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "15%" }}
                      >
                        {" "}
                        <span className="sr-only">15% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-info">Admit</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0078</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar5.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Adam H</span>
                  </td>
                  <td>18</td>
                  <td>4 Shirley Ave. West Chicago, IL 60185</td>
                  <td>May 18, 2021</td>
                  <td>May 18, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      >
                        {" "}
                        <span className="sr-only">85% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-info">Admit</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0098</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar9.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Alexander</span>
                  </td>
                  <td>38</td>
                  <td>123 6th St. Melbourne, FL 32904</td>
                  <td>May 13, 2021</td>
                  <td>May 22, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0999</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar11.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Gabrielle</span>
                  </td>
                  <td>65</td>
                  <td>4 Shirley Ave. West Chicago, IL 60185</td>
                  <td>May 17, 2021</td>
                  <td>May 16, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-0101</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar12.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Grace</span>
                  </td>
                  <td>40</td>
                  <td>4 Shirley Ave. West Chicago, IL 60185</td>
                  <td>May 17, 2021</td>
                  <td>May 16, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-1001</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar8.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Ryan </span>
                  </td>
                  <td>34</td>
                  <td>70 Bowman St. South Windsor, CT 06074</td>
                  <td>May 13, 2021</td>
                  <td>May 16, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        {" "}
                        <span className="sr-only">40% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-info">Admit</span>
                  </td>
                </tr>
                <tr>
                  <td>PT-1101</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar7.jpg"
                      className="avatar sm rounded-circle me-2"
                      alt="profile-image"
                    />
                    <span>Christian</span>
                  </td>
                  <td>21</td>
                  <td>123 6th St. Melbourne, FL 32904</td>
                  <td>May 13, 2021</td>
                  <td>May 22, 2021</td>
                  <td>
                    <div className="progress" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "100%" }}
                      >
                        {" "}
                        <span className="sr-only">100% Complete</span>{" "}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Discharge</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* Row end  */}
  </div>
</div>

  );
}