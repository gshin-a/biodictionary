import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";

// 저작권자 표시하기!!

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
