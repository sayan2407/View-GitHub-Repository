import "./Repo.css";

const Repo = ({repo}) => {
  return (
    <div className="repo-card">
        <div className="repo-img">
            <img src={repo.owner.avatar_url} width="50px" height="50px"/>
        </div>
        <div className="repo-details">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
        </div>
    </div>
  )
}

export default Repo