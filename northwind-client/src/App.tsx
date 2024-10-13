import { useState } from "react";
import "./App.css";
import CustomerPage from "./components/customersPage";
import EmployeesPage from "./components/employeesPage";

function App() {
  const [url, setUrl] = useState("");
  function imageLoad(e: any) {
    if (!e.target.value) return;
    setUrl(e.target.value);
  }

  return (
    <>
      <div>
        <CustomerPage />
        <EmployeesPage />

        <input onChange={imageLoad} />
        <img src={url} alt="" height={300} width={300} />
      </div>
    </>
  );
}

export default App;
