import React from "react";
import { useState, useEffect } from "react";

function Stop_watch({ start = 0, end = 60 }) {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const id = setInterval((p) => {
      setTimer((p) => {
        if (p === end) {
          clearInterval(id);
          return p;
        } else {
          return p + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1>
        Start:{start}-end:{end}
      </h1>
      <br />
      Timer:{timer}
    </div>
  );
}
export { Stop_watch };
