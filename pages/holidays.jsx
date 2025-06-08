import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Holidays() {
  return (
   <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Holidays</h3>
          <div className="col-auto d-flex w-sm-100">
            <button
              type="button"
              className="btn btn-dark btn-set-task w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#addholiday"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Add Holidays
            </button>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3">
      <div className="col-sm-12">
        <div className="card mb-3">
          <div className="card-body">
            <table
              id="myProjectTable"
              className="table table-hover align-middle mb-0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Holiday Day</th>
                  <th>Holiday Date</th>
                  <th>Holiday Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-danger">01</td>
                  <td className="text-danger">Tuesday</td>
                  <td className="text-danger">January 26, 2021</td>
                  <td className="text-danger">Republic Day</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">02</td>
                  <td className="text-danger">Friday</td>
                  <td className="text-danger">April 2, 2021</td>
                  <td className="text-danger">Good Friday</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">03</td>
                  <td className="text-danger">Monday</td>
                  <td className="text-danger">April 30, 2021</td>
                  <td className="text-danger">Memorial Day</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-success">04</td>
                  <td className="text-success">Wednesday</td>
                  <td className="text-success">August 15, 2021</td>
                  <td className="text-success">Independence Day</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Wednesday</td>
                  <td>August 22, 2021</td>
                  <td>Bakrid</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Monday</td>
                  <td>September 3, 2021</td>
                  <td>Janmashtami</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editholiday"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>Tuesday</td>
                  <td>October 2, 2021</td>
                  <td>Gandhi Jayanti</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>Wednesday</td>
                  <td>November 7, 2021</td>
                  <td>Diwali</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Tuesday</td>
                  <td>December 25, 2021</td>
                  <td>Christmas Day</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary deleterow"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
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