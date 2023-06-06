import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    //   setListData([...listData,activity])
    //   console.log(listData)
    setListData(() => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
  };

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="conatiner">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={addActivity}> ADD </button>
        <p className="List-heading ">Here is your list :{")"}</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listdata">{data}</div>
                  <div className="btn-position">
                    {" "}
                    <button onClick={() => removeActivity(i)}>
                      {" "}
                      Remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}> Remove all</button>
        )}
      </div>
    </>
  );
};

export default Todo;
