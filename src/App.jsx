import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoke-payment" element={<Payment />} />
      <Route path="/get-token" element={<Login />} />
    </Routes>
  );
}

export default App;
