import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/index";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Main content would go here */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
