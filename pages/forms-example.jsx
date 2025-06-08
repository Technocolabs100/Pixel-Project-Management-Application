import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function FormsExample() {
  return (
    <div className="body d-flex py-3">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">Forms</h3>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row align-item-center">
      <div className="col-md-12">
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Basic Form</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="row g-3 align-items-center">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phonenumber"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailaddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailaddress"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="admitdate" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="admitdate"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="admittime" className="form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="admittime"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="formFileMultiple" className="form-label">
                    {" "}
                    File Upload
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple=""
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios11"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios11"
                        >
                          Male
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios22"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios22"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="addnote" className="form-label">
                    Add Note
                  </label>
                  <textarea
                    className="form-control"
                    id="addnote"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Basic Validation Form</h6>
          </div>
          <div className="card-body">
            <form id="basic-form" method="post" noValidate="">
              <div className="row g-3 align-items-center">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Text Input</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Email Input</label>
                    <input type="email" className="form-control" required="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Text Area</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      cols={30}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Checkbox</label>
                    <br />
                    <label className="fancy-checkbox">
                      <input
                        type="checkbox"
                        name="checkbox"
                        required=""
                        data-parsley-errors-container="#error-checkbox"
                      />
                      <span>Option 1</span>
                    </label>
                    <label className="fancy-checkbox">
                      <input type="checkbox" name="checkbox" />
                      <span>Option 2</span>
                    </label>
                    <label className="fancy-checkbox">
                      <input type="checkbox" name="checkbox" />
                      <span>Option 3</span>
                    </label>
                    <p id="error-checkbox" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Radio Button</label>
                    <br />
                    <label className="fancy-radio">
                      <input
                        type="radio"
                        name="gender"
                        defaultValue="male"
                        required=""
                        data-parsley-errors-container="#error-radio"
                      />
                      <span>
                        <i />
                        Male
                      </span>
                    </label>
                    <label className="fancy-radio">
                      <input type="radio" name="gender" defaultValue="female" />
                      <span>
                        <i />
                        Female
                      </span>
                    </label>
                    <p id="error-radio" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Validate
              </button>
            </form>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold ">Advanced Validation Form</h6>
          </div>
          <div className="card-body">
            <form id="advanced-form" data-parsley-validate="" noValidate="">
              <div className="row g-3 align-items-center">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="text-input1" className="form-label">
                      Min. 8 Characters
                    </label>
                    <input
                      type="text"
                      id="text-input1"
                      className="form-control"
                      required=""
                      data-parsley-minlength={8}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="text-input2" className="form-label">
                      Between 5-10 Characters
                    </label>
                    <input
                      type="text"
                      id="text-input2"
                      className="form-control"
                      required=""
                      data-parsley-length="[5,10]"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="text-input3" className="form-label">
                      Min. Number ( &gt;= 5 )
                    </label>
                    <input
                      type="text"
                      id="text-input3"
                      className="form-control"
                      required=""
                      data-parsley-min={5}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="text-input4" className="form-label">
                      Between 20-30
                    </label>
                    <input
                      type="text"
                      id="text-input4"
                      className="form-control"
                      required=""
                      data-parsley-range="[20,30]"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Select Min. 2 Options</label>
                    <br />
                    <label className="control-inline fancy-checkbox">
                      <input
                        type="checkbox"
                        name="checkbox2"
                        required=""
                        data-parsley-mincheck={2}
                        data-parsley-errors-container="#error-checkbox2"
                      />
                      <span>Option 1</span>
                    </label>
                    <label className="control-inline fancy-checkbox">
                      <input type="checkbox" name="checkbox2" />
                      <span>Option 2</span>
                    </label>
                    <label className="control-inline fancy-checkbox">
                      <input type="checkbox" name="checkbox2" />
                      <span>Option 3</span>
                    </label>
                    <p id="error-checkbox2" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">
                      Select Between 1-2 Options
                    </label>
                    <br />
                    <label className="control-inline fancy-checkbox">
                      <input
                        type="checkbox"
                        name="checkbox3"
                        required=""
                        data-parsley-check="[1,2]"
                        data-parsley-errors-container="#error-checkbox3"
                      />
                      <span>Option 1</span>
                    </label>
                    <label className="control-inline fancy-checkbox">
                      <input type="checkbox" name="checkbox3" />
                      <span>Option 2</span>
                    </label>
                    <label className="control-inline fancy-checkbox">
                      <input type="checkbox" name="checkbox3" />
                      <span>Option 3</span>
                    </label>
                    <p id="error-checkbox3" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Validate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Row end  */}
  </div>
</div>

  );
}