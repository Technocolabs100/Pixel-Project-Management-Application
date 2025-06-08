import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

const Sidebar = () => {
    const [isDashboardOpen, setDashboardOpen] = useState(true);
    const [isProjectOpen, setProjectOpen] = useState(false);
    const [isTicketOpen, setTicketOpen] = useState(false);
    const [isClientOpen, setClientOpen] = useState(false);
    const [isEmpOpen, setEmpOpen] = useState(false);
    const [isAccountsOpen, setAccountsOpen] = useState(false);
    const [isPayrollOpen, setPayrollOpen] = useState(false);
    const [isAppOpen, setAppOpen] = useState(false);
    const [isExtraOpen, setExtraOpen] = useState(false);



  return (
    <div className="sidebar px-4 py-4 py-md-5 me-0">
      <div className="d-flex flex-column h-100">
        <a href="index.html" className="mb-0 brand-icon">
          <span className="logo-icon">
            <svg
              width={35}
              height={35}
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </span>
          <span className="logo-text">My-Task</span>
        </a>
        {/* Menu: main ul */}
        <ul className="menu-list flex-grow-1 mt-3">
          <li className={isDashboardOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isDashboardOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setDashboardOpen(!isDashboardOpen);
              }}
              href="#"
            >
              <i className="icofont-home fs-5" />
              <span>Dashboard</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>

            <ul
              className={`sub-menu collapse ${isDashboardOpen ? "show" : ""}`}
              id="dashboard-Components"
            >
              <li>
                <Link className="ms-link active" to="/Home">
                  <span>Hr Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/project-dashboard">
                  <span>Project Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={isProjectOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isProjectOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setProjectOpen(!isProjectOpen);
              }}
              href="#"
            >
              <i className="icofont-briefcase" />
              <span>Projects</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>

            {/* Menu: Sub menu ul */}
            <ul
              className={`sub-menu collapse ${isProjectOpen ? "show" : ""}`}
              id="project-Components"
            >
              <li>
                <a className="ms-link" href="/projects">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/task">
                  <span>Tasks</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/timesheet">
                  <span>Timesheet</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/team-leader">
                  <span>Leaders</span>
                </a>
              </li>
            </ul>
          </li>

          <li className={isTicketOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isTicketOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setTicketOpen(!isTicketOpen);
              }}
              href="#"
            >
              <i className="icofont-ticket" />
              <span>Tickets</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>

            {/* Menu: Sub menu ul */}
            <ul
              className={`sub-menu collapse ${isTicketOpen ? "show" : ""}`}
              id="tikit-Components"
            >
              <li>
                <a className="ms-link" href="/tickets">
                  <span>Tickets View</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/ticket-detail">
                  <span>Ticket Detail</span>
                </a>
              </li>
            </ul>
          </li>

          <li className={isClientOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isClientOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setClientOpen(!isClientOpen);
              }}
              href="#"
            >
              <i className="icofont-user-male" />
              <span>Our Clients</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>

            {/* Menu: Sub menu ul */}
            <ul
              className={`sub-menu collapse ${isClientOpen ? "show" : ""}`}
              id="client-Components"
            >
              <li>
                <a className="ms-link" href="/clients">
                  <span>Clients</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/client-profile">
                  <span>Client Profile</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Employees */}
          <li className={isEmpOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isEmpOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setEmpOpen(!isEmpOpen);
              }}
              href="#"
            >
              <i className="icofont-users-alt-5" />
              <span>Employees</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isEmpOpen ? "show" : ""}`}
              id="emp-Components"
            >
              <li>
                <a className="ms-link" href="/members">
                  <span>Members</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/members-profile">
                  <span>Members Profile</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/holidays">
                  <span>Holidays</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="attendance-employee.html">
                  <span>Attendance Employees</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/attendance">
                  <span>Attendance</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/leave-request">
                  <span>Leave Request</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/departments">
                  <span>Department</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Accounts */}
          <li className={isAccountsOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isAccountsOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setAccountsOpen(!isAccountsOpen);
              }}
              href="#"
            >
              <i className="icofont-ui-calculator" />
              <span>Accounts</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isAccountsOpen ? "show" : ""}`}
              id="menu-Componentsone"
            >
              <li>
                <a className="ms-link" href="/invoices">
                  <span>Invoices</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/payments">
                  <span>Payments</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/expenses">
                  <span>Expenses</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Payroll */}
          <li className={isPayrollOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isPayrollOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setPayrollOpen(!isPayrollOpen);
              }}
              href="#"
            >
              <i className="icofont-users-alt-5" />
              <span>Payroll</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isPayrollOpen ? "show" : ""}`}
              id="payroll-Components"
            >
              <li>
                <a className="ms-link" href="/employee-salary">
                  <span>Employee Salary</span>
                </a>
              </li>
            </ul>
          </li>

          {/* App */}
          <li className={isAppOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isAppOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setAppOpen(!isAppOpen);
              }}
              href="#"
            >
              <i className="icofont-contrast" />
              <span>App</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isAppOpen ? "show" : ""}`}
              id="app-Components"
            >
              <li>
                <a className="ms-link" href="/calender">
                  <span>Calander</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/chat-app">
                  <span>Chat App</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Other Pages */}
          <li className={isExtraOpen ? "collapsed show" : "collapsed"}>
            <a
              className={`m-link ${isExtraOpen ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setExtraOpen(!isExtraOpen);
              }}
              href="#"
            >
              <i className="icofont-code-alt" />
              <span>Other Pages</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
            </a>
            <ul
              className={`sub-menu collapse ${isExtraOpen ? "show" : ""}`}
              id="extra-Components"
            >
              <li>
                <a className="ms-link" href="/apex-charts">
                  <span>Apex Charts</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/forms-example">
                  <span>Forms Example</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/table-example">
                  <span>Table Example</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/review-page">
                  <span>Reviews Page</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/icons">
                  <span>Icons</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/contacts">
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/widgets">
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/todo">
                  <span>Todo-List</span>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="m-link" href="ui-elements/ui-alerts.html">
              <i className="icofont-paint" /> <span>UI Components</span>
            </a>
          </li>
        </ul>
        {/* Theme: Switch Theme */}
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-switch"
              />
              <label className="form-check-label" htmlFor="theme-switch">
                Enable Dark Mode!
              </label>
            </div>
          </li>
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-rtl">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-rtl"
              />
              <label className="form-check-label" htmlFor="theme-rtl">
                Enable RTL Mode!
              </label>
            </div>
          </li>
        </ul>
        {/* Menu: menu collepce btn */}
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
        >
          <span className="ms-2">
            <i className="icofont-bubble-right" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
