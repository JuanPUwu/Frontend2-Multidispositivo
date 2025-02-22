import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./pages/first/first";
import Second from "./pages/second/second";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </Router>
  );
}
