import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Timesheet() {
return (
<div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Project Timesheet</h3>
          <div className="col-auto d-flex w-sm-100">
            <button
              type="button"
              className="btn btn-dark btn-set-task w-sm-100"
              data-bs-toggle="modal"
              data-bs-target="#sendsheet"
            >
              <i className="icofont-file-spreadsheet me-2 fs-6" />
              Sheets Sent
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
                  <th>Project Name</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thur</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                  <th>Total</th>
                  <th>
                    <i className="icofont-gear fs-5" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Rhinestone</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded1"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded2"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded3"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded4"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded5"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded6"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded7"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      56
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Practice to Perfect</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded8"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded9"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded10"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded11"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded12"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded13"
                      defaultValue="06:20:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded14"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      54.20
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Java Dalia</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded15"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded16"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded17"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded18"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded19"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded20"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded21"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      56
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Gob Geeklords</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded22"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded23"
                      defaultValue="04:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded24"
                      defaultValue="04:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded25"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded26"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded27"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded28"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      48
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Box of Crayons</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded29"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded30"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded31"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded32"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded33"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded34"
                      defaultValue="05:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded35"
                      defaultValue="05:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      50
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Fast Cad</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded36"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded37"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded38"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded39"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded40"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded41"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded42"
                      defaultValue="08:00:00"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      56
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Project Name Select</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded43"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded44"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded45"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded46"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded47"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded48"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded49"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      00
                    </button>
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
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select Project Category"
                    >
                      <option selected="">Project Name Select</option>
                      <option value={1}>Fast Cad</option>
                      <option value={2}>Box of Crayons</option>
                      <option value={3}>Gob Geeklords</option>
                      <option value={4}>Java Dalia</option>
                      <option value={5}>Practice to Perfect</option>
                      <option value={6}>Rhinestone</option>
                      <option value={7}>Social Geek Made</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded50"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded51"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded52"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded53"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded54"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded55"
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control"
                      id="timepickerded56"
                    />
                  </td>
                  <td>
                    <button type="button" className="btn light-success-bg">
                      00
                    </button>
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
