import { useState, useEffect } from "react";
// import logo from './logo.svg'
import "./App.css";
import { Stop_watch } from "./components/googlestop";

function App() {
  const [sec, setSec] = useState(55);

  const [min, setMin] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // console.log(id)
      setSec((p) => {
        if (p <= 59) {
          if (p >= 59) {
            clearInterval(id);
            setMin((v) => {
              return min + 1;
            });
          } else if (min === 5) {
            clearInterval(id);
            return 0;
          }
          if (p == 59) {
            return 0;
          }
          return p + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [sec, min]);

  return (
    <div className="App">
      <h1 className="minutes">Min :  {min % 60}    Sec : {sec}</h1>
     
    </div>
  );
}

export default App;
