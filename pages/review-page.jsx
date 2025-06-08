import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function ReviewPage() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Reviews</h3>
          <div className="col-auto d-flex">
            <div className="dropdown px-2">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul
                className="dropdown-menu  dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Most Recent
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Positive First
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Negative First
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3">
      <div className="col-sm-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row clearfix g-3">
              <div className="col-lg-4 col-md-12">
                <div className="feedback-info sticky-top">
                  <div className="card">
                    <div className="card-body">
                      <h2 className=" display-6 fw-bold mb-0">4.5</h2>
                      <small className="text-muted">
                        based on 1,032 ratings
                      </small>
                      <div className="d-flex align-items-center">
                        <span className="mb-2 me-3">
                          <a href="#" className="rating-link active">
                            <i className="bi bi-star-fill text-warning" />
                          </a>
                          <a href="#" className="rating-link active">
                            <i className="bi bi-star-fill text-warning" />
                          </a>
                          <a href="#" className="rating-link active">
                            <i className="bi bi-star-fill text-warning" />
                          </a>
                          <a href="#" className="rating-link active">
                            <i className="bi bi-star-fill text-warning" />
                          </a>
                          <a href="#" className="rating-link active">
                            <i className="bi bi-star-half text-warning" />
                          </a>
                        </span>
                      </div>
                      <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 fw-bold d-flex align-items-center">
                            5
                            <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1" />
                          </h6>
                          <span className="small text-muted">661</span>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar light-success-bg"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow={92}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 fw-bold d-flex align-items-center">
                            4
                            <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1" />
                          </h6>
                          <span className="small text-muted">237</span>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar bg-info-light"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 fw-bold d-flex align-items-center">
                            3
                            <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1" />
                          </h6>
                          <span className="small text-muted">76</span>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar bg-lightyellow"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 fw-bold d-flex align-items-center">
                            2
                            <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1" />
                          </h6>
                          <span className="small text-muted">19</span>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar light-danger-bg "
                            role="progressbar"
                            style={{ width: "15%" }}
                            aria-valuenow={15}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="mb-0 fw-bold d-flex align-items-center">
                            1
                            <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1" />
                          </h6>
                          <span className="small text-muted">39</span>
                        </div>
                        <div className="progress" style={{ height: 10 }}>
                          <div
                            className="progress-bar bg-careys-pink"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="customer-like mt-5">
                        <h6 className="mb-0 fw-bold ">What Customers Like</h6>
                        <ul className="list-group mt-3">
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-light-success">1</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>Fun Factor</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">72 votes</span>
                            </div>
                          </li>
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-light-success">2</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>Great Value</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">52 votes</span>
                            </div>
                          </li>
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-light-success">3</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>My Task</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">35 votes</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="customer-like mt-5">
                        <h6 className="mb-0 fw-bold ">What Need Improvement</h6>
                        <ul className="list-group mt-3">
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-careys-pink">1</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>Value for Money</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">12 votes</span>
                            </div>
                          </li>
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-careys-pink">2</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>Customer service</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">8 votes</span>
                            </div>
                          </li>
                          <li className="list-group-item d-flex">
                            <div className="number border-end pe-2 fw-bold">
                              <strong className="color-careys-pink">3</strong>
                            </div>
                            <div className="cs-text flex-fill ps-2">
                              <span>Loding Item</span>
                            </div>
                            <div className="vote-text">
                              <span className="text-muted">2 votes</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <ul className="list-unstyled mb-4 res-set">
                  <li className="card mb-2">
                    <div className="card-body p-lg-4 p-3">
                      <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar4.jpg"
                          alt=""
                        />
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0">
                            <span>Peter Allan</span>{" "}
                            <span className="text-muted small">
                              1050 Followers
                            </span>
                          </h6>
                          <span className="text-muted">3 hours ago</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="mb-2 me-3">
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-half text-warning" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item-post">
                        <h6 className="">
                          The standard Lorem Ipsum passage, used since the 1500s
                        </h6>
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat
                        </p>
                        <div className="mb-2 mt-4 text-end">
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-thumbs-up" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Like (105)
                            </span>
                          </a>
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-comment" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Publice Comment
                            </span>
                          </a>
                          <a className="btn btn-primary btn-sm" href="#">
                            <i className="bi bi-chat-left-text-fill" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Direct Message
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>{" "}
                  {/* .Card End */}
                  <li className="card mb-2">
                    <div className="card-body p-lg-4 p-3">
                      <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar1.jpg"
                          alt=""
                        />
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0">
                            <span>Adrian Allan</span>{" "}
                            <span className="text-muted small">
                              650 Followers
                            </span>
                          </h6>
                          <span className="text-muted">1 Day ago</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="mb-2 me-3">
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-half text-warning" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item-post">
                        <h6 className="">
                          The standard Lorem Ipsum passage, used since the 1500s
                        </h6>
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat
                        </p>
                        <div className="mb-2 mt-4 text-end">
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-thumbs-up" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Like (105)
                            </span>
                          </a>
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-comment" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Publice Comment
                            </span>
                          </a>
                          <a className="btn btn-primary btn-sm" href="#">
                            <i className="bi bi-chat-left-text-fill" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Direct Message
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>{" "}
                  {/* .Card End */}
                  <li className="card mb-2">
                    <div className="card-body p-lg-4 p-3">
                      <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                        <img
                          className="avatar rounded-circle"
                          src="assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0">
                            <span>Benjamin Keith</span>{" "}
                            <span className="text-muted small">
                              458 Followers
                            </span>
                          </h6>
                          <span className="text-muted">5 Day ago</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="mb-2 me-3">
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-fill text-warning" />
                            </a>
                            <a href="#" className="rating-link active">
                              <i className="bi bi-star-half text-warning" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item-post">
                        <h6 className="">
                          The standard Lorem Ipsum passage, used since the 1500s
                        </h6>
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat
                        </p>
                        <div className="mb-2 mt-4 text-end">
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-thumbs-up" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Like (105)
                            </span>
                          </a>
                          <a
                            className="me-lg-2 me-1 btn btn-primary btn-sm"
                            href="#"
                          >
                            <i className="fa fa-comment" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Publice Comment
                            </span>
                          </a>
                          <a className="btn btn-primary btn-sm" href="#">
                            <i className="bi bi-chat-left-text-fill" />{" "}
                            <span className="d-none d-sm-none d-md-inline">
                              Direct Message
                            </span>
                          </a>
                        </div>
                        <div>
                          <div className="d-flex mt-3 pt-3 border-top">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <p className="mb-0">
                                <span>Karen Clark</span>{" "}
                                <small className="msg-time">5 Day ago</small>
                              </p>
                              <span className="text-muted">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <textarea
                            className="form-control"
                            placeholder="Replay"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </li>{" "}
                  {/* .Card End */}
                </ul>
                <nav aria-label="...">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">2</span>
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
            </div>
            {/* Row End */}
          </div>
        </div>
      </div>
    </div>
    {/* Row End */}
  </div>
</div>

  );
}