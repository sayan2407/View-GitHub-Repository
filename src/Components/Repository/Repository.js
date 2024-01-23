import { useAppContext } from "../../context/AppProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config/config";
import "./Repository.css";
import { Link } from "react-router-dom";
const Repository = () => {
  const { setRepository, repository } = useAppContext();
  const { repoName } = useParams();
  const { userName } = useParams();

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const url = `${config.apiUrl}/repos/${userName}/${repoName}`;
        console.log("url ", url);
        const response = await axios.get(url);
        console.log("repo_details ", response.data);
        setRepository(response.data);
      } catch (error) {
        console.log("Error!!");
      }
    };

    fetchRepoDetails();
  }, [userName, repoName]);

  return (
    <div>
      {repository !== null ? (
        <div className="repository-details">
          <div>
            <img className="owner" src={repository.owner.avatar_url} alt="owner" width={100} />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img  src="/assets/icons/circle-check-regular.svg" width={20} alt="correct"/>
             <p><i>verified by GitHub</i></p>

            </div>
            <p style={{color: 'blue'}}>{repository.visibility ? "It's a Public Repository" : "It's a Private Repository"}</p>
          </div>
          <div>
            <h2>{repository.name}</h2>
            <p> Language used <span style={{color: 'red'}}>{repository.language}</span></p>
            <p>{(repository.description ? repository.description : "No Description available")}</p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <Link style={{color: 'blue'}} to="/">Go To Home Page</Link>
    </div>
  );
  
};

export default Repository;
