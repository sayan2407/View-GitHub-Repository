import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import SearchForm from './Components/SearchForm/SearchForm';
import Footer from './Components/Footer/Footer';
import { AppProvider } from './context/AppProvider';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <AppProvider>
        <SearchForm/>
        {/* <RepoList/> */}

      </AppProvider>
      <Footer/>
    </div>
  );
}

export default App;
