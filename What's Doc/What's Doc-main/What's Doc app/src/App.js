import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AppointmentList from "./components/AppointmentList";
import Coming from "./components/Coming";
import FileUpload from "./components/FileUpload";
import Prescription from "./components/Prescription";
import ReviewRating from "./components/ReviewRating";
// import { createBrowserHistory } from "history";


function App() {
  // const history = createBrowserHistory();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/appointmentlist" element={<AppointmentList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coming" element={<Coming />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/reviewrating" element={<ReviewRating />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
