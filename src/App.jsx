import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import Trade from "./components/trade/Trade";
import ErrorPage from "./components/errorpage/ErrorPage";
import UserPage from "./components/userpage/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
