import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Members() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="card border-0 mb-4 no-bg">
          <div className="card-header py-3 px-0 d-sm-flex align-items-center  justify-content-between border-bottom">
            <h3 className=" fw-bold flex-fill mb-0 mt-sm-0">Employee</h3>
            <button
              type="button"
              className="btn btn-dark me-1 mt-1 w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#createemp"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Add Employee
            </button>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle mt-1  w-sm-100"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </button>
              <ul
                className="dropdown-menu  dropdown-menu-end"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Task Assign Members
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Not Assign Members
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar3.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">04</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">4.5</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">04</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Luke Short</h6>
              <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                UI/UX Designer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar4.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">00</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">00</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">00</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                Lillian Powell
              </h6>
              <span className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Quality Assurance
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                First Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar9.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">10</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">04</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">15</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                Rachel Parsons
              </h6>
              <span className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Website Designer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar11.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">12</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">03</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">25</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">John Hardacre</h6>
              <span className="light-orange-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Developer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar12.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">12</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">4.5</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">25</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Jan Ince</h6>
              <span className="bg-lightblue py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                QA/QC Engineer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar8.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">08</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">03</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">12</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Steven Butler</h6>
              <span className="bg-lightyellow py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Mobile developer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar7.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">04</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">4.5</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">04</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Robert Hammer</h6>
              <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                UI/UX Designer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar1.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">00</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">00</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">00</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Paul Slater</h6>
              <span className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Quality Assurance
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                First Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar5.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">10</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">4.5</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">15</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                Rachel Parsons
              </h6>
              <span className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Website Designer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar6.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                <div className="followers me-2">
                  <i className="icofont-tasks color-careys-pink fs-4" />
                  <span className="">10</span>
                </div>
                <div className="star me-2">
                  <i className="icofont-star text-warning fs-4" />
                  <span className="">04</span>
                </div>
                <div className="own-video">
                  <i className="icofont-data color-light-orange fs-4" />
                  <span className="">15</span>
                </div>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                Rachel Parsons
              </h6>
              <span className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                Website Designer
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <a href="task.html" className="btn btn-dark btn-sm mt-1">
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Task
              </a>
              <a
                href="employee-profile.html"
                className="btn btn-dark btn-sm mt-1"
              >
                <i className="icofont-invisible me-2 fs-6" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}