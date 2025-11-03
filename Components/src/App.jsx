import React from "react";
import Card from "./components/card";
import ReactCard from "./components/ReactCard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        {Card()}
        {Card()}
        {Card()}
        <Card />
        <Card />
        <Card />
        <ReactCard />
        <ReactCard />
        <ReactCard />
      </div>
    </div>
  );
};

export default App;
