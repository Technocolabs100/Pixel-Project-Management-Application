import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Contacts(){
    return(
        <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold py-3 mb-0">Contact</h3>
          <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
            <ul
              className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#list-view"
                  role="tab"
                >
                  List View
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#grid-view"
                  role="tab"
                >
                  Grid View
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="tab-content">
      <div className="tab-pane fade show active" id="list-view">
        <div className="row clearfix g-3">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Contact Add</h6>
              </div>
              <div className="card-body">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="fileimg" className="form-label">
                        Contact Image
                      </label>
                      <input
                        type="File"
                        className="form-control"
                        id="fileimg"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="depone" className="form-label">
                        Person Name
                      </label>
                      <input type="text" className="form-control" id="depone" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="abc" className="form-label">
                        Birthdate
                      </label>
                      <input type="date" className="form-control" id="abc" />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="deptwo" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="deptwo"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="deptwophone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deptwophone"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-3">
              <div className="card-body">
                <table
                  id="myProjectTable"
                  className="table table-hover align-middle mb-0"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Person Name</th>
                      <th>Birthdate</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar1.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Joan Dyer</span>
                      </td>
                      <td>12/03/2021</td>
                      <td>JoanDyer@gmail.com</td>
                      <td>518-555-0145</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Ryan Randall</span>
                      </td>
                      <td>12/03/2021</td>
                      <td>RyanRandall@gmail.com</td>
                      <td>617-555-0164</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar3.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Phil Glover</span>
                      </td>
                      <td>16/03/2021</td>
                      <td>PhilGlover@gmail.com</td>
                      <td>775-555-0117</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar4.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Victor Rampling</span>
                      </td>
                      <td>25/02/2021</td>
                      <td>VictorRampling@gmail.com</td>
                      <td>512-555-0189</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar5.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Sally Graham</span>
                      </td>
                      <td>16/02/2021</td>
                      <td>SallyGraham@gmail.com</td>
                      <td>303-555-0133</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar6.jpg"
                          alt=""
                        />
                        <span className="fw-bold ms-1">Robert Anderson</span>
                      </td>
                      <td>18/01/2021</td>
                      <td>RobertAnderson@gmail.com</td>
                      <td>402-555-0177</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#expedit"
                          >
                            <i className="icofont-edit text-success" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary deleterow"
                          >
                            <i className="icofont-ui-delete text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Row End */}
      </div>
      <div className="tab-pane fade" id="grid-view">
        <div className="row clearfix g-3">
          <div className="col-lg-4">
            <div className="card sticky-lg-top">
              <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Contact Add</h6>
              </div>
              <div className="card-body">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="fileimg" className="form-label">
                        Contact Image
                      </label>
                      <input
                        type="File"
                        className="form-control"
                        id="fileimg"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="depone" className="form-label">
                        Person Name
                      </label>
                      <input type="text" className="form-control" id="depone" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="abc" className="form-label">
                        Birthdate
                      </label>
                      <input type="date" className="form-control" id="abc" />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label htmlFor="deptwo" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="deptwo"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="deptwophone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deptwophone"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Contact
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row row-cols-sm-1 row-cols-md-2 row-col-lg-3 row-cols-xl-2 row-cols-xxl-3">
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar4.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#expedit"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar2.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar1.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar5.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar6.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar7.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar8.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card teacher-card mb-3 flex-column">
                  <div className="card-body d-flex teacher-fulldeatil flex-column">
                    <div className="profile-teacher text-center w220 mx-auto">
                      <a href="#">
                        <img
                          src="assets/images/lg/avatar9.jpg"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        />
                      </a>
                      <button
                        className="btn btn-primary"
                        style={{ position: "absolute", top: 15, right: 15 }}
                        data-bs-toggle="modal"
                        data-bs-target="#editprofile"
                      >
                        <i className="icofont-edit" />
                      </button>
                      <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                        <span className="text-muted small">
                          Contact ID : Con-0001
                        </span>
                      </div>
                    </div>
                    <div className="teacher-info   w-100">
                      <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                        Adrian Allan
                      </h6>
                      <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                        24 years, California
                      </span>
                      <div className="row g-2 pt-2">
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-ui-touch-phone" />
                            <span className="ms-2">202-555-0174 </span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-email" />
                            <span className="ms-2">adrianallan@gmail.com</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-birthday-cake" />
                            <span className="ms-2">19/03/1980</span>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="d-flex align-items-center">
                            <i className="icofont-address-book" />
                            <span className="ms-2">775-555-0117</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}