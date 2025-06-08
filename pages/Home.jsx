import React from 'react'
import '../assets/css/my-task.style.min.css'


import interviewLogo from  '../assets/images/interview.svg'
import TopPerformers from '../components/TopPerformers';
import UpcomingInterviews from '../components/UpcomingInterviews';
import EmployeesAvalibility from '../components/EmployeesAvalibility';

const Home = () => {
  return (
    <div className="body d-flex py-3">
      <div className="container-xxl">
        <div className="row clearfix g-3">
          <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
            <div className="row g-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Employees Info</h6>
                  </div>
                  <div className="card-body">
                    <div
                      className="ac-line-transparent"
                      id="apex-emplyoeeAnalytics"
                    />
                  </div>
                </div>
              </div>
              <EmployeesAvalibility />
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Total Employees</h6>
                    <h4 className="mb-0 fw-bold ">423</h4>
                  </div>
                  <div className="card-body">
                    <div className="mt-3" id="apex-MainCategories" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Top Hiring Sources</h6>
                  </div>
                  <div className="card-body">
                    <div id="hiringsources" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12">
            <div className="row g-3 row-deck">
              <div className="col-md-6 col-lg-6 col-xl-12">
                <div className="card bg-primary">
                  <div className="card-body row">
                    <div className="col">
                      <span className="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center">
                        <i className="icofont-file-text fs-5" />
                      </span>
                      <h1 className="mt-3 mb-0 fw-bold text-white">1546</h1>
                      <span className="text-white">Applications</span>
                    </div>
                    <div className="col">
                      <img
                        className="img-fluid"
                        src={interviewLogo}
                        alt="interview"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-12  flex-column">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center flex-fill">
                      <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                        <i className="icofont-users-alt-2 fs-5" />
                      </span>
                      <div className="d-flex flex-column ps-3  flex-fill">
                        <h6 className="fw-bold mb-0 fs-4">246</h6>
                        <span className="text-muted">Interviews</span>
                      </div>
                      <i className="icofont-chart-bar-graph fs-3 text-muted" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center flex-fill">
                      <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                        <i className="icofont-holding-hands fs-5" />
                      </span>
                      <div className="d-flex flex-column ps-3 flex-fill">
                        <h6 className="fw-bold mb-0 fs-4">101</h6>
                        <span className="text-muted">Hired</span>
                      </div>
                      <i className="icofont-chart-line fs-3 text-muted" />
                    </div>
                  </div>
                </div>
              </div>
              <UpcomingInterviews />
            </div>
          </div>
          <TopPerformers />
        </div>
      </div>
    </div>
  );
}

export default Home