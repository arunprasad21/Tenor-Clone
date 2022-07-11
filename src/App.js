import { Routes,HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homePage";
import Searchpage from "./pages/searchPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/searchpage" element={<Searchpage />} />
      </HashRouter>
    </div>
  );
}

export default App;
