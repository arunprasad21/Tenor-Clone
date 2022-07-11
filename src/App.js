import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homePage";
import Searchpage from "./pages/searchPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + '/'} element={<Homepage />} />
        <Route exact path="/searchpage" element={<Searchpage />} />
      </Routes>
    </div>
  );
}

export default App;
