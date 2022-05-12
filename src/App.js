import React, { useState } from "react";
import Img from "./list.png";

const App = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState(["Dummy data #1", "Dummy data #2"]);

  const SubmitEvent = (e) => {
    e.preventDefault();
    setList([data, ...list]);
    setData("");
  };

  const removeListData = (id) => {
    const updatedList = list.filter((val, index) => {
      return id !== index;
    });
    setList(updatedList);
  };

  return (
    <>
      <div id="todoList">
        <img src={Img} alt="list" className="img-fluid listImg" />
        <div className="listTitle">Add Your Task Here...&#129312; </div>
        <form onSubmit={SubmitEvent}>
          <div className="inputArea">
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              placeholder="Add your task here"
              required
            />
            <button type="submit">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </form>

        {/* ToDo list */}
        {list.map((val, index) => {
          return (
            <div className="listItem" key={index}>
              <span> {val}</span>
              <i
                class="fa-solid fa-trash-can"
                onClick={() => removeListData(index)}
              ></i>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
