import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const TOKEN = 'chat-messenger-token';

export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState('');

  const useToken = async () => {
    
    setLoading(l => ({...l, user: true}));

    try {
      setToken(TOKEN);

    } catch (err) {
      setErrors(e => ({ ...e, user: String(err) }));
      setLoading(l => ({ ...l, user: false }));
    }
    setLoading(l => ({ ...l, user: false }));
  }

  return <UserContext.Provider value={{
    loading,
    errors,
    token,
    useToken
  }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw Error("useUserContext must be in UserContextProvider");
    }

    return context;
};