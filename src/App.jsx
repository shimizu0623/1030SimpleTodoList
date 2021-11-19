import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompletePlaces } from "./components/IncompletePlaces.jsx";
import { CompletePlaces } from "./components/CompletePlaces.jsx";
import { IncompleteFood } from "./components/IncompleteFood.jsx";
import { CompleteFood } from "./components/CompleteFood.jsx";

// localStorage.setItem('key','value')
// var key = localStorage.getItem('key') 
// localStorage.removeItem('key')

// if (typeof window.localStorage !== 'undefined'){
//   /// localStorageに対応済み
//   console.log('localStorage対応済み！');
// }
// else{
//   /// localStorageには未対応
//   console.error('localStorage未対応..');
// }


export const App = () => {
  const [todoText, setTodoText] = useState("");
  // const [change, setChange] = useState()

  const [incompletePlaces, setIncompletePlaces] = useState([{name:"",area:""}]);
    // "スペイン広場周辺　Piazza di Spagna",
    // "テスタッチョ　Testaccio",
    // "コロッセオ　Colosseo"
  const [completePlaces, setCompletePlaces] = useState([]);
    // "サン・ピエトロ大聖堂 Basilica di San Pietro"

  const [incompleteFoods, setIncompleteFoods] = useState([]);
    // "ダ・ブカティーノ(Da Bucatino)",
    // "イル・フィーコ(Il Fico)"

  const [completeFoods, setCompleteFoods] = useState([]);
  // "サン・ピエトロ大聖堂 Basilica di San Pietro"

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickPlaceAdd = () => {
    if (todoText === "") return;
    const newPlaceTodos = [...incompletePlaces, todoText];
    setIncompletePlaces(newPlaceTodos);
    setTodoText("");
    // localStorage.setItem('incompletePlaces',incompletePlaces)

  };
  const onClickFoodAdd = () => {
    if (todoText === "") return;
    const newFoodTodos = [...incompleteFoods, todoText];
    setIncompleteFoods(newFoodTodos);
    setTodoText("");
  };

  // const onClickHandleChange = (event) => setChange(event.target.value)

  const onClickCompletePlace = (index) => {
    const newIncompletePlace = [...incompletePlaces];
    newIncompletePlace.splice(index, 1);

    const newCompletePlace = [...completePlaces, incompletePlaces[index]];
    setIncompletePlaces(newIncompletePlace);
    setCompletePlaces(newCompletePlace);
  };

  const onClickCompleteFood = (index) => {
    const newInCompleteFoods = [...incompleteFoods];
    newInCompleteFoods.splice(index, 1);

    const newCompleteFood = [...completeFoods, incompleteFoods[index]];
    setIncompleteFoods(newInCompleteFoods);
    setCompleteFoods(newCompleteFood);
  };

  const confirmMessage = '本当に削除しますか？'

  const onClickDeletePlace = (index) => {
    let result = window.confirm(confirmMessage);
    if (result){
      const DeletePlace = [...incompletePlaces];
      DeletePlace.splice(index, 1);
      setIncompletePlaces(DeletePlace);
    }else{
      return;
    }
  };
  
  const onClickDeleteFood = (index) => {
    let result = window.confirm(confirmMessage);
    if (result){
      const DeleteFood = [...incompleteFoods];
      DeleteFood.splice(index, 1);
      setIncompleteFoods(DeleteFood);
    }else{
      return;
    }
  };

  const onClickEditPlace = (index) => {
    const EditPlace = [...incompletePlaces];
    EditPlace.splice(index, 1);

    setIncompletePlaces(EditPlace);

    const Edit = [incompletePlaces[index]];
    setTodoText(Edit);
  };

  const onClickEditFood = (index) => {
    const EditFood = [...incompleteFoods];
    EditFood.splice(index, 1);

    setIncompleteFoods(EditFood);

    const Edit = [incompleteFoods[index]];
    setTodoText(Edit);
  };

  const onClickBackPlace = (index) => {
    const BackPlace = [...completePlaces];
    BackPlace.splice(index, 1);

    const newPlace = [...incompletePlaces, completePlaces[index]];

    setCompletePlaces(BackPlace);
    setIncompletePlaces(newPlace);
  };

  const onClickBackFood = (index) => {
    const BackFood = [...completeFoods];
    BackFood.splice(index, 1);

    const newFood = [...incompleteFoods, completeFoods[index]];

    setCompleteFoods(BackFood);
    setIncompleteFoods(newFood);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        place={onClickPlaceAdd}
        food={onClickFoodAdd}
        // handleChange = {onClickHandleChange}
      />
      <IncompletePlaces
        incomplete={incompletePlaces}
        onClickComplete={onClickCompletePlace}
        onClickDelete={onClickDeletePlace}
        onClickEdit={onClickEditPlace}
      />

      <CompletePlaces
        complete={completePlaces}
        onClickBack={onClickBackPlace}
      />

      <IncompleteFood
        incomplete={incompleteFoods}
        onClickComplete={onClickCompleteFood}
        onClickDelete={onClickDeleteFood}
        onClickEdit={onClickEditFood}
      />

      <CompleteFood complete={completeFoods} onClickBack={onClickBackFood} />
    </>
  );
};
