import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Forecast from "./Pages/Forecast/Forecast";
import Search from "./Pages/Search/Search";
import Details from "./Pages/Details/Details";
import Historical from "./Pages/Historical/Historical";
import NotFound from "./Components/NotFound/NotFound";
import RootLayout from "./Layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path="/historical" element={<Historical />} />
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
