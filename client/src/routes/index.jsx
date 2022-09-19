import { Outlet,Route,Routes } from "react-router-dom";
import AanganwadiList from "../components/AanganwadiList/AanganwadiList";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
function index() {
    return (
        <div>
            <Nav />
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/aanganwadis" element={<AanganwadiList />} />
            </Routes>
        </div>
    );
}
export default index;
