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
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
