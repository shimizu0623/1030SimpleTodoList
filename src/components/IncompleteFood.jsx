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

      {incomplete.map((toFood) => {
        return (
          <div key={toFood} className="todo">
            <label>
              <input type="checkbox" onClick={() => onClickComplete(toFood.id)} />
              {toFood.name}
            </label>
            <button onClick={() => onClickEdit(toFood.id)}>編集</button>
            <button onClick={() => onClickDelete(toFood.id)}>削除</button>
          </div>
        );
      })}
    </div>
  );
};
