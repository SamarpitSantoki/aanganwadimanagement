import "../App.css";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import UserList from "../components/UserList/UserList";
function AdminStaffPage() {
  //   const [count, setCount] = useState(0)

  return (
    <div className="container mt-5">
      <UserList heading={"Admin Staff"} />
    </div>
  );
}

export default AdminStaffPage;
