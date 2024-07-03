import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../../lib/appwrite";




const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)




const GlobalProvider = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
    .then((res) => {
      if(res){
        setIsLoggedIn(true)
        setUser(res)
      }else{
        setIsLoggedIn(false)
        setUser(null)
      }
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, []);

  return(
    <GlobalContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      isLoading, 
      setIsLoading,
      user,
      setUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;