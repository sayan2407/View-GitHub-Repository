
import  axios  from "axios";
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
            const response = await axios.get(`${config.apiUrl}/users/${userName}/repos`);
            console.log(response.data);
            setRepositories(response.data);
            
        } catch (error) {

        }
    }

  return (
    <div className="search-form">
        <input onChange={(e)=>setUserName(e.target.value)} value={userName}  type="text" plceholder={inputPlaceholder} />
        <button onClick={handleSearch}>Search</button>
        <RepoList/>
        
    </div>
  )
}

export default SearchForm