import React from "react";

import { UserContextProvider } from "./User";

const Contexts = ({ children }) => {
  return( 
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
};

export default Contexts;
