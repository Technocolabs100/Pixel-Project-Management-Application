import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function AttendanceEmployee() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center g-3 mb-3">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Employees View</h3>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row align-item-center row-deck g-3 mb-3">
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
        <div className="card">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold ">Today Time Utilisation</h6>
          </div>
          <div className="card-body">
            <div className="timesheet-info d-flex align-items-center justify-content-between flex-wrap">
              <div className="intime d-flex align-items-center mt-2">
                <i className="icofont-finger-print fs-4 color-light-success" />
                <span className="fw-bold ms-1">Punching: 10:00 Am</span>
              </div>
              <div className="outtime mt-2 w-sm-100">
                <button type="button" className="btn btn-dark w-sm-100">
                  <i className="icofont-foot-print me-2" />
                  Punch Out
                </button>
              </div>
            </div>
            <div id="apex-circle-chart" />
            <div className="timesheet-info d-flex align-items-center justify-content-around flex-wrap">
              <div className="intime d-flex align-items-center">
                <i className="icofont-lunch fs-3 color-lavender-purple" />
                <span className="fw-bold ms-1">Break: 1:10 Hr</span>
              </div>
              <div className="intime d-flex align-items-center">
                <i className="icofont-ui-timer fs-4 color-light-success" />
                <span className="fw-bold ms-1">Overtime: 02:10 Hr</span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .card: My Timeline */}
      </div>
      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Employess Yearly Status</h6>
          </div>
          <div className="card-body">
            <div id="apex-chart-line-column" />
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3 mb-3">
      <div className="col-lg-12 col-md-12 flex-column">
        <div className="row g-3 row-deck">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Statistics</h6>
              </div>
              <div className="card-body">
                <div className="progress-count mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Today
                    </h6>
                    <span className="small text-muted">02/08</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-info-bg"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow={92}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      This Week
                    </h6>
                    <span className="small text-muted">01/40</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar bg-lightgreen"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      This Month
                    </h6>
                    <span className="small text-muted">02/160</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-success-bg"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Overtime
                    </h6>
                    <span className="small text-muted">15:30 Hr</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar light-orange-bg"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress-count mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="mb-0 fw-bold d-flex align-items-center">
                      Remaining
                    </h6>
                    <span className="small text-muted">01/08</span>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar bg-lightyellow"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Recent Activity</h6>
              </div>
              <div className="card-body">
                <div className="timeline-item ti-danger border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                      PH
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Punch In at</strong>
                      </div>
                      <span className="d-flex text-muted align-items-center">
                        <i className="icofont-ui-clock me-1" /> 10 Am
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* timeline item end  */}
                <div className="timeline-item ti-info border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                      PO
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Punch Out at</strong>
                      </div>
                      <span className="d-flex text-muted align-items-center">
                        <i className="icofont-ui-clock me-1" /> 11:30 Am
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* timeline item end  */}
                <div className="timeline-item ti-info border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-warning">
                      BR
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Break Time</strong>
                      </div>
                      <span className="d-flex text-muted align-items-center">
                        <i className="icofont-ui-clock me-1" /> 1 Pm to 2 Pm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item ti-success  border-bottom ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                      PO
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Punch IN at</strong>
                      </div>
                      <span className="d-flex text-muted align-items-center">
                        <i className="icofont-ui-clock me-1" /> 2:10 Pm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item ti-info ms-2">
                  <div className="d-flex">
                    <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                      PO
                    </span>
                    <div className="flex-fill ms-3">
                      <div className="mb-1">
                        <strong>Punch Out at</strong>
                      </div>
                      <span className="d-flex text-muted align-items-center">
                        <i className="icofont-ui-clock me-1" /> 7:30 Pm
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* timeline item end  */}
              </div>
            </div>{" "}
            {/* .card: My Timeline */}
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <table
              id="myProjectTable"
              className="table table-hover align-middle mb-0 text-center"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Puchin Time</th>
                  <th>Puchout Time</th>
                  <th>Break Time</th>
                  <th>Half Day</th>
                  <th>Full Day</th>
                  <th>Overtime</th>
                  <th>Total Production</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>June 26, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>June 25, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>June 24, 2021</td>
                  <td className="text-success">10:00 AM</td>
                  <td className="text-danger">02:00 PM</td>
                  <td className="text-danger">00:00 </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td className="text-success">00:00</td>
                  <td className="text-success fw-bold">04:00 Hr</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>June 23, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">03:05 PM</td>
                  <td className="text-danger">00:00 </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td className="text-success">00:00</td>
                  <td className="text-success fw-bold">05:00 Hr</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>June 22, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>June 21, 2021</td>
                  <td className="text-success">10:15 AM</td>
                  <td className="text-danger">02:15 PM</td>
                  <td className="text-danger">00:00 </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td className="text-success">00:00</td>
                  <td className="text-success fw-bold">04:00 Hr</td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>June 18, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>June 17, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>June 16, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>June 15, 2021</td>
                  <td className="text-success">00:00</td>
                  <td className="text-danger">00:00</td>
                  <td className="text-danger">00:00</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td className="text-success">00:00</td>
                  <td className="text-success fw-bold">00:00</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>June 14, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>June 11, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>June 10, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>June 09, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>June 08, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>June 07, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>June 04, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>June 03, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>June 02, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>June 01, 2021</td>
                  <td className="text-success">10:05 AM</td>
                  <td className="text-danger">09:05 PM</td>
                  <td className="text-danger">01:12 Hr</td>
                  <td>
                    <i className="icofont-close-circled text-danger" />
                  </td>
                  <td>
                    <i className="icofont-check-circled text-success" />
                  </td>
                  <td className="text-success">01:39 Hr</td>
                  <td className="text-success fw-bold">09:39 Hr</td>
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