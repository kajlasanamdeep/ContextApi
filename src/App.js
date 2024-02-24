import { useState } from "react";
import UserContext from "./context";
import Component1 from "./components/component1";
import Component2 from "./components/component2";


export default function App() {
  const [email, setEmail] = useState("email");
  const [userName, setUserName] = useState("abcd");

  return (<>
    <UserContext.Provider value={{
      email,
      userName,
      setEmail,
      setUserName
    }}>
      <Component1 />
      <Component2 />
    </UserContext.Provider>
  </>
  );
}