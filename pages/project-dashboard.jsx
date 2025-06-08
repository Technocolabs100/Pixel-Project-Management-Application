import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function ProjectDashboard() {
return (
<div className="body d-flex py-3">
  <div className="container-xxl">
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
    <div className="row g-3 mb-3 row-deck">
      <div className="col-md-12 col-lg-4">
        <div className="card">
          <div className="card-body">
            <h6 className="mb-3 fw-bold ">Income Analytics</h6>
            <div className="d-flex justify-content-end text-center">
              <div className="p-2">
                <h6 className="mb-0 fw-bold">$5,318</h6>
                <small className="text-muted">Income</small>
              </div>
              <div className="p-2 ms-4">
                <h6 className="mb-0 fw-bold">$2,840</h6>
                <small className="text-muted">Expense</small>
              </div>
            </div>
            <div className="mt-3" id="incomeanalytics" />
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-8">
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <div className="info-header">
              <h6 className="mb-0 fw-bold ">Project Timeline</h6>
            </div>
            <button
              className="btn btn-sm btn-link  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
              <li>
                <a className="dropdown-item py-2 rounded" href="#">
                  Last 7 days
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 rounded" href="#">
                  Last 30 days
                </a>
              </li>
              <li>
                <a className="dropdown-item py-2 rounded" href="#">
                  Last 60 days
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div id="apex-timeline" />
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
    <div className="row g-3 mb-3 row-deck">
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <div className="info-header">
              <h6 className="mb-0 fw-bold ">Project Information</h6>
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
                  <th>Title</th>
                  <th>Date Start</th>
                  <th>Deadline</th>
                  <th>Leader</th>
                  <th>Completion</th>
                  <th>Stage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="projects.html">Social Geek Made</a>
                  </td>
                  <td>10-01-2021</td>
                  <td>4 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar1.jpg"
                      alt="Avatar"
                      className="avatar sm  rounded-circle me-2"
                    />
                    <a href="#">Keith</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow={92}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "78%" }}
                      >
                        78%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-warning">MEDIUM</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Practice to Perfect</a>
                  </td>
                  <td>12-02-2021</td>
                  <td>1 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar2.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Colin</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">LOW</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Rhinestone</a>
                  </td>
                  <td>18-02-2021</td>
                  <td>2 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar3.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Adam</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-danger">HIGH</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Box of Crayons</a>
                  </td>
                  <td>23-02-2021</td>
                  <td>1 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar4.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Peter</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      >
                        85%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-warning">MEDIUM</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Gob Geeklords</a>
                  </td>
                  <td>16-03-2021</td>
                  <td>10 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar5.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Evan</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "65%" }}
                      >
                        65%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">LOW</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Java Dalia</a>
                  </td>
                  <td>17-03-2021</td>
                  <td>8 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar6.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Connor</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={48}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "48%" }}
                      >
                        48%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-secondary">MEDIUM</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="projects.html">Fast Cad</a>
                  </td>
                  <td>14-04-2021</td>
                  <td>2 Month</td>
                  <td>
                    <img
                      src="assets/images/xs/avatar7.jpg"
                      alt="Avatar"
                      className="avatar sm rounded-circle me-2"
                    />
                    <a href="#">Benjamin</a>
                  </td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar  bg-primary"
                        role="progressbar"
                        aria-valuenow={76}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "76%" }}
                      >
                        76%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-secondary">MEDIUM</span>
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
</div>
);
}
