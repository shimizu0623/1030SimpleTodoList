import React from "react";

export const CompleteFood = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="finished-foodList">
      <p>達成</p>
      {complete.map((toCompleteFood) => {
        return (
          <div key={toCompleteFood} className="finished-foodLists">
            <p>■</p>
            {toCompleteFood.name}
            <button onClick={() => onClickBack(toCompleteFood.id)}>戻す</button>
          </div>
        );
      })}
    </div>
  );
};
