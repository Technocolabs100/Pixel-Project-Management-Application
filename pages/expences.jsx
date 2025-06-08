import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Expenses() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Expenses</h3>
          <div className="col-auto d-flex w-sm-100">
            <button
              type="button"
              className="btn btn-dark btn-set-task w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#expadd"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Add Expenses
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
                  <th>Exp Id</th>
                  <th>Item</th>
                  <th>Order By</th>
                  <th>Date</th>
                  <th>From</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#EX-00002</td>
                  <td>Internet Payment</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar1.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Joan Dyer</span>
                  </td>
                  <td>12/03/2021</td>
                  <td>Airtel Portal</td>
                  <td>
                    <span className="badge bg-warning">In Progress</span>
                  </td>
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
                        data-bs-target="#expedit"
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
                  <td>#EX-00006</td>
                  <td>Keybord Order</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar2.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Ryan Randall</span>
                  </td>
                  <td>12/03/2021</td>
                  <td>Flipkart</td>
                  <td>
                    <span className="badge bg-warning">In Progress</span>
                  </td>
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
                        data-bs-target="#expedit"
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
                  <td>#EX-00004</td>
                  <td>Printer Repairing</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar3.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Phil Glover</span>
                  </td>
                  <td>16/03/2021</td>
                  <td>JustDial</td>
                  <td>
                    <span className="badge bg-warning">In Progress</span>
                  </td>
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
                        data-bs-target="#expedit"
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
                  <td>#EX-00011</td>
                  <td>Pen/book Order</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Victor Rampling</span>
                  </td>
                  <td>25/02/2021</td>
                  <td>Flipkart</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
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
                        data-bs-target="#expedit"
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
                  <td>#EX-00018</td>
                  <td>Food Order</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar5.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Sally Graham</span>
                  </td>
                  <td>16/02/2021</td>
                  <td>Swiggy</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
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
                        data-bs-target="#expedit"
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
                  <td>#EX-00014</td>
                  <td>Decoration Order</td>
                  <td>
                    <img
                      className="avatar rounded-circle"
                      src="assets/images/xs/avatar6.jpg"
                      alt=""
                    />
                    <span className="fw-bold ms-1">Robert Anderson</span>
                  </td>
                  <td>18/01/2021</td>
                  <td>Flipkart</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
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
                        data-bs-target="#expedit"
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