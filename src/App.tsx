import React, { useState, useEffect } from "react";
import "./App.css";
import { Counters, SingleCounter } from "./Components/Counters";
import { Loading } from "./Components/Loading";
import { Navbar } from "./Components/Navbar";
import data from "./data/data.json";

const getNames = (data: SingleCounter[]) => {
  return data.map((name) => name.name);
};

function App() {
  const dataCache = JSON.parse(localStorage.getItem("data") || "{}");
  if (JSON.stringify(dataCache) === "{}") {
    localStorage.setItem("data", JSON.stringify(data));
  }
  const [counters, setCounters] = useState(dataCache);
  const [names, setNames] = useState([""]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNames(getNames(dataCache));
    setCounters(dataCache);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <main>
      <main className={`load ${!isLoading && "loaded"}`}>
        <Loading />
      </main>
      <Navbar names={names} setIndex={setIndex} current={index} />
      <Counters counters={counters || []} index={index} />
    </main>
  );
}

export default App;
