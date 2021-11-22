import React, { useState } from "react";
import "../Styles/DataOverlay.css";
import { SingleCounter } from "./Counters";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiAlarmAdd } from "react-icons/bi";

interface DataOverlayProps {
  counters: SingleCounter[];
  removeCounter: (id: string) => void;
  addCounter: (counter: SingleCounter) => void;
}

const convertDate = (date: string) => {
  const d = Date.parse(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const joined = `${mo} ${da}, ${ye}`;

  return joined;
};

export const DataOverlay: React.FC<DataOverlayProps> = ({
  counters,
  removeCounter,
  addCounter,
}) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [name, setName] = useState("Example");
  const [date, setDate] = useState("Dec 5, 2025");
  const [time, setTime] = useState("12:00:00");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name === "") {
      setName("Example");
    }
    const newTimer = {
      id: `${counters.length}`,
      name: `${name}`,
      dueDate: `${convertDate(date)}`,
      dueTime: `${time}`,
    };
    setIsOverlay(false);
    addCounter(newTimer);
  };

  return (
    <div className="overlay">
      <h1 style={{ textAlign: "center" }}>Yours countodwns:</h1>
      <div className="center-overlay counterer">
        {counters.map((counter) => {
          return (
            <div key={counter.id} className="single-counter">
              <h4>{counter.name}</h4>
              <button
                key={counter.id}
                className="btn-add"
                onClick={() => removeCounter(counter.id)}>
                <AiFillDelete className="btn-delete" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="btn-add-container">
        <button className="btn-add" onClick={() => setIsOverlay(!isOverlay)}>
          <BsFillPlusCircleFill className="add" />
        </button>
      </div>
      {isOverlay && (
        <div className="overlay">
          <form className="center-overlay inputs" onSubmit={handleSubmit}>
            <h1>Add your countdown:</h1>
            <div className="input-txt">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                maxLength={25}
                autoFocus
              />
            </div>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <input type="time" onChange={(e) => setTime(e.target.value)} />
            <div className="add-container">
              <button type="submit" className="btn-add">
                <BiAlarmAdd className="add" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
