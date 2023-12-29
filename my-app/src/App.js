// import react from 'react';
import Home from './Component/Admin/home';
import UserHome from './Component/User/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './Component/User/Layout';
import SignUp from './Component/common/Signup';
import LoginForm from './Component/common/Login';
import TaskTracker from "./Component/common/Hours/TaskTracker";
import Dashboard from "./Component/dashboard";

function App() {
  return (
    <div>
       <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#1f3c56"}}>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/tasktracker">Hours/Task Tracker</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Report</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/home">Report</a>
                    </li>
                    <li class="nav-item" style={{position: "absolute", right: "70px"}}>
                        <a class="nav-link" href="/Signup">Signup</a>
                    </li>
                    <li class="nav-item" style={{position: "absolute", right: "20px"}} >
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                </ul>
            </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasktracker" element={<TaskTracker />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/user/home" element={<UserHome/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App; 