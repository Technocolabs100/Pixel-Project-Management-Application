import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Task() {
  return (
<div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Task Management</h3>
          <div className="col-auto d-flex w-sm-100">
            <button
              type="button"
              className="btn btn-dark btn-set-task w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#createtask"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix  g-3">
      <div className="col-lg-12 col-md-12 flex-column">
        <div className="row g-3 row-deck">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Task Progress</h6>
              </div>
              <div className="card-body mem-list">
                <div className="progress-count mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      UI/UX Design
                    </h6>
                    <span className="small text-muted">02/07</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-info-bg"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow={92}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Website Design
                    </h6>
                    <span className="small text-muted">01/03</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar bg-lightgreen"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Quality Assurance
                    </h6>
                    <span className="small text-muted">02/07</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-success-bg"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Development
                    </h6>
                    <span className="small text-muted">01/05</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-orange-bg"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Testing
                    </h6>
                    <span className="small text-muted">01/08</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar bg-lightyellow"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Recent Activity</h6>
              </div>
              <div className="card-body mem-list">
                <div className="timeline-item ti-danger border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                      RH
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Rechard Add New Task</strong>
                      </div>
                      <span className="d-flex text-muted">20Min ago</span>
                    </div>
                  </div>
                </div>{" "}
                {/* timeline item end  */}
                <div className="timeline-item ti-info border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                      SP
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Shipa Review Completed</strong>
                      </div>
                      <span className="d-flex text-muted">40Min ago</span>
                    </div>
                  </div>
                </div>{" "}
                {/* timeline item end  */}
                <div className="timeline-item ti-info border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                      MR
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Mora Task To Completed</strong>
                      </div>
                      <span className="d-flex text-muted">1Hr ago</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item ti-success  ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">
                      FL
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Fila Add New Task</strong>
                      </div>
                      <span className="d-flex text-muted">1Day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .card: My Timeline */}
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Allocated Task Members</h6>
              </div>
              <div className="card-body">
                <div className="flex-grow-1 mem-list">
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar6.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Lucinda Massey</h6>
                        <span className="small text-muted">Ui/UX Designer</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar4.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Ryan Nolan</h6>
                        <span className="small text-muted">
                          Website Designer
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar9.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Oliver Black</h6>
                        <span className="small text-muted">App Developer</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar10.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Adam Walker</h6>
                        <span className="small text-muted">
                          Quality Checker
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar4.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Brian Skinner</h6>
                        <span className="small text-muted">
                          Quality Checker
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar11.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Dan Short</h6>
                        <span className="small text-muted">App Developer</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="py-2 d-flex align-items-center border-bottom">
                    <div className="d-flex ms-2 align-items-center flex-fill">
                      <img
                        src="assets/images/xs/avatar3.jpg"
                        className="avatar lg rounded-circle img-thumbnail"
                        alt="avatar"
                      />
                      <div className="d-flex flex-column ps-2">
                        <h6 className="fw-bold mb-0">Jack Glover</h6>
                        <span className="small text-muted">Ui/UX Designer</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn light-danger-bg text-end"
                      data-bs-toggle="modal"
                      data-bs-target="#dremovetask"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .card: My Timeline */}
          </div>
        </div>
        <div className="row taskboard g-3 py-xxl-4">
          {/* <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                          <h6 class="fw-bold py-3 mb-0">Task Ready</h6>
                          <div class="planned_task">
                              <div class="dd" data-plugin="nestable">
                                  <ol class="dd-list">
                                      <li class="dd-item" data-id="1">
                                          <div class="dd-handle">
                                              <div class="task-info d-flex align-items-center justify-content-between">
                                                  <h6 class="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">UI/UX Design</h6>
                                                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                      <div class="avatar-list avatar-list-stacked m-0">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar2.jpg" alt="">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar1.jpg" alt="">
                                                      </div>
                                                      <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                  </div>
                                              </div>
                                              <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                  nec scelerisque massa.</p>
                                              <div class="tikit-info row g-3 align-items-center">
                                                  <div class="col-sm">
                                                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-flag"></i>
                                                                  <span class="ms-1">25 Nov</span>
                                                              </div>
                                                          </li>
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  
                                                                      <i class="icofont-ui-text-chat"></i>
                                                                      <span class="ms-1">4</span>
                                                                  
                                                              </div>
                                                          </li>
                                                          <li>
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-paper-clip"></i>
                                                                  <span class="ms-1">5</span>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div class="col-sm text-end">
                                                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Social Geek Made </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </li>
                                      <li class="dd-item" data-id="2">
                                          <div class="dd-handle">
                                              <div class="task-info d-flex align-items-center justify-content-between">
                                                  <h6 class="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Website Design
                                                  </h6>
                                                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                      <div class="avatar-list avatar-list-stacked m-0">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar7.jpg" alt="">
                                                      </div>
                                                      <span class="badge bg-success text-end mt-2">LOW</span>
                                                  </div>
                                              </div>
                                              <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                  nec scelerisque massa.</p>
                                              <div class="tikit-info row g-3 align-items-center">
                                                  <div class="col-sm">
                                                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-flag"></i>
                                                                  <span class="ms-1">12 Feb</span>
                                                              </div>
                                                          </li>
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  
                                                                      <i class="icofont-ui-text-chat"></i>
                                                                      <span class="ms-1">3</span>
                                                                  
                                                              </div>
                                                          </li>
                                                          <li>
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-paper-clip"></i>
                                                                  <span class="ms-1">4</span>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div class="col-sm text-end">
                                                      
                                                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Practice to Perfect </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </li>
                                      <li class="dd-item" data-id="3">
                                          <div class="dd-handle">
                                              <div class="task-info d-flex align-items-center justify-content-between">
                                                  <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Quality Assurance
                                                  </h6>
                                                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                      <div class="avatar-list avatar-list-stacked m-0">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar2.jpg" alt="">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar1.jpg" alt="">
                                                      </div>
                                                      <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                  </div>
                                              </div>
                                              <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                  nec scelerisque massa.</p>
                                              <div class="tikit-info row g-3 align-items-center">
                                                  <div class="col-sm">
                                                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-flag"></i>
                                                                  <span class="ms-1">17 Mar</span>
                                                              </div>
                                                          </li>
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  
                                                                      <i class="icofont-ui-text-chat"></i>
                                                                      <span class="ms-1">15</span>
                                                                  
                                                              </div>
                                                          </li>
                                                          <li>
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-paper-clip"></i>
                                                                  <span class="ms-1">1</span>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div class="col-sm text-end">
                                                      
                                                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Box of Crayons </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </li>
                                      <li class="dd-item" data-id="4">
                                          <div class="dd-handle">
                                              <div class="task-info d-flex align-items-center justify-content-between">
                                                  <h6 class="light-orange-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Development
                                                  </h6>
                                                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                      <div class="avatar-list avatar-list-stacked m-0">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar6.jpg" alt="">
                                                          <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar5.jpg" alt="">
                                                      </div>
                                                      <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                  </div>
                                              </div>
                                              <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                  nec scelerisque massa.</p>
                                              <div class="tikit-info row g-3 align-items-center">
                                                  <div class="col-sm">
                                                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-flag"></i>
                                                                  <span class="ms-1">28 Nov</span>
                                                              </div>
                                                          </li>
                                                          <li class="me-2">
                                                              <div class="d-flex align-items-center">
                                                                  
                                                                      <i class="icofont-ui-text-chat"></i>
                                                                      <span class="ms-1">45</span>
                                                                  
                                                              </div>
                                                          </li>
                                                          <li>
                                                              <div class="d-flex align-items-center">
                                                                  <i class="icofont-paper-clip"></i>
                                                                  <span class="ms-1">1</span>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div class="col-sm text-end">
                                                      
                                                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Gob Geeklords </div>
                                                  </div>
                                              </div>
                                          </div>
  
                                      </li>
                                  </ol>
                              </div>
                          </div>
                      </div> */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
            <h6 className="fw-bold py-3 mb-0">In Progress</h6>
            <div className="progress_task">
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <li className="dd-item" data-id={1}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">28 Mar</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={2}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Website Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar8.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-success text-end mt-2">
                            LOW
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">12 Feb</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">3</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Practice to Perfect{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={3}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">03 Apr</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">7</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">2</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={4}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar5.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">25 Nov</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={5}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar4.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-danger text-end mt-2">
                            High
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">27 Mar</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">8</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">6</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
            <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
            <div className="review_task">
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <li className="dd-item" data-id={1}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">03 Apr</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">7</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">2</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={2}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar5.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">25 Nov</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={3}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar6.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-danger text-end mt-2">
                            High
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">27 Mar</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">8</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">6</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={4}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar8.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">28 Mar</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
            <h6 className="fw-bold py-3 mb-0">Completed</h6>
            <div className="completed_task">
              <div className="dd" data-plugin="nestable">
                <ol className="dd-list">
                  <li className="dd-item" data-id={1}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar6.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">13 Jan</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">1</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={2}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          UI/UX Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar8.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">02 Feb</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">1</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">5</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Social Geek Made{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={3}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Website Design
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-success text-end mt-2">
                            LOW
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">12 Feb</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">3</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Practice to Perfect{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={4}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar11.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-danger text-end mt-2">
                            High
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">01 Jan</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">2</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">4</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item" data-id={5}>
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                          <div className="avatar-list avatar-list-stacked m-0">
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                            <img
                              className="avatar rounded-circle small-avt"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                          </div>
                          <span className="badge bg-warning text-end mt-2">
                            MEDIUM
                          </span>
                        </div>
                      </div>
                      <p className="py-2 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In id nec scelerisque massa.
                      </p>
                      <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">
                          <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flag" />
                                <span className="ms-1">17 Jan</span>
                              </div>
                            </li>
                            <li className="me-2">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-1">6</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-1">6</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm text-end">
                          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                            {" "}
                            Box of Crayons{" "}
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
      </div>
    </div>
  </div>
</div>
  );
}

