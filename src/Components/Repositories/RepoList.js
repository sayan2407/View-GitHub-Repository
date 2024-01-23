

import { useAppContext } from '../../context/AppProvider'
import Repo from '../Repo/Repo';
import "./repoList.css"

const RepoList = () => {

  const { repositories  } = useAppContext();
  console.log('repositories ', repositories);

  return (
    <div className='repo-list'>
      {
        repositories.map(repo=>{
          return <Repo repo={repo}/>
        })
      }

    </div>
  )
}

export default RepoList