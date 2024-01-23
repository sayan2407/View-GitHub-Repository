import axios from "axios";
import "./SearchForm.css";
import { useAppContext } from "../../context/AppProvider";
import config from "../../config/config";
import RepoList from "../Repositories/RepoList";

const SearchForm = () => {
  const inputPlaceholder = "Enter a github username";
  const { userName, setUserName, setRepositories } = useAppContext();
  const handleSearch = async () => {
    try {
        console.log('userName ', userName);
      const response = await axios.get(
        `${config.apiUrl}/users/${userName}/repos`
      );
      console.log(response.data);
      setRepositories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-form">
        <h2> Repository Searching System</h2>
        <p>Enter username to search repository</p>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        plceholder={inputPlaceholder}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
      <RepoList />
    </div>
  );
};

export default SearchForm;
