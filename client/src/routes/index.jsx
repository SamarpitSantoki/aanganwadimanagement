import { Outlet,Route,Routes } from "react-router-dom";
import AanganwadiList from "../components/AanganwadiList/AanganwadiList";
import AanganwadiPage from "../components/AanganwadiPage/AanganwadiPage";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import AdminStaffPage from "../pages/AdminStaffPage";

import Login from "../pages/Login";
import WorkerPage from "../pages/WorkerPage";
function index() {
  return (
    <div>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/adminstaff"
          element={<AdminStaffPage heading={"Admin Staff"} />}
        />
        <Route path="/worker" element={<WorkerPage heading={"Workers"} />} />
        <Route path="/aanganwadi" element={<AanganwadiList />} />
        <Route path='/wadi/:id' element={<AanganwadiPage /> } />
      </Routes>
    </div>
  );
}
export default index;
