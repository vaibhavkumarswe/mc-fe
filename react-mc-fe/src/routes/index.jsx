import { Route, Routes } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Toast from "../components/Toast";
import OTP from "../components/OTP";
import Stepper from "../components/Stepper/index";
import Pagination from "../components/Pagination/index";
import { menuItems } from "../data/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/toasts" element={<Toast />} />
      {menuItems.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
}
