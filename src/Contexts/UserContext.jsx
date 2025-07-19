import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function signup(user) {
    setUser(user);
  }

  <UserContext.Provider value={{ user, signup }}>
    {children}
  </UserContext.Provider>;
}

export function useUser() {
  const value = useContext(UserContext);

  return value;
}
