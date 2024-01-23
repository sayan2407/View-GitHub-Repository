
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [repository, setRepository] = useState(null);
  
    return (
      <AppContext.Provider
        value={{
          userName,
          setUserName,
          repositories,
          setRepositories,
          repository,
          setRepository,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };

  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };