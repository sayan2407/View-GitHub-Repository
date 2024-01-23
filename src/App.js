import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import SearchForm from "./Components/SearchForm/SearchForm";
import Footer from "./Components/Footer/Footer";
import { AppProvider } from "./context/AppProvider";
import {Routes, Route} from "react-router-dom";
import Repository from "./Components/Repository/Repository";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Topbar />
      <AppProvider>
        <Routes>
          <Route path="/" element={<SearchForm />}></Route>
          <Route path="/repository/:userName/:repoName" element={<Repository/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </AppProvider>
      <Footer />
    </div>
  );
}

export default App;
