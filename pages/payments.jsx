import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Payments() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Payments</h3>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row g-3">
      <div className="col-md-12">
        <div className="card mb-3">
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
                  <th>Client Name</th>
                  <th>Date Start</th>
                  <th>Date End</th>
                  <th>Amount</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00001
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Social Geek Made</a>
                  </td>
                  <td>AgilSoft Tech</td>
                  <td>10-01-2021</td>
                  <td>10-02-2021</td>
                  <td>$3250</td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00002
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Practice to Perfect</a>
                  </td>
                  <td>Macrosoft</td>
                  <td>12-02-2021</td>
                  <td>10-04-2021</td>
                  <td>$1578</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00003
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Rhinestone</a>
                  </td>
                  <td>Google</td>
                  <td>18-02-2021</td>
                  <td>20-04-2021</td>
                  <td>$1978</td>
                  <td>
                    <span className="badge bg-lavender-purple">Draf</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00004
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Box of Crayons</a>
                  </td>
                  <td>Pixelwibes</td>
                  <td>28-02-2021</td>
                  <td>30-04-2021</td>
                  <td>$1978</td>
                  <td>
                    <span className="badge bg-lavender-purple">Draf</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00005
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Practice to Perfect</a>
                  </td>
                  <td>Deltasoft Tech</td>
                  <td>11-02-2021</td>
                  <td>10-04-2021</td>
                  <td>$1578</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00006
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Rhinestone</a>
                  </td>
                  <td>Google</td>
                  <td>17-02-2021</td>
                  <td>20-04-2021</td>
                  <td>$1978</td>
                  <td>
                    <span className="badge bg-lavender-purple">Draf</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="invoices.html" className="fw-bold text-secondary">
                      #00007
                    </a>
                  </td>
                  <td>
                    <a href="projects.html">Box of Crayons</a>
                  </td>
                  <td>Pixelwibes</td>
                  <td>14-02-2021</td>
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
  </div>
</div>

  );
}