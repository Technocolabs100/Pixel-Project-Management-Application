import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/my-task.style.min.css";

export default function ApexCharts() {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
          <h3 className="fw-bold mb-0">Charts</h3>
        </div>
      </div>
    </div>{" "}
    {/* Row end  */}
    <div className="row clearfix mb-3">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="row gx-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark-chart1" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark-chart2" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark-chart3" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark-chart4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Circle Chart</h6>
              </div>
              <div className="card-body">
                <div id="apex-circle-chart" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Circle Chart Multiple</h6>
              </div>
              <div className="card-body">
                <div id="apex-circle-chart-multiple" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Circle Gradient</h6>
              </div>
              <div className="card-body">
                <div id="apex-circle-gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic Line Column</h6>
          </div>
          <div className="card-body">
            <div id="apex-chart-line-column" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Simple Bubble</h6>
          </div>
          <div className="card-body">
            <div id="apex-simple-bubble" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Area Datetime</h6>
          </div>
          <div className="card-body">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="one_month"
              >
                1M
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="six_months"
              >
                6M
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary active"
                id="one_year"
              >
                1Y
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="ytd"
              >
                YTD
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="all"
              >
                ALL
              </button>
            </div>
            <div id="apex-timeline-chart" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Stacked Area</h6>
          </div>
          <div className="card-body">
            <div id="apex-stacked-area" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic Column</h6>
          </div>
          <div className="card-body">
            <div id="apex-basic-column" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic Heatmap Chart</h6>
          </div>
          <div className="card-body">
            <div id="apex-basic-heatmap" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic Scatter Chart</h6>
          </div>
          <div className="card-body">
            <div id="apex-basic-scatter" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Timeline</h6>
          </div>
          <div className="card-body">
            <div id="apex-timeline" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic Bar</h6>
          </div>
          <div className="card-body">
            <div id="apex-basic-bar" />
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Basic CandleStick</h6>
          </div>
          <div className="card-body">
            <div id="apex-CandleStick" />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark1" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark2" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <div id="apexspark3" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Basic Radar</h6>
              </div>
              <div className="card-body">
                <div id="apex-basic-radar" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Radar Multiple Series</h6>
              </div>
              <div className="card-body">
                <div id="apex-radar-multiple-series" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Radar with Polygon Fill</h6>
              </div>
              <div className="card-body">
                <div id="apex-radar-polygon-fill" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Simple Donut</h6>
              </div>
              <div className="card-body">
                <div id="apex-simple-donut" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Stroked Gauge</h6>
              </div>
              <div className="card-body">
                <div id="apex-stroked-gauge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}