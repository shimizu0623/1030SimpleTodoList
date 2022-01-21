import React from "react";

const style = {
  fontSize: "20px",
  backgroundColor: "rgb(247, 203, 210)",
  borderRadius: "5px",
  minHeight: "350px"
};


export const IncompletePlaces = (props) => {
  const {incomplete, onClickComplete, onClickDelete, onClickEdit } = props;
  return (
    <div style={style} className="place-list">
      <div className="place-title">
        <p>行きたいところ</p>
      </div>

      {incomplete.map((toPlace) => {
        return (
          <div key={toPlace} className="place">
            <label>
              <input type="checkbox" onClick={() => onClickComplete(toPlace.id)} />
              {toPlace.name}
            </label>
            <button onClick={() => onClickEdit(toPlace.id)}>編集</button>
            <button onClick={() => onClickDelete(toPlace.id)}>削除</button>
          </div>
        );
      })}
    </div>
  );
};
