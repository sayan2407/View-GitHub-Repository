import axios from "axios";
import { useContext, useState } from "react";
import "./SearchForm.css";
import { useAppContext } from "../../context/AppProvider";
import config from "../../config/config";
import RepoList from "../Repositories/RepoList";

const SearchForm = () => {
  const inputPlaceholder = "Enter a github username";
  const { userName, setUserName, setRepositories } = useAppContext();
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${config.apiUrl}/users/${userName}/repos`
      );
      console.log(response.data);
      setRepositories(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found");
      } else {
        console.error("An error occurred:", error.message);
      }
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
