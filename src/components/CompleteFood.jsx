import React from "react";

export const CompleteFood = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="finished-foodList">
      <p>達成</p>
      {complete.map((toCompleteFood, index) => {
        return (
          <div key={toCompleteFood}>
            ■{toCompleteFood}
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
        );
      })}
    </div>
  );
};
