import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function MembersProfile() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="card border-0 mb-4 no-bg">
          <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
            <h3 className=" fw-bold flex-fill mb-0">Employee Profile</h3>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3">
      <div className="col-xl-8 col-lg-12 col-md-12">
        <div className="card teacher-card  mb-3">
          <div className="card-body  d-flex teacher-fulldeatil">
            <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-0 text-center w220 mx-sm-0 mx-auto">
              <a href="#">
                <img
                  src="assets/images/lg/avatar3.jpg"
                  alt=""
                  className="avatar xl rounded-circle img-thumbnail shadow-sm"
                />
              </a>
              <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6">Web Developer</h6>
                <span className="text-muted small">Employee Id : 00001</span>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Luke Short</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Web Designer
              </span>
              <p className="mt-2 small">
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy
              </p>
              <div className="row g-2 pt-2">
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-ui-touch-phone" />
                    <span className="ms-2 small">202-555-0174 </span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-email" />
                    <span className="ms-2 small">LukeShortn@gmail.com</span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-birthday-cake" />
                    <span className="ms-2 small">19/03/1980</span>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="d-flex align-items-center">
                    <i className="icofont-address-book" />
                    <span className="ms-2 small">
                      2734 West Fork Street,EASTON 02334.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className="fw-bold  py-3 mb-3">Current Work Project</h6>
        <div className="teachercourse-list">
          <div className="row g-3 gy-5 py-3 row-deck">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                      <div className="project-block light-info-bg">
                        <i className="icofont-paint" />
                      </div>
                      <span className="small text-muted project_name fw-bold">
                        {" "}
                        Social Geek Made{" "}
                      </span>
                      <h6 className="mb-0 fw-bold  fs-6  mb-2">UI/UX Design</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-list avatar-list-stacked pt-2">
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar1.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar8.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="row g-2 pt-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-paper-clip" />
                        <span className="ms-2">5 Attach</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-sand-clock" />
                        <span className="ms-2">4 Month</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-group-students " />
                        <span className="ms-2">5 Members</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-ui-text-chat" />
                        <span className="ms-2">10</span>
                      </div>
                    </div>
                  </div>
                  <div className="dividers-block" />
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="small fw-bold mb-0">Progress</h4>
                    <span className="small light-danger-bg  p-1 rounded">
                      <i className="icofont-ui-clock" /> 35 Days Left
                    </span>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                      <div className="project-block bg-lightgreen">
                        <i className="icofont-vector-path" />
                      </div>
                      <span className="small text-muted project_name fw-bold">
                        {" "}
                        Practice to Perfect{" "}
                      </span>
                      <h6 className="mb-0 fw-bold  fs-6  mb-2">
                        Website Design
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-list avatar-list-stacked pt-2">
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar1.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="row g-2 pt-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-paper-clip" />
                        <span className="ms-2">4 Attach</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-sand-clock" />
                        <span className="ms-2">1 Month</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-group-students " />
                        <span className="ms-2">4 Members</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-ui-text-chat" />
                        <span className="ms-2">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="dividers-block" />
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="small fw-bold mb-0">Progress</h4>
                    <span className="small light-danger-bg  p-1 rounded">
                      <i className="icofont-ui-clock" /> 15 Days Left
                    </span>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "39%" }}
                      aria-valuenow={39}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold ">Personal Informations</h6>
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#edit1"
                >
                  <i className="icofont-edit text-primary fs-6" />
                </button>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Nationality</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">Indian</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Religion</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">Hindu</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Marital Status</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">Married</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Passport No.</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">5468953210</span>
                    </div>
                  </li>
                  <li className="row flex-wrap">
                    <div className="col-6">
                      <span className="fw-bold">Emergency Contact</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">7468953210</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold ">Bank information</h6>
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#edit2"
                >
                  <i className="icofont-edit text-primary fs-6" />
                </button>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Bank Name</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">Kotak</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Account No.</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">5436874596325486</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">IFSC Code</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">Kotak000021</span>
                    </div>
                  </li>
                  <li className="row flex-wrap mb-3">
                    <div className="col-6">
                      <span className="fw-bold">Pan No</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">ACQPF6584L</span>
                    </div>
                  </li>
                  <li className="row flex-wrap">
                    <div className="col-6">
                      <span className="fw-bold">UPI Id</span>
                    </div>
                    <div className="col-6">
                      <span className="text-muted">454812kotak@upi</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-12 col-md-12">
        <div className="card mb-3">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold ">Current Task</h6>
          </div>
          <div className="card-body">
            <div className="planned_task client_task">
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <li className="dd-item mb-3">
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt sm"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt sm"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-1">
                            Inprogress
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm"></div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item">
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Website Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt sm"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-danger text-end mt-1">
                            Review
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm"></div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Practice to Perfect{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold ">Experience</h6>
          </div>
          <div className="card-body">
            <div className="timeline-item ti-danger border-bottom ms-2">
              <div className="d-flex">
                <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                  PW
                </span>
                <div className="flex-fill ms-3">
                  <div className="mb-1">
                    <strong>Pixel Wibes</strong>
                  </div>
                  <span className="d-flex text-muted">
                    Jan 2016 - Present (5 years 2 months)
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* timeline item end  */}
            <div className="timeline-item ti-info border-bottom ms-2">
              <div className="d-flex">
                <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                  CC
                </span>
                <div className="flex-fill ms-3">
                  <div className="mb-1">
                    <strong>Crest Coder</strong>
                  </div>
                  <span className="d-flex text-muted">
                    Dec 2015 - 2016 (1 years)
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* timeline item end  */}
            <div className="timeline-item ti-success  ms-2">
              <div className="d-flex">
                <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">
                  MW
                </span>
                <div className="flex-fill ms-3">
                  <div className="mb-1">
                    <strong>Morning Wibe</strong>
                  </div>
                  <span className="d-flex text-muted">
                    Nov 2014 - 2015 (1 years)
                  </span>
                </div>
              </div>
            </div>
            <div className="timeline-item ti-danger border-bottom ms-2">
              <div className="d-flex">
                <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                  FF
                </span>
                <div className="flex-fill ms-3">
                  <div className="mb-1">
                    <strong>FebiFlue</strong>
                  </div>
                  <span className="d-flex text-muted">
                    Jan 2010 - 2009 (1 years)
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* timeline item end  */}
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
  </div>
</div>

  );
}