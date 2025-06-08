import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Attendance() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Attendance (Admin)</h3>
          <div className="col-auto d-flex mt-1 mt-sm-0">
            <button
              type="button"
              className="btn btn-dark  w-sm-100 me-2"
              data-bs-toggle="modal"
              data-bs-target="#editattendance"
            >
              <i className="icofont-edit me-2 fs-6" />
              Edit Attendance
            </button>
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Today Absent
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Week Absent
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3">
      <div className="col-sm-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="atted-info d-flex mb-3 flex-wrap">
              <div className="full-present me-2">
                <i className="icofont-check-circled text-success me-1" />
                <span>Full Day Present</span>
              </div>
              <div className="Half-day me-2">
                <i className="icofont-wall-clock text-warning me-1" />
                <span>Half Day Present</span>
              </div>
              <div className="absent me-2">
                <i className="icofont-close-circled text-danger me-1" />
                <span>Full Day Absence</span>
              </div>
            </div>
            <div className="table-responsive">
              <table
                className="table table-hover align-middle mb-0"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw-bold small">Joan Dyer</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Ryan Randall</span>
                    </td>
                    <td>
                      <i className="icofont-close-circled text-danger" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-close-circled text-danger" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-close-circled text-danger" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Phil Glover</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Victor Rampling</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Sally Graham</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Robert Anderson</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold small">Ryan Stewart</span>
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-check-circled text-success" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                    <td>
                      <i className="icofont-wall-clock text-warning" />
                    </td>
                  </tr>
                </tbody>
              </table>
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