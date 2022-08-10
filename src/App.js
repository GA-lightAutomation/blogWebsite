import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Docs from "./components/Pages/Docs";
import Navbar from "./components/Navbar/Navbar";
import {ThemeProvider} from "@mui/material";
import {appTheme}  from "./Theme/theme";
import Blogs from "./components/Pages/Blogs";
import Light from "./components/Pages/Light";
import Login from "./components/Pages/Login"; 
import Lightproject from './components/Pages/Lightproject'; 
import Doorproject from './components/Pages/Doorproject';

function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/docs"} element={<Docs />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/light"} element={<Light />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/lightproject"} element={<Lightproject/>} />
          <Route path={"/doorproject"} element={<Doorproject />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
