import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Projects() {
  return (
<div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold py-3 mb-0">Projects</h3>
          <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
            <button
              type="button"
              className="btn btn-dark w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#createproject"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Create Project
            </button>
            <ul
              className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#All-list"
                  role="tab"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Started-list"
                  role="tab"
                >
                  Started
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Approval-list"
                  role="tab"
                >
                  Approval
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Completed-list"
                  role="tab"
                >
                  Completed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row align-items-center">
      <div className="col-lg-12 col-md-12 flex-column">
        <div className="tab-content mt-4">
          <div className="tab-pane fade show active" id="All-list">
            <div className="row g-3 gy-5 py-3 row-deck">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          UI/UX Design
                        </h6>
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightyellow">
                          <i className="icofont-ui-touch-phone" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Rhinestone{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          App Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 25 Days Left
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
                        style={{ width: "28%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Box of Crayons{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                          <span className="ms-2">1 Attach</span>
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
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">15</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 2 Days Left
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
                        style={{ width: "40%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Gob Geeklords{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">10 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 20 Days Left
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
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-careys-pink">
                          <i className="icofont-site-map" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Java Dalia{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Backend Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">8 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">8Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 10 Days Left
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
                        style={{ width: "23%" }}
                        aria-valuenow={23}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightblue">
                          <i className="icofont-tasks" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Fast Cad
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Software Testing
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 25 Days Left
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
                        style={{ width: "28%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Hex Clan{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Switch and Swift{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                          <span className="ms-2">1 Attach</span>
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
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightyellow">
                          <i className="icofont-ui-touch-phone" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Rhinestone{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          App Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 25 Days Left
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
                        style={{ width: "28%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Box of Crayons{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                          <span className="ms-2">1 Attach</span>
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
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">15</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 2 Days Left
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
                        style={{ width: "40%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Gob Geeklords{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">10 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 20 Days Left
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
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Started-list">
            <div className="row g-3 gy-5 py-3 row-deck">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          UI/UX Design
                        </h6>
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightyellow">
                          <i className="icofont-ui-touch-phone" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Rhinestone{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          App Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 25 Days Left
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
                        style={{ width: "28%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Box of Crayons{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                          <span className="ms-2">1 Attach</span>
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
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">15</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 2 Days Left
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
                        style={{ width: "40%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Gob Geeklords{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                          src="assets/images/xs/avatar9.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">10 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 20 Days Left
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
                        style={{ width: "20%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-careys-pink">
                          <i className="icofont-site-map" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Java Dalia{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Backend Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">8 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">8Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 10 Days Left
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
                        style={{ width: "23%" }}
                        aria-valuenow={23}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightblue">
                          <i className="icofont-tasks" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Fast Cad
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Software Testing
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-danger-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> 25 Days Left
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
                        style={{ width: "28%" }}
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
          <div className="tab-pane fade" id="Approval-list">
            <div className="row g-3 gy-5 py-3 row-deck">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-info-bg">
                          <i className="icofont-paint" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Software Chasers{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          UI/UX Design
                        </h6>
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
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Navy Hurdle{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Barcelona{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar9.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">10 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">10 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-careys-pink">
                          <i className="icofont-site-map" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          phoenix{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Backend Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">8 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">8Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightblue">
                          <i className="icofont-tasks" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Roadrunner
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Software Testing
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">2 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Bladerunner
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                          <span className="ms-2">1 Attach</span>
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
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Navy Hurdle{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Barcelona{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar9.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
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
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2">10 Month</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">10 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-warning-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Approval
                      </span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div
                        className="progress-bar bg-secondary ms-1"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="Completed-list">
            <div className="row g-3 gy-5 py-3 row-deck">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-info-bg">
                          <i className="icofont-paint" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Sunburst{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          UI/UX Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          X mind{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightyellow">
                          <i className="icofont-ui-touch-phone" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Edison{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          App Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Fireball{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                      </div>
                    </div>
                    <div className="row g-2 pt-4">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-paper-clip" />
                          <span className="ms-2">1 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">15</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Firestorm{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar9.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row g-2 pt-4">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-paper-clip" />
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-careys-pink">
                          <i className="icofont-site-map" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Irongate{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Backend Development
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar10.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row g-2 pt-4">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-paper-clip" />
                          <span className="ms-2">8 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightblue">
                          <i className="icofont-tasks" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Kryptonite
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Software Testing
                        </h6>
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
                          src="assets/images/xs/avatar7.jpg"
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
                          <span className="ms-2">7 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">6 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">5</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Moonshine{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-success-bg">
                          <i className="icofont-tick-boxed" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Oyster{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Quality Assurance
                        </h6>
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
                      </div>
                    </div>
                    <div className="row g-2 pt-4">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-paper-clip" />
                          <span className="ms-2">1 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">2 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block bg-lightgreen">
                          <i className="icofont-vector-path" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          X mind{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Website Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-orange-bg">
                          <i className="icofont-dashboard-web" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Firestorm{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          Development
                        </h6>
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
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar9.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar11.jpg"
                          alt=""
                        />
                        <img
                          className="avatar rounded-circle sm"
                          src="assets/images/xs/avatar6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row g-2 pt-4">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-paper-clip" />
                          <span className="ms-2">10 Attach</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-sand-clock" />
                          <span className="ms-2 text-success">Completed</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">8 Members</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-ui-text-chat" />
                          <span className="ms-2">45</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Progress</h4>
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
                        aria-valuenow={39}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                      <div className="lesson_name">
                        <div className="project-block light-info-bg">
                          <i className="icofont-paint" />
                        </div>
                        <span className="small text-muted project_name fw-bold">
                          {" "}
                          Sunburst{" "}
                        </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">
                          UI/UX Design
                        </h6>
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
                          <span className="ms-2 text-success">Completed</span>
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
                      <span className="small light-success-bg  p-1 rounded">
                        <i className="icofont-ui-clock" /> Completed
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
                        style={{ width: "50%" }}
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
        </div>
      </div>
    </div>
  </div>
</div>
);
}
