import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Help from "./pages/Help";
import ProjectDashboard from "./pages/project-dashboard";
import Projects from "./pages/projects";
import Task from "./pages/task";
import Timesheet from "./pages/timesheet";
import TeamLeader from "./pages/team-leader";
import Tickets from "./pages/tickets";
import TicketDetail from "./pages/ticket-detail";
import Clients from "./pages/clients";
import ClientProfile from "./pages/client-profile";
import Members from "./pages/members";
import MembersProfile from "./pages/members-profile";
import Holidays from "./pages/holidays";
import AttendanceEmployee from "./pages/attendace-employee";
import Attendance from "./pages/attendace";
import LeaveRequest from "./pages/leave-request";
import Departments from "./pages/departments";
import Invoices from "./pages/invoices";
import Payments from "./pages/payments";
import Expenses from "./pages/expences";
import EmployeeSalary from "./pages/employee-salary";
import Calender from "./pages/calender";
import ChatApp from "./pages/chat-app";
import Icons from "./pages/icons";
import Contacts from "./pages/contacts";
import ReviewPage from "./pages/review-page";
import TableExample from "./pages/table-example";
import FormsExample from "./pages/forms-example";
import ApexCharts from "./pages/apex-charts";
import Widgets from "./pages/widgets";
import Todo from "./pages/to-do";

const Layout = () => {
  return (
    <div id="mytask-layout" className="theme-indigo">
      <NavBar />
      <Sidebar />
      <div className="main px-4 py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/project-dashboard" element={<ProjectDashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/task" element={<Task />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/team-leader" element={<TeamLeader />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ticket-detail" element={<TicketDetail />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client-profile" element={<ClientProfile />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members-profile" element={<MembersProfile />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/attendance-employee" element={<AttendanceEmployee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/employee-salary" element={<EmployeeSalary />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/chat-app" element={<ChatApp />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/review-page" element={<ReviewPage />} />
          <Route path="/table-example" element={<TableExample />} />
          <Route path="/forms-example" element={<FormsExample />} />
          <Route path="/apex-charts" element={<ApexCharts />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/todo" element={<Todo />} />

          
          {/* Add more routes as needed */}

        </Routes>
      </div>
    </div>
  );
};

export default Layout;
