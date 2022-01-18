import React from "react";

export const CompletePlaces = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="finished-placeList">
      <p>達成</p>
      {complete.map((toCompletePlace, index) => {
        return (
          <div key={toCompletePlace} className="finished-placeLists">
            <p>■</p>
            {toCompletePlace.name}
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
        );
      })}
    </div>
  );
};
