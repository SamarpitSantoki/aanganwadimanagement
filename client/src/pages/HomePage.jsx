import "../App.css";
import Header from "../components/Header/Header";
import Nav from "../components/Header/Nav";
import Login from "../components/Login/Login";

function HomePage() {
  //   const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Header />
      <Login />
    </div>
  );
}

export default HomePage;
