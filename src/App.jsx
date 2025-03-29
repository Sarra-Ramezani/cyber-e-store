// import { useState } from "react";
import Home from "./pages/Home.jsx";
import "./App.css";
import Products from "./pages/Products.jsx";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-full items-center">
      <Home /> <Products />
    </div>
  );
}

export default App;
