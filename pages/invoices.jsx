import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Invoices() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0 py-3 pb-2">Invoices</h3>
          <div className="col-auto py-2 w-sm-100">
            <ul
              className="nav nav-tabs tab-body-header rounded invoice-set"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#Invoice-list"
                  role="tab"
                >
                  Invoice List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Invoice-Simple"
                  role="tab"
                >
                  Simple invoice
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#Invoice-Email"
                  role="tab"
                >
                  Email invoice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-12">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="Invoice-list">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar1.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Ryan MacLeod</span>
                        </h6>
                        <span className="text-muted">Box of Crayons</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 2211 Jones
                        Avenue,Winston Salem FL 27107
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $50 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>23 Feb, 2021</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Penelope Stewart</span>
                        </h6>
                        <span className="text-muted">Fast Cad</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 3154 Sampson
                        Street,Aurora CT 80014
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $43 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>14 Apr, 2021</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Diane Slater</span>
                        </h6>
                        <span className="text-muted">Gob Geeklords</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 49 Stamford
                        Road. West Chicago, IL 60185
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $25 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>16 Mar, 2021</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Amy Mills</span>
                        </h6>
                        <span className="text-muted">Java Dalia</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 2698
                        Northumberland. Melbourne, FL 32904
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $55 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>17 Mar, 2021</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar5.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Tim Mitchell</span>
                        </h6>
                        <span className="text-muted">Practice to Perfect</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 35 Gubener
                        Str. Emmering, FL 32904
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $28 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>12 Feb, 2021</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body d-sm-flex justify-content-between">
                    <a href="javascript:void(0);" className="d-flex">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>Brian Swader</span>
                        </h6>
                        <span className="text-muted">Rhinestone</span>
                      </div>
                    </a>
                    <div className="text-end d-none d-md-block">
                      <p className="mb-1">
                        <i className="icofont-location-pin ps-1" /> 70 Bowman
                        St. South Windsor, CT 06074
                      </p>
                      <span className="text-muted">
                        <i className="icofont-money ps-1" /> $65 per hour
                      </span>
                    </div>
                  </div>
                  <div className="card-footer justify-content-between d-flex align-items-center">
                    <div className="d-none d-md-block">
                      <strong>Applied on:</strong>
                      <span>18 Feb, 2020</span>
                    </div>
                    <div className="card-hover-show">
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Download
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Send
                      </a>
                      <a className="btn btn-sm btn-white border lift" href="#">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation">
                  <ul className="pagination mt-4">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>{" "}
            {/* Row end  */}
          </div>{" "}
          {/* tab end  */}
          <div className="tab-pane fade" id="Invoice-Simple">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="card p-xl-5 p-lg-4 p-0">
                  <div className="card-body">
                    <div className="mb-3 pb-3 border-bottom">
                      Invoice
                      <strong>01/Nov/2020</strong>
                      <span className="float-end">
                        {" "}
                        <strong>Status:</strong> Pending
                      </span>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm-6">
                        <h6 className="mb-3">From:</h6>
                        <div>
                          <strong>Deo web</strong>
                        </div>
                        <div>111 Berkeley Rd</div>
                        <div>STREET ON THE FOSSE, Poland</div>
                        <div>Email: info@deoweb.com</div>
                        <div>Phone: +44 888 666 3333</div>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="mb-3">To:</h6>
                        <div>
                          <strong> Colin Web</strong>
                        </div>
                        <div>45 Larissa Court</div>
                        <div>Victoria, BIRDWOODTON</div>
                        <div>Email: ColinWeb@gmail.com</div>
                        <div>Phone: +66 243 456 789</div>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Project</th>
                            <th>Description</th>
                            <th className="text-end">Project Cost</th>
                            <th className="text-center">Members</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td>Box of Crayons</td>
                            <td>Extended License</td>
                            <td className="text-end">$1999,00</td>
                            <td className="text-center">1</td>
                            <td className="text-end">$1999,00</td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>Fast Cad</td>
                            <td>
                              Instalation and Customization (cost per hour)
                            </td>
                            <td className="text-end">$50,00</td>
                            <td className="text-center">2</td>
                            <td className="text-end">$100,00</td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>Hosting</td>
                            <td>1 year subcription</td>
                            <td className="text-end">$499,00</td>
                            <td className="text-center">1</td>
                            <td className="text-end">$499,00</td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td>Platinum Support</td>
                            <td>1 year subcription 24/7</td>
                            <td className="text-end">$3.999,00</td>
                            <td className="text-center">1</td>
                            <td className="text-end">$3.999,00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-sm-5"></div>
                      <div className="col-lg-4 col-sm-5 ms-auto">
                        <table className="table table-clear">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Subtotal</strong>
                              </td>
                              <td className="text-end">$6.597,00</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>VAT (10%)</strong>
                              </td>
                              <td className="text-end">$659,7</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Total</strong>
                              </td>
                              <td className="text-end">
                                <strong>$7.256,7</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>Terms &amp; Condition</h6>
                        <p className="text-muted">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over
                        </p>
                      </div>
                      <div className="col-lg-12 text-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg my-1"
                        >
                          <i className="fa fa-print" /> Print
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg my-1"
                        >
                          <i className="fa fa-paper-plane-o" /> Send Invoice
                        </button>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
          </div>{" "}
          {/* tab end  */}
          <div className="tab-pane fade" id="Invoice-Email">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="d-flex justify-content-center">
                  <table className="card p-5">
                    <tbody>
                      <tr>
                        <td />
                        <td className="text-center">
                          <table>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  <h2>$48.98 Paid</h2>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center py-2">
                                  <h4 className="mb-0">
                                    Thanks for using PXL Inc.
                                  </h4>
                                </td>
                              </tr>
                              <tr>
                                <td className="pt-2 pb-4">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td>
                                          Attn: <strong>Ryan MacLeod</strong>{" "}
                                          Winston Salem FL 27107
                                          <br />
                                          Email: RyanmacLeod@gmail.com
                                          <br />
                                          Phone: +88 123 456 789
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="pt-2">
                                          <table className="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <td className="text-start">
                                                  Extended License
                                                </td>
                                                <td className="text-end">
                                                  $ 20.99
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="text-start">
                                                  1 year subcription
                                                </td>
                                                <td className="text-end">
                                                  $ 19.99
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="text-start">
                                                  Instalation and Customization
                                                </td>
                                                <td className="text-end">
                                                  $ 8.00
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="text-start w-80">
                                                  <strong>Total</strong>
                                                </td>
                                                <td className="text-end fw-bold">
                                                  $ 48.98
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td className="pt-2 pb-2 text-center">
                                  <a href="#">View in browser</a>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-0 text-center">
                                  PXL Inc. 47 Aurora St. South West, CT 06074
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table className="mt-3 text-center w-100">
                            <tbody>
                              <tr>
                                <td className="aligncenter content-block">
                                  Questions? Email{" "}
                                  <a href="mailto:">info@pixelwibes.com</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
          </div>{" "}
          {/* tab end  */}
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
  </div>
</div>

  );
}