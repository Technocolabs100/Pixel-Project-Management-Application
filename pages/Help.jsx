import React from 'react'
import '../assets/css/my-task.style.min.css'
const Help = () => {
  return (
    <div>
      <div id="mytask-layout" className="theme-indigo">
        {/* main body area */}
        <div className="main px-lg-4 px-md-4">
          {/* Body: Header */}
          <div className="header">
          </div>
          {/* Body: Body */}
          <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
              <div className="row clearfix">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 flex-lg-column">
                  <div className="sticky-lg-top">
                    <div className="row row-deck">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12 flex-column">
                        <div className="card mb-3 bg-info-light ">
                          <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="preview-pane text-center">
                              <svg
                                width={100}
                                fill="currentColor"
                                className="bi bi-chat-text color-defult "
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              <a
                                href="http://pixelwibes.com/"
                                target="_blank"
                                className="fw-bold fs-6 mt-2 d-flex justify-content-center color-defult "
                              >
                                Chat with us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12 flex-column">
                        <div className="card mb-3 bg-lightyellow">
                          <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="preview-pane text-center">
                              <svg
                                width={100}
                                fill="currentColor"
                                className="bi bi-envelope color-defult "
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                              </svg>
                              <a
                                href="mailto:pixelwibes@gmail.com"
                                className="fw-bold  fs-6 mt-2 d-flex justify-content-center color-defult "
                              >
                                Email us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12">
                  <div className="card border-0">
                    <div className="card-header py-3">
                      <h4 className=" display-6 fw-bold">Help</h4>
                    </div>
                    <div className="card-body">
                      <div className="mb-4 overflow-hidden">
                        <div className="bg-primary py-5 px-4 text-light">
                          <h4>pixelwibes.com</h4>
                          <span>Quick Start Guides Help Center</span>
                        </div>
                        <div className="p-4">
                          <p className="fw-bold">My-Task guide</p>
                          <span>
                            Get started with My-Task Business and learn about
                            features for admins and users.
                          </span>
                          <div className="mt-4 mb-2">
                            <a
                              href="http://pixelwibes.com/"
                              className="btn btn-primary"
                              target="_blank"
                            >
                              Check out the guide
                            </a>
                          </div>
                          <hr />
                          <p className="fw-bold">Get answers</p>
                          <span>
                            Visit the help centre for answers to common issues.
                          </span>
                          <div className="mt-4 mb-2">
                            <a
                              href="http://pixelwibes.com/"
                              className="btn btn-primary"
                              target="_blank"
                            >
                              Go to Help Centre
                            </a>
                          </div>
                          <hr />
                          <span className="text-muted">
                            Thanks for choosing{" "}
                            <strong className="text-warning">
                              Pixel Wibes
                            </strong>{" "}
                            Admin.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row End */}
            </div>
          </div>
          {/* Modal Members*/}
          <div
            className="modal fade"
            id="addUser"
            tabIndex={-1}
            aria-labelledby="addUserLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  fw-bold" id="addUserLabel">
                    Employee Invitation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="inviteby_email">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        id="exampleInputEmail1"
                        aria-describedby="exampleInputEmail1"
                      />
                      <button
                        className="btn btn-dark"
                        type="button"
                        id="button-addon2"
                      >
                        Sent
                      </button>
                    </div>
                  </div>
                  <div className="members_list">
                    <h6 className="fw-bold ">Employee </h6>
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                            <span className="text-muted">
                              rachel.carr@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <span className="members-role ">Admin</span>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-ui-password fs-6 me-2" />
                                    ResetPassword
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-chart-line fs-6 me-2" />
                                    ActivityReport
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">
                              Lucas Baker
                              <a href="#" className="link-secondary ms-2">
                                (Resend invitation)
                              </a>
                            </h6>
                            <span className="text-muted">
                              lucas.baker@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    <span>All operations permission</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    <span>Only Invite &amp; manage team</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-delete-alt fs-6 me-2" />
                                    Delete Member
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img
                              className="avatar lg rounded-circle"
                              src="assets/images/xs/avatar8.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Una Coleman</h6>
                            <span className="text-muted">
                              una.coleman@gmail.com
                            </span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn bg-transparent dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    <span>All operations permission</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    <span>Only Invite &amp; manage team</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn bg-transparent dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="icofont-ui-settings  fs-6" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-ui-password fs-6 me-2" />
                                      ResetPassword
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-chart-line fs-6 me-2" />
                                      ActivityReport
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-delete-alt fs-6 me-2" />
                                      Suspend member
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      <i className="icofont-not-allowed fs-6 me-2" />
                                      Delete Member
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jquery Core Js */}
      {/* Jquery Page Js */}
      {/* Mirrored from www.pixelwibes.com/template/my-task/html/dist/help.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 03 Aug 2022 04:33:32 GMT */}
    </div>
  );
}

export default Help