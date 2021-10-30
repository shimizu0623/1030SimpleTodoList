import React from "react";

const style = {
  backgroundColor: "rgb(240, 193, 233)",
  textAlign: "center",
  borderRadius: "5px",
  height: "35px"
};

const inputstyle = {
  border: "none",
  borderRadius: "10px",
  width: "250px",
  height: "25px",
  margin: "5px 0",
  outline: "none"
};

const selectStyle = {
  height: "25px",
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, place, food } = props;
  return (
    <div style={style}>
      <input
        placeholder="メモを入力"
        value={todoText}
        onChange={onChange}
        style={inputstyle}
      />
      <button onClick={place}>行きたいところに追加</button>
      <button onClick={food}>グルメに追加</button>
      <select name="Italy-places" id="Italy-places" style={selectStyle}>
        <option value="Milan">Milan</option>
        <option value="Venezia">Venezia</option>
        <option value="Dolomiti">Dolomiti</option>
        <option value="Firenze">Firenze</option>
        <option value="Rome">Rome</option>
        <option value="Naples">Naples</option>
        <option value="Sicily">Sicily</option>
      </select>
    </div>
  );
};
