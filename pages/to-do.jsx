import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function Todo(){
    return (
        <div className="body d-flex py-3">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0">To Do List</h3>
          <div className="col-auto d-flex">
            <button
              type="button"
              className="btn btn-secondary btn-todo-hide"
              onclick="toggleHide()"
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row mb-3">
      <div className="col-12">
        <div className="card my-todo">
          <div className="card-header border-bottom-0 todo-wrapper p-4">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="TodoInput"
                placeholder="What you need to do, sir?"
              />
              <button type="button" className="btn btn-primary btn-todo-add">
                Add
              </button>
            </div>
            <span
              className="todo-error text-danger small ms-3"
              style={{ display: "none" }}
            >
              Input can't be empty!
            </span>
          </div>
          <div className="card-body p-4">
            <ul className="list-unstyled mb-0 todo-list">
              <li>
                <span>Call For Marketing Agent</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
              <li className="active">
                <span>Movie Tickit Book</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
              <li>
                <span>Car Service for Sunday</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
              <li>
                <span>Internet Bill Pay</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
              <li className="active">
                <span>Client Mail Replay</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
              <li className="active">
                <span>Project Work Feedback</span>
                <div className="todo-action">
                  <span className="btn done p-1 fa fa-check" />
                  <span className="btn text-danger close p-1 fa fa-trash-o" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
  </div>
</div>

    );
}