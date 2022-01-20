import React from "react";

const style = {
  fontSize: "20px",
  backgroundColor: "rgb(201, 226, 247)",
  borderRadius: "5px",
  minHeight: "350px"
};

export const IncompleteFood = (props) => {
  const { incomplete, onClickComplete, onClickDelete, onClickEdit } = props;
  return (
    <div style={style} className="food">
      <div className="food-title">
        <p>グルメ</p>
      </div>

      {incomplete.map((toFood, index) => {
        return (
          <div key={toFood} className="todo">
            <label>
              <input type="checkbox" onClick={() => onClickComplete(index)} />
              {toFood.name}
            </label>
            <button onClick={() => onClickEdit(index)}>編集</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        );
      })}
    </div>
  );
};
