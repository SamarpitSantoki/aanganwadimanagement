import { Outlet, Route, Routes } from "react-router-dom";
import AanganwadiList from "../components/AanganwadiList/AanganwadiList";
import AanganwadiPage from "../components/AanganwadiPage/AanganwadiPage";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import AdminStaffPage from "../pages/AdminStaffPage";
import Login from "../pages/Login";
import ResourceReqPage from "../pages/ResourceRequest";
import StockShowPage from "../pages/StockShowPage";
import WorkerPage from "../pages/WorkerPage";
import { useSelector } from "react-redux";
import { getLoginState } from "../store/slices/authSlice";

function index() {
  const user = useSelector(getLoginState);

  return (
    <div>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {user?.token && (
          <>
            {user.role === "admin" && (
              <Route
                path="/adminstaff"
                element={<AdminStaffPage heading={"Admin Staff"} />}
              />
            )}
            {(user.role === "admin" || user.role === "zonal") && (
              <>
                <Route
                  path="/worker"
                  element={<WorkerPage heading={"Workers"} />}
                />
                <Route path="/aanganwadi" element={<AanganwadiList />} />
              </>
            )}
            {user.role === "worker" && (
              <Route path="/stock" element={<StockShowPage />} />
            )}
            <Route path="/wadi/:id" element={<AanganwadiPage />} />
            <Route path="/requests" element={<ResourceReqPage />} />
          </>
        )}
      </Routes>
    </div>
  );
}
export default index;
