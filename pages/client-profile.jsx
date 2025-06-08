import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function ClientProfile() {
    return (
        <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="card border-0 mb-4 no-bg">
          <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
            <h3 className=" fw-bold flex-fill mb-0">Client Profile</h3>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
    <div className="row g-3">
      <div className="col-xl-8 col-lg-12 col-md-12">
        <div className="card teacher-card  mb-3">
          <div className="card-body d-flex teacher-fulldeatil">
            <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
              <a href="#">
                <img
                  src="assets/images/lg/avatar3.jpg"
                  alt=""
                  className="avatar xl rounded-circle img-thumbnail shadow-sm"
                />
              </a>
              <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                <h6 className="mb-0 fw-bold d-block fs-6">CEO</h6>
                <span className="text-muted small">CLIENT ID : PXL-0001</span>
              </div>
            </div>
            <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 ps-4 w-100">
              <h6 className="mb-0 mt-2  fw-bold d-block fs-6">AgilSoft Tech</h6>
              <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                Ryan Ogden
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
                    <span className="ms-2 small">ryanogden@gmail.com</span>
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
        <h6 className="fw-bold  py-3 mb-3">Current Client Project</h6>
        <div className="teachercourse-list mb-3">
          <div className="row g-3 gy-5 pt-3 row-deck">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
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
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
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
          <div className="col-md-12">
            <div className="card">
              <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <div className="info-header">
                  <h6 className="mb-0 fw-bold ">Client Invoice</h6>
                </div>
              </div>
              <div className="card-body">
                <table
                  id="myProjectTable"
                  className="table table-hover align-middle mb-0"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>Project</th>
                      <th>Date Start</th>
                      <th>Date End</th>
                      <th>Amount</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="invoices.html"
                          className="fw-bold text-secondary"
                        >
                          #00001
                        </a>
                      </td>
                      <td>
                        <a href="projects.html">Social Geek Made</a>
                      </td>
                      <td>10-01-2021</td>
                      <td>10-02-2021</td>
                      <td>$3250</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="invoices.html"
                          className="fw-bold text-secondary"
                        >
                          #00002
                        </a>
                      </td>
                      <td>
                        <a href="projects.html">Practice to Perfect</a>
                      </td>
                      <td>12-02-2021</td>
                      <td>10-04-2021</td>
                      <td>$1578</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="invoices.html"
                          className="fw-bold text-secondary"
                        >
                          #00003
                        </a>
                      </td>
                      <td>
                        <a href="projects.html">Rhinestone</a>
                      </td>
                      <td>18-02-2021</td>
                      <td>20-04-2021</td>
                      <td>$1978</td>
                      <td>
                        <span className="badge bg-lavender-purple">Draf</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="invoices.html"
                          className="fw-bold text-secondary"
                        >
                          #00004
                        </a>
                      </td>
                      <td>
                        <a href="projects.html">Box of Crayons</a>
                      </td>
                      <td>28-02-2021</td>
                      <td>30-04-2021</td>
                      <td>$1978</td>
                      <td>
                        <span className="badge bg-lavender-purple">Draf</span>
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
      <div className="col-xl-4 col-lg-12 col-md-12">
        <div className="card mb-3">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold ">Client Task</h6>
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
                  <li className="dd-item mb-3">
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
                  <li className="dd-item mb-3">
                    <div className="dd-handle">
                      <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                          Quality Assurance
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
                          <span className="badge bg-success text-end mt-1">
                            Completed
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
                            Social Geek Made
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dd-item">
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
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
  </div>
</div>

    );
}