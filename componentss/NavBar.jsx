import React, { useState } from "react";
import '../assets/css/my-task.style.min.css'
import avatar1 from "../assets/images/xs/avatar1.jpg";
import avatar2 from "../assets/images/xs/avatar2.jpg";
import avatar3 from "../assets/images/xs/avatar3.jpg";
import avatar4 from "../assets/images/xs/avatar4.jpg";
import avatar7 from "../assets/images/xs/avatar7.jpg";
import avatar8 from "../assets/images/xs/avatar8.jpg";
import logo from "../assets/images/profile_av.png"
import { Link } from "react-router-dom";


export default function NavBar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Toggle functions
  const toggleNotifications = (e) => {
    e.preventDefault();
    setShowNotifications(!showNotifications);
  };

  const toggleUserDropdown = (e) => {
    e.preventDefault();
    setShowUserDropdown(!showUserDropdown);
  };


  return (
    <nav className="navbar py-4 bg-light">
      <div className="navbar-search">
        <input className="form-control" type="text" placeholder="Search" />
      </div>
      <div className="container-xxl">
        {/* Rightbar icons */}
        <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
          <div className="d-flex align-items-center">
            <Link
              className="nav-link text-primary collapsed"
              to='/help'
              title="Get Help"
            >
              <i className="icofont-info-square fs-5"></i>
            </Link>

            <div className="avatar-list avatar-list-stacked px-3 d-flex align-items-center">
              <img
                className="avatar rounded-circle"
                src={avatar2}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar1}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar3}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar4}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar7}
                alt="avatar"
              />
              <img
                className="avatar rounded-circle"
                src={avatar8}
                alt="avatar"
              />
              <span
                className="avatar rounded-circle text-center pointer"
                data-bs-toggle="modal"
                data-bs-target="#addUser"
              >
                <i className="icofont-ui-add"></i>
              </span>
            </div>
          </div>

          {/* Notifications Dropdown */}
          <div className="dropdown notifications zindex-popover ms-3 position-relative">
            <a
              className="nav-link dropdown-toggle pulse"
              href="#"
              role="button"
              onClick={toggleNotifications}
            >
              <i className="icofont-alarm fs-5"></i>
              <span className="pulse-ring"></span>
            </a>

            {showNotifications && (
              <div
                id="NotificationsDiv"
                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0 show"
                style={{ minWidth: "380px" }}
              >
                <div className="card border-0 w-100">
                  <div className="card-header border-0 p-3">
                    <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                      <span>Notifications</span>
                      <span className="badge text-white bg-primary">11</span>
                    </h5>
                  </div>
                  <div className="tab-content card-body">
                    <div className="tab-pane fade show active">
                      <ul className="list-unstyled list mb-0">
                        {/* Example notification items */}
                        <li className="py-2 mb-1 border-bottom">
                          <a href="#!" className="d-flex text-decoration-none">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar1.jpg"
                              alt="avatar"
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0">
                                <span className="fw-bold">Dylan Hunter</span>{" "}
                                <small>2MIN</small>
                              </p>
                              <span>
                                Added 2021-02-19 my-Task ui/ux Design{" "}
                                <span className="badge bg-success">Review</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        {/* Add other notifications similarly */}
                      </ul>
                    </div>
                  </div>
                  <a className="card-footer text-center border-top-0" href="#!">
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover ms-3 position-relative">
            <div className="u-info me-2 text-end line-height-sm">
              <p className="mb-0">
                <span className="fw-bold">Dylan Hunter</span>
              </p>
              <small>Admin Profile</small>
            </div>
            <a
              className="nav-link dropdown-toggle pulse p-0"
              href="#"
              role="button"
              onClick={toggleUserDropdown}
              aria-expanded={showUserDropdown}
            >
              <img
                className="avatar lg rounded-circle img-thumbnail"
                src={logo}
                alt="profile"
              />
            </a>

            {showUserDropdown && (
              <div
                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0 show"
                style={{ minWidth: "280px" }}
              >
                <div className="card border-0 w-100">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/profile_av.png"
                        alt="profile"
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="fw-bold">Dylan Hunter</span>
                        </p>
                        <small>Dylan.hunter@gmail.com</small>
                      </div>
                    </div>

                    <hr className="dropdown-divider border-dark" />
                  </div>
                  <div className="list-group m-2">
                    <a
                      href="task.html"
                      className="list-group-item list-group-item-action border-0"
                    >
                      <i className="icofont-tasks fs-5 me-3"></i>My Task
                    </a>
                    <a
                      href="members.html"
                      className="list-group-item list-group-item-action border-0"
                    >
                      <i className="icofont-ui-user-group fs-6 me-3"></i>Members
                    </a>
                    <a
                      href="ui-elements/auth-signin.html"
                      className="list-group-item list-group-item-action border-0"
                    >
                      <i className="icofont-logout fs-6 me-3"></i>Signout
                    </a>
                    <hr className="dropdown-divider border-dark" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}