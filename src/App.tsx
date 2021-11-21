import React, { useState, useEffect } from "react";
import "./App.css";
import { Counters, SingleCounter } from "./Components/Counters";
import { DataManager } from "./Components/DataManager";
import { Loading } from "./Components/Loading";
import { Navbar } from "./Components/Navbar";
import data from "./data/data.json";

const getNames = (data: SingleCounter[]) => {
  return data.map((name) => name.name);
};

const getLocalStorage = () => {
  const temp = JSON.parse(localStorage.getItem("data") || "{}");

  if (JSON.stringify(temp) === "[]") {
    localStorage.setItem("data", JSON.stringify(data));

    return data;
  }

  return temp;
};

function App() {
  const [counters, setCounters] = useState(data);
  const [names, setNames] = useState([""]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const removeCounter = (id: string) => {
    const newCounters = counters.filter((c: SingleCounter) => c.id !== id);
    localStorage.setItem("data", JSON.stringify(newCounters));
    setCounters(getLocalStorage());
    setNames(getNames(getLocalStorage()));
  };

  const addCounter = (newCounter: SingleCounter) => {
    const newCounters = counters;
    newCounters.push(newCounter);
    localStorage.setItem("data", JSON.stringify(newCounters));
    setNames(getNames(getLocalStorage()));
  };

  useEffect(() => {
    setNames(getNames(getLocalStorage()));
    setCounters(getLocalStorage());
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
      <DataManager
        addCounter={addCounter}
        counters={counters || []}
        removeCounter={removeCounter}
      />
    </main>
  );
}

export default App;
