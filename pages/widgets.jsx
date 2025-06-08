import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Widgets() {
  return (
    <div className="body d-flex py-3">
  <div className="container-xxl">
    <div className="row g-3 mb-3 mt-3">
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#editproject"
                >
                  <i className="icofont-edit text-success" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteproject"
                >
                  <i className="icofont-ui-delete text-danger" />
                </button>
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
                <span
                  className="avatar rounded-circle text-center pointer sm"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  <i className="icofont-ui-add" />
                </span>
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
      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar3.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6 mt-2">CEO</h6>
                <div
                  className="btn-group mt-2"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#editproject"
                  >
                    <i className="icofont-edit text-success" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteproject"
                  >
                    <i className="icofont-ui-delete text-danger" />
                  </button>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">AgilSoft Tech</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Ryan Ogden
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices.Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices.Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices.faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices.Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultricesfaucibus orci luctus et ultrices.Vestibulum
                  ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center ct-btn-set">
                <a href="chat.html" className="btn btn-dark btn-sm mt-1 me-1">
                  <i className="icofont-ui-text-chat me-2 fs-6" />
                  Chat
                </a>
                <a href="profile.html" className="btn btn-dark btn-sm mt-1">
                  <i className="icofont-invisible me-2 fs-6" />
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 mb-3 row-deck">
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Employees Availability</h6>
          </div>
          <div className="card-body">
            <div className="row g-4 row-deck">
              <div className="col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body ">
                    <i className="icofont-checked fs-3" />
                    <h6 className="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                    <span className="text-muted">400</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body ">
                    <i className="icofont-stopwatch fs-3" />
                    <h6 className="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                    <span className="text-muted">17</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body ">
                    <i className="icofont-ban fs-3" />
                    <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                    <span className="text-muted">06</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body ">
                    <i className="icofont-beach-bed fs-3" />
                    <h6 className="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                    <span className="text-muted">14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
          </div>
          <div className="card-body">
            <div className="flex-grow-1">
              <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                <div className="d-flex align-items-center flex-fill">
                  <img
                    className="avatar lg rounded-circle img-thumbnail"
                    src="assets/images/lg/avatar2.jpg"
                    alt="profile"
                  />
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Natalie Gibson</h6>
                    <span className="text-muted">Ui/UX Designer</span>
                  </div>
                </div>
                <div className="time-block text-truncate">
                  <i className="icofont-clock-time" /> 1.30 - 1:30
                </div>
              </div>
              <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                <div className="d-flex align-items-center flex-fill">
                  <img
                    className="avatar lg rounded-circle img-thumbnail"
                    src="assets/images/lg/avatar9.jpg"
                    alt="profile"
                  />
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Peter Piperg</h6>
                    <span className="text-muted">Web Design</span>
                  </div>
                </div>
                <div className="time-block text-truncate">
                  <i className="icofont-clock-time" /> 9.00 - 1:30
                </div>
              </div>
              <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                <div className="d-flex align-items-center flex-fill">
                  <img
                    className="avatar lg rounded-circle img-thumbnail"
                    src="assets/images/lg/avatar12.jpg"
                    alt="profile"
                  />
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Robert Young</h6>
                    <span className="text-muted">PHP Developer</span>
                  </div>
                </div>
                <div className="time-block text-truncate">
                  <i className="icofont-clock-time" /> 1.30 - 2:30
                </div>
              </div>
              <div className="py-2 d-flex align-items-center flex-wrap">
                <div className="d-flex align-items-center flex-fill">
                  <img
                    className="avatar lg rounded-circle img-thumbnail"
                    src="assets/images/lg/avatar8.jpg"
                    alt="profile"
                  />
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Victoria Vbell</h6>
                    <span className="text-muted">IOS Developer</span>
                  </div>
                </div>
                <div className="time-block text-truncate">
                  <i className="icofont-clock-time" /> 2.00 - 3:30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h6 className="fw-bold mb-3 text-danger">Bug Image Atteched</h6>
            <div className="flex-grow-1">
              <div className="py-2 d-flex align-items-center border-bottom">
                <div className="d-flex ms-3 align-items-center flex-fill">
                  <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                    <i className="icofont-bug fs-5" />
                  </span>
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Image3.jpg</h6>
                  </div>
                </div>
                <button type="button" className="btn light-danger-bg text-end">
                  Download
                </button>
              </div>
              <div className="py-2 d-flex align-items-center border-bottom">
                <div className="d-flex ms-3 align-items-center flex-fill">
                  <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                    <i className="icofont-bug fs-5" />
                  </span>
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Image4.jpg</h6>
                  </div>
                </div>
                <button type="button" className="btn light-danger-bg text-end">
                  Download
                </button>
              </div>
              <div className="py-2 d-flex align-items-center border-bottom">
                <div className="d-flex ms-3 align-items-center flex-fill">
                  <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                    <i className="icofont-bug fs-5" />
                  </span>
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Image6.jpg</h6>
                  </div>
                </div>
                <button type="button" className="btn light-danger-bg text-end">
                  Download
                </button>
              </div>
              <div className="py-2 d-flex align-items-center">
                <div className="d-flex ms-3 align-items-center flex-fill">
                  <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                    <i className="icofont-bug fs-5" />
                  </span>
                  <div className="d-flex flex-column ps-3">
                    <h6 className="fw-bold mb-0 small-14">Image1.jpg</h6>
                  </div>
                </div>
                <button type="button" className="btn light-danger-bg text-end">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 mb-3">
      <div className="col-md-12">
        <div className="card light-danger-bg">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Top Perfrormers</h6>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                <p>
                  You have 140 <span className="fw-bold">influencers </span> in
                  your company.
                </p>
                <div className="d-flex  justify-content-between text-center">
                  <div className="">
                    <h3 className="fw-bold">350</h3>
                    <span className="small">New Task</span>
                  </div>
                  <div className="">
                    <h3 className="fw-bold">130</h3>
                    <span className="small">Task Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar2.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">Luke Short</h6>
                        <span className="text-muted mb-2">@Short</span>
                        <h4 className="fw-bold text-primary fs-3">80%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar5.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">John Hard</h6>
                        <span className="text-muted mb-2">@rdacre</span>
                        <h4 className="fw-bold text-primary fs-3">70%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar8.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">Paul Rees</h6>
                        <span className="text-muted mb-2">@Rees</span>
                        <h4 className="fw-bold text-primary fs-3">77%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar9.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">Rachel Parr</h6>
                        <span className="text-muted mb-2">@Parr</span>
                        <h4 className="fw-bold text-primary fs-3">85%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar12.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">Eric Reid</h6>
                        <span className="text-muted mb-2">@Eric</span>
                        <h4 className="fw-bold text-primary fs-3">95%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <img
                          className="avatar lg rounded-circle img-thumbnail mx-auto"
                          src="assets/images/lg/avatar3.jpg"
                          alt="profile"
                        />
                        <h6 className="fw-bold my-2 small-14">Jan Ince</h6>
                        <span className="text-muted mb-2">@Ince</span>
                        <h4 className="fw-bold text-primary fs-3">97%</h4>
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
    {/* Row End */}
    <div className="row g-3 mb-3">
      <div className="col-md-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                <i className="icofont-optic fs-4" />
              </div>
              <div className="flex-fill ms-4 text-truncate">
                <div className="text-truncate">Status</div>
                <span className="badge bg-warning">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult">
                <i className="icofont-user fs-4" />
              </div>
              <div className="flex-fill ms-4 text-truncate">
                <div className="text-truncate">Created Name</div>
                <span className="fw-bold">Sally Graham</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult">
                <i className="icofont-price fs-4" />
              </div>
              <div className="flex-fill ms-4 text-truncate">
                <div className="text-truncate">Priority</div>
                <span className="badge bg-danger">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 mb-3 row-deck">
      <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                <i className="bi bi-journal-check fs-4" />
              </div>
              <div className="flex-fill ms-4">
                <div className="">Total Task</div>
                <h5 className="mb-0 ">122</h5>
              </div>
              <a
                href="task.html"
                title="view-members"
                className="btn btn-link text-decoration-none  rounded-1"
              >
                <i className="icofont-hand-drawn-right fs-2 " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult">
                <i className="bi bi-list-check fs-4" />
              </div>
              <div className="flex-fill ms-4">
                <div className="">Completed Task</div>
                <h5 className="mb-0 ">376</h5>
              </div>
              <a
                href="task.html"
                title="space-used"
                className="btn btn-link text-decoration-none  rounded-1"
              >
                <i className="icofont-hand-drawn-right fs-2 " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card ">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult">
                <i className="bi bi-clipboard-data fs-4" />
              </div>
              <div className="flex-fill ms-4">
                <div className="">Progress Task</div>
                <h5 className="mb-0 ">74</h5>
              </div>
              <a
                href="task.html"
                title="renewal-date"
                className="btn btn-link text-decoration-none  rounded-1"
              >
                <i className="icofont-hand-drawn-right fs-2 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4">
      <div className="col">
        <div className="card bg-primary">
          <div className="card-body text-white d-flex align-items-center">
            <i className="icofont-data fs-3" />
            <div className="d-flex flex-column ms-3">
              <h6 className="mb-0">Total Projects</h6>
              <span className="text-white">550</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-primary">
          <div className="card-body text-white d-flex align-items-center">
            <i className="icofont-chart-flow fs-3" />
            <div className="d-flex flex-column ms-3">
              <h6 className="mb-0">Coming Projects</h6>
              <span className="text-white">210</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-primary">
          <div className="card-body text-white d-flex align-items-center">
            <i className="icofont-chart-flow-2 fs-3" />
            <div className="d-flex flex-column ms-3">
              <h6 className="mb-0">Progress Projects</h6>
              <span className="text-white">8456 Files</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-primary">
          <div className="card-body text-white d-flex align-items-center">
            <i className="icofont-tasks fs-3" />
            <div className="d-flex flex-column ms-3">
              <h6 className="mb-0">Finished Projects</h6>
              <span className="text-white">88 Files</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 mb-3 row-deck">
      <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-7">
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2 ">
                <div className="text-center p-4">
                  <img
                    src="assets/images/task-view.svg"
                    alt="..."
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 px-4">
                <h3 className="fw-bold ">Dylan Hunter</h3>
                <p className="line-height-custom">
                  Welcome back Dylan Hunter.Integer molestie, arcu non porta
                  sollicitudin, arcu felis aliquam urna, placerat maximus lorem
                  urna commodo sem. Pellentesque venenatis leo quam, sed mattis
                  sapien lobortis ut.placerat maximus lorem urna commodo sem
                </p>
                <a
                  className="btn bg-secondary text-light btn-lg lift"
                  href="http://pixelwibes.com/"
                  target="_blank"
                >
                  Free Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-4 col-xl-5 col-xxl-5">
        <div className="alert alert-primary p-3 mb-0 w-100">
          <h6 className="fw-bold mb-1">Create Project Credentials</h6>
          <p className="small mb-4">
            Create a Project credentials now and never miss
          </p>
          <div className="my-3 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Username"
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Password"
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
            />
          </div>
          <button className="btn btn-primary mt-2">Create Credentials</button>
        </div>
      </div>
    </div>
    {/* Row End */}
  </div>
</div>

  );
}