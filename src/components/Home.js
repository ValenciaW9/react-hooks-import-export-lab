import React from "react";
import username from "./username"
import city from "./cityy"


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export default Home;
