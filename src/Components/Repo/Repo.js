import "./Repo.css";
import {Link} from 'react-router-dom';

const Repo = ({ repo }) => {
  return (
    <Link className="repo-card" to={`/repository/${repo.owner.login}/${repo.name}`}>
      {/* <div > */}
        <div className="repo-img">
          <img src={repo.owner.avatar_url} width="50px" height="50px" />
        </div>
        <div className="repo-details">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      {/* </div> */}
    </Link>
  );
};

export default Repo;
