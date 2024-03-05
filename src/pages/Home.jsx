import { Link } from "react-router-dom";
import logo from "../assets/mtn-logo.svg";
const Home = () => {
  return (
    <>
    <nav className="bg-primary">
      <div className="container mx-auto flex justify-between items-center py-[14px] text-white">
        <Link to="/">
          <img src={logo} alt="mtn" className="w-[76px]" />
        </Link>
        <ul className="flex gap-10">
          <li>
            <a href="/get-token">Login</a>
          </li>
          <li>
            <a href="/invoke-payment">Payment</a>
          </li>
        </ul>
      </div>
    </nav>
    <h1 className="text-primary text-center text-[48px] pt-10">HOMEPAGE</h1>
  </>
    );
};

export default Home;
