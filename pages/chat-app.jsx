import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function ChatApp(){
    return (
        <div className="body d-flex">
  <div className="container-xxl p-0">
    <div className="row g-0">
      <div className="col-12 d-flex">
        {/* Card: */}
        <div className="card card-chat border-right border-top-0 border-bottom-0  w380">
          <div className="px-4 py-3 py-md-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Search..."
              />
            </div>
            <div
              className="nav nav-pills justify-content-between text-center"
              role="tablist"
            >
              <a
                className="flex-fill rounded border-0 nav-link active"
                data-bs-toggle="tab"
                href="#chat-recent"
                role="tab"
                aria-selected="true"
              >
                Chat
              </a>
              <a
                className="flex-fill rounded border-0 nav-link"
                data-bs-toggle="tab"
                href="#chat-groups"
                role="tab"
                aria-selected="false"
              >
                Members Groups
              </a>
              <a
                className="flex-fill rounded border-0 nav-link"
                data-bs-toggle="tab"
                href="#chat-contact"
                role="tab"
                aria-selected="false"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="tab-content border-top">
            <div
              className="tab-pane fade show active"
              id="chat-recent"
              role="tabpanel"
            >
              <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar6.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Vanessa Knox</span>{" "}
                        <small className="msg-time">10:45 AM</small>
                      </h6>
                      <span className="text-muted">
                        There are many variations of passages
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar1.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Abigail Bell</span>{" "}
                        <small className="msg-time">11:45 AM</small>
                      </h6>
                      <span className="text-muted">
                        changed an issue from "In Progress" to
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">RH</div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Diane Blake</span>{" "}
                        <small className="msg-time">12:45 AM</small>
                      </h6>
                      <span className="text-muted">
                        It is a long established fact that a reader will be
                        distracted
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Megan Dyer</span>{" "}
                        <small className="msg-time">12:46 AM</small>
                      </h6>
                      <span className="text-muted">
                        Contrary to popular belief
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar1.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Abigail Bell</span>{" "}
                        <small className="msg-time">12:47 PM</small>
                      </h6>
                      <span className="text-muted">
                        changed an issue from "In Progress" to
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar5.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Diane Blake</span>{" "}
                        <small className="msg-time">12:48 PM</small>
                      </h6>
                      <span className="text-muted">
                        making it over 2000 years old
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4 open">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar3.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Vanessa Knox</span>{" "}
                        <small className="msg-time">12:49 PM</small>
                      </h6>
                      <span className="text-muted">
                        There are many variations of passages
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar7.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Donna Grant</span>{" "}
                        <small className="msg-time">Thu</small>
                      </h6>
                      <span className="text-muted">Add Calander Event</span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">RH</div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Diane Blake</span>{" "}
                        <small className="msg-time">Wed</small>
                      </h6>
                      <span className="text-muted">
                        It is a long established fact that a reader will be
                        distracted
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar3.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Vanessa Knox</span>{" "}
                        <small className="msg-time">13/10/2020</small>
                      </h6>
                      <span className="text-muted">
                        There are many variations of passages
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Megan Dyer</span>{" "}
                        <small className="msg-time">13/10/2020</small>
                      </h6>
                      <span className="text-muted">
                        Contrary to popular belief
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar5.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Diane Blake</span>{" "}
                        <small className="msg-time">22/10/2020</small>
                      </h6>
                      <span className="text-muted">
                        making it over 2000 years old
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="chat-groups" role="tabpanel">
              <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">WD</div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Website Design</span>{" "}
                        <small className="msg-time">15/04/2021</small>
                      </h6>
                      <span className="text-muted">
                        The point of using Lorem Ipsum
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">AD</div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>App Development</span>{" "}
                        <small className="msg-time">13/04/2021</small>
                      </h6>
                      <span className="text-muted">
                        If you are going to use a passage
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <div className="avatar rounded-circle no-thumbnail">QC</div>
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="d-flex justify-content-between mb-0">
                        <span>Quality Assurance</span>{" "}
                        <small className="msg-time">12/04/2021</small>
                      </h6>
                      <span className="text-muted">
                        The point of using Lorem Ipsum
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="chat-contact" role="tabpanel">
              <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar10.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Hannah Gill</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart-o pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">hannahgill@my-Task.com</span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar2.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Abigail Bell</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">
                        abigailbell@my-Task.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar1.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Megan Dyer</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart-o pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">
                        barbara.kelly@my-Task.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar7.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Ruth Cornish</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">
                        ruthcornish@my-Task.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Yvonne Duncan</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart-o pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">
                        yvonneduncan@my-Task.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="list-group-item px-md-4 py-3 py-md-4">
                  <a href="javascript:void(0);" className="d-flex">
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar6.jpg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="d-flex justify-content-between mb-0">
                        <h6 className="mb-0">Nicola Carl</h6>
                        <div className="text-muted">
                          <i className="fa fa-heart-o pl-2 text-danger" />
                          <i className="fa fa-trash pl-2 text-danger" />
                        </div>
                      </div>
                      <span className="text-muted">nicolacarl@my-Task.com</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card: */}
        <div className="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">
          {/* Chat: Header */}
          <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
            <div className="d-flex align-items-center">
              <a href="index.html" title="Home">
                <i className="icofont-arrow-left fs-4" />
              </a>
              <a href="javascript:void(0);" title="">
                <img
                  className="avatar rounded"
                  src="assets/images/xs/avatar2.jpg"
                  alt="avatar"
                />
              </a>
              <div className="ms-3">
                <h6 className="mb-0">Grace Smith</h6>
                <small className="text-muted">Last seen: 3 hours ago</small>
              </div>
            </div>
            <div className="d-flex">
              <a
                className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                href="javascript:void(0);"
              >
                <i className="fa fa-camera" />
              </a>
              <a
                className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                href="javascript:void(0);"
              >
                <i className="fa fa-video-camera" />
              </a>
              <a
                className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                href="javascript:void(0);"
              >
                <i className="fa fa-gear" />
              </a>
              <a
                className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                href="javascript:void(0);"
              >
                <i className="fa fa-info-circle" />
              </a>
              <a
                className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle"
                href="#"
              >
                <i className="fa fa-bars" />
              </a>
              {/* Mobile menu */}
              <div className="nav-item list-inline-item d-block d-xl-none">
                <div className="dropdown">
                  <a
                    className="nav-link text-muted px-0"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </a>
                  <ul className="dropdown-menu shadow border-0">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        <i className="fa fa-camera" /> Share Images
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">
                        <i className="fa fa-video-camera" /> Video Call
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">
                        <i className="fa fa-gear" /> Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">
                        <i className="fa fa-info-circle" /> Info
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Chat: body */}
          <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">
            {/* Chat: left */}
            <li className="mb-3 d-flex flex-row align-items-end">
              <div className="max-width-70">
                <div className="user-info mb-1">
                  <img
                    className="avatar sm rounded-circle me-1"
                    src="assets/images/xs/avatar2.jpg"
                    alt="avatar"
                  />
                  <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                  <div className="message"> Hi Aiden, how are you?</div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: right */}
            <li className="mb-3 d-flex flex-row-reverse align-items-end">
              <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                  <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                  <div className="message">How many task are working?</div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: left */}
            <li className="mb-3 d-flex flex-row align-items-end">
              <div className="max-width-70">
                <div className="user-info mb-1">
                  <img
                    className="avatar sm rounded-circle me-1"
                    src="assets/images/xs/avatar2.jpg"
                    alt="avatar"
                  />
                  <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                  <div className="message">
                    {" "}
                    I am working on 10 tasks.5 tasks Completed and 5 inprogress
                  </div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: left */}
            <li className="mb-3 d-flex flex-row align-items-end">
              <div className="max-width-70">
                <div className="user-info mb-1">
                  <img
                    className="avatar sm rounded-circle me-1"
                    src="assets/images/xs/avatar2.jpg"
                    alt="avatar"
                  />
                  <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                  <div className="message">
                    {" "}
                    Why Map job is launched when I run SELECT * FROM tablename;
                  </div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: right */}
            <li className="mb-3 d-flex flex-row-reverse align-items-end">
              <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                  <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                  <div className="message">
                    This behaviour is directed by <br /> some of the hive
                    performance tuning settings of the hive.fetch.* family.
                    <br />
                    They decide on whether a shortcut to just go at the
                    (table)file in HDFS without any MR/Tez is wanted and/or
                    feasible.
                  </div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: left */}
            <li className="mb-3 d-flex flex-row align-items-end">
              <div className="max-width-70">
                <div className="user-info mb-1">
                  <img
                    className="avatar sm rounded-circle me-1"
                    src="assets/images/xs/avatar2.jpg"
                    alt="avatar"
                  />
                  <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                  <div className="message">
                    <p>Please find attached images</p>
                    <img
                      className="w120 img-thumbnail"
                      src="assets/images/gallery/1.jpg"
                      alt=""
                    />
                    <img
                      className="w120 img-thumbnail"
                      src="assets/images/gallery/2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Chat: right */}
            <li className="mb-3 d-flex flex-row-reverse align-items-end">
              <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                  <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                  <div className="message">
                    Okay, will check and let you know.
                  </div>
                </div>
              </div>
              {/* More option */}
              <div className="btn-group">
                <a
                  href="#"
                  className="nav-link py-2 px-3 text-muted"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* Chat: Footer */}
          <div className="chat-message">
            <textarea
              className="form-control"
              placeholder="Enter text here..."
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>{" "}
    {/* row end */}
  </div>
</div>

    )
}