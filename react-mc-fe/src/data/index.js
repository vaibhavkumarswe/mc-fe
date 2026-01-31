import Toast from "../components/Toast/index";
import OTP from "../components/OTP/index";
import Stepper from "../components/Stepper/index";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import VirtualisedList from "../components/Virtualised-List/index";
import StartRating from "../components/StarRating/index";
import SearchBar from "../components/SearchBar/index";
import InfiniteScroll from "../components/InfiniteScroll/index";
import ProgressBar from "../components/ProgressBar/index";
import Accordion from "../components/Accordion";
import Stopwatch from "../components/Stopwatch";
import FileExplorer from "../components/FileExplorer/index";
import InteractiveShape from "../components/InteractiveShape/index";
import TicTacToe from "../components/TicTacToe/index";
import SnakeGame from "../components/SnakeGame/index";
import Tabs from "../components/Tabs";

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
    label: "Virtualized List",
    description: "This is a Virtualized List Component",
    path: "/virtualized-list",
    component: <VirtualisedList />,
  },
  {
    label: "Start Rating",
    description: "This is a Star Rating Component",
    path: "/star-rating",
    component: <StartRating />,
  },
  {
    label: "Search Bar",
    description: "This is a Search Bar Component",
    path: "/search-bar",
    component: <SearchBar />,
  },
  {
    label: "Infinite Scroll",
    description: "This is an Infinite Scroll Component",
    path: "/infinite-scroll",
    component: <InfiniteScroll />,
  },
  {
    label: "Progress Bar",
    description: "This is a Progress Bar Component",
    path: "/progress-bar",
    component: <ProgressBar />,
  },
  {
    label: "Accordion",
    description: "This is an Accordion Component",
    path: "/accordion",
    component: <Accordion />,
  },
  {
    label: "Stop Watch",
    description: "This is a Stop Watch Component",
    path: "/stop-watch",
    component: <Stopwatch />,
  },
  {
    label: "File Explorer",
    description: "This is a File Explorer Component",
    path: "/file-explorer",
    component: <FileExplorer />,
  },
  {
    label: "Interactive Shape",
    description: "This is an Interactive Shape Component",
    path: "/interactive-shape",
    component: <InteractiveShape />,
  },
  {
    label: "Tic Tac Toe",
    description: "This is a Tic Tac Toe Component",
    path: "/tic-tac-toe",
    component: <TicTacToe />,
  },
  {
    label: "Snake Game",
    description: "This is a Snake Game Component",
    path: "/snake-game",
    component: <SnakeGame />,
  },
  {
    label: "Tabs",
    description: "This is a Tabs Component",
    path: "/tabs",
    component: <Tabs />,
  },
];
