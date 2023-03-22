import React, { createContext, useContext, useState } from "react";
const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export default function LoginProvider(props) {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedin, setLoggedin }}>
      {props.children}
    </LoginContext.Provider>
  );
}
