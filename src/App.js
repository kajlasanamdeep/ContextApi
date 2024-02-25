import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import UserContext from "./context";
import './App.css'
import Stepper from "./components/Stepper/Stepper";
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
import Details from "./components/Details/Details";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword: '',
    password: ""
  });
  useEffect(() => {
    console.log(userData, "user details");
  }, [userData])
  return (
    <UserContext.Provider value={{
      currentStep,
      setCurrentStep,
      userData,
      setUserData
    }}>
      <div className="App">
        <Stepper />
        <Form1 />
        <Form2 />
        <Details />
      </div>
    </UserContext.Provider>
  );
}