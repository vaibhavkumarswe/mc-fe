import Toast from "../components/Toast/index";
import OTP from "../components/OTP/index";
import Stepper from "../components/Stepper/index";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import VirtualisedList from '../components/Virtualised-List/index';

export const menuItems = [
  {
    label: "Toasts",
    description: "This is a Toast Component",
    path: "/toasts",
    component: <Toast />,
  },
  {
    label: "OTP",
    description: "This is an OTP Component",
    path: "/otp",
    component: <OTP />,
  },
  {
    label: "Stepper",
    description: "This is a Stepper Component",
    path: "/stepper",
    component: <Stepper />,
  },
  {
    label: "Pagination",
    description: "This is a Pagination Component",
    path: "/pagination",
    component: <Pagination />,
  },
  {
    label: "Carousel",
    description: "This is a Carousel Component",
    path: "/carousel",
    component: <Carousel />,
  },
  {
    label: 'Virtualized List',
    description: 'This is a Virtualized List Component',
    path: '/virtualized-list',
    component: <VirtualisedList />,
  }
];
