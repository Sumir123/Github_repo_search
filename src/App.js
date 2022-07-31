import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./conponents/searchBar";
import RepoDetails from "./conponents/repoDetails";
import NavBar from "./conponents/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="search" element={<SearchBar />}>
            <Route path=":value"></Route>
          </Route>
          <Route path="/repo" element={<RepoDetails />}>
            <Route path=":username/:reponame" element={<RepoDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
