import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Calender(){
    return (
       <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
          <h3 className="fw-bold mb-0">Calendar</h3>
          <div className="col-auto d-flex">
            <button
              type="button"
              className="btn btn-dark "
              data-bs-toggle="modal"
              data-bs-target="#addevent"
            >
              <i className="icofont-plus-circle me-2 fs-6" />
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix g-3">
      <div className="col-lg-12 col-md-12 ">
        {/* card: Calendar */}
        <div className="card">
          <div className="card-body" id="my_calendar" />
        </div>
      </div>
    </div>
    {/* Row End */}
  </div>
</div>


    )
}