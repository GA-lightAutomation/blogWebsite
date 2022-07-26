import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Docs from "./components/Pages/Docs";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/docs"} element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
