import React, { useState } from "react";
import { BiTable } from "react-icons/bi";
import "../Styles/DataManager.css";
import { DataOverlay } from "./DataOverlay";
import { SingleCounter } from "./Counters";

interface DataManagerProps {
  counters: SingleCounter[];
  removeCounter: (id: string) => void;
  addCounter: (counter: SingleCounter) => void;
}

export const DataManager: React.FC<DataManagerProps> = ({
  counters,
  removeCounter,
  addCounter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="btn-add-container">
      <button className="btn-add" onClick={() => setIsOpen(!isOpen)}>
        <BiTable className="add" />
      </button>
      {isOpen ? (
        <DataOverlay
          addCounter={addCounter}
          removeCounter={removeCounter}
          counters={counters || []}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
