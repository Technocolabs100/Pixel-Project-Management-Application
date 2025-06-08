import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Clients() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="card border-0 mb-4 no-bg">
          <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
            <h3 className=" fw-bold flex-fill mb-0">Clients</h3>
            <div className="col-auto d-flex">
              <div className="dropdown ">
                <button
                  className="btn btn-primary dropdown-toggle  "
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
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AgilSoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Macrosoft
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Google
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pixelwibes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Deltasoft Tech
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Design Tech
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-dark ms-1 "
                data-bs-toggle="modal"
                data-bs-target="#createproject"
              >
                <i className="icofont-plus-circle me-2 fs-6" />
                Add Client
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
      <div className="col">
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar2.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6 mt-2">Manager</h6>
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Macrosoft</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Matt Gibson
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar8.jpg"
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Google</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Lauren Reid
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center ct-btn-set">
                <a href="chat.html" className="btn btn-dark btn-sm mt-1 me-1">
                  <i className="icofont-ui-text-chat me-2 fs-6" />
                  Chat
                </a>
                <a href="profile.html" className="btn btn-dark btn-sm mt-2">
                  <i className="icofont-invisible me-2 fs-6" />
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar10.jpg"
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Pixelwibes</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Peter Vance
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar11.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6 mt-2">Manager</h6>
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                Deltasoft Tech
              </h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Una Murray
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar12.jpg"
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Design Tech</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Paul Grant
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices,Vestibulum ante ipsum primis in faucibus orci luctus
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar5.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6 mt-2">Manager</h6>
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">VerinSoft</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Amanda Russell
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar6.jpg"
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Crestcoder</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Diane Vaughan
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar7.jpg"
                alt=""
                className="avatar xl rounded-circle img-thumbnail shadow-sm"
              />
              <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6 mt-2">Manager</h6>
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Rocobend</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Piers Churchill
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices
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
      <div className="col">
        <div className="card teacher-card">
          <div className="card-body  d-flex">
            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <img
                src="assets/images/lg/avatar1.jpg"
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
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Google</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Lauren Reid
              </span>
              <div className="video-setting-icon mt-3 pt-3 border-top">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices.Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center ct-btn-set">
                <a href="chat.html" className="btn btn-dark btn-sm mt-1 me-1">
                  <i className="icofont-ui-text-chat me-2 fs-6" />
                  Chat
                </a>
                <a href="profile.html" className="btn btn-dark btn-sm mt-2">
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
</div>

  );
}