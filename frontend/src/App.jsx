import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.log("Error fetching message", error);
        setMessage("Unable to load message");
      });
  }, []);

  return (
    <div>
      <h1>Message from Backend</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
