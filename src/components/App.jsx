import React, { useState } from "react";

function App() {

const [time , currentTime] = useState(new Date().toLocaleTimeString());

function updateTime(){
  currentTime(new Date().toLocaleTimeString());
}

setInterval(updateTime,1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      
    </div>
  );
}

export default App;
