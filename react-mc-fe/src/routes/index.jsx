import { Route, Routes } from "react-router-dom";
import Main from "../layout/Main";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Toast from '../components/Toast';
import OTP from '../components/OTP';
import Stepper from '../components/Stepper/index';
import Pagination from '../components/Pagination/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/toasts" element={<Toast />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/stepper" element={<Stepper />} />
      <Route path ="/pagination" element={<Pagination />} />
    </Routes>
  );
}
