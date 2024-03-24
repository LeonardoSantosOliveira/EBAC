import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  

  return (
    <>
      {loading ? (
      <>
      <div className="center">
        <div className="loader"></div>
      </div>
      </>) : (
    <>
    <Titulo  />
      <div className="container">
        <Formulario/>
      </div>
    </>
      )}
    </>
  )
}

export default App
