
import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompletePlaces } from "./components/IncompletePlaces.jsx";
import { CompletePlaces } from "./components/CompletePlaces.jsx";
import { IncompleteFood } from "./components/IncompleteFood.jsx";
import { CompleteFood } from "./components/CompleteFood.jsx";


export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [list, setList] = useState([{
    name: "",
    section: "food",  // foodかplace
    isComplete: true,   // completeかincomplete
    category: "Milan",
  }])


  const [category,setCategory] = useState("Milan")

  const onChangeTodoText = (event) => setTodoText(event.target.value);
    
  const onClickAdd = (section) => {
    if (todoText === "") return;
    const todo = {
      name: todoText,
      section: section,  
      isComplete: false,   
      category: category,
    }
    setList([...list,todo]);
    setTodoText("");
  }
  
  const onClickPlaceAdd = () => {
    onClickAdd('place')
  }

  const onClickFoodAdd = () => {
    onClickAdd('food')
  }

  const onClickHandleChange = (event) => {setCategory(event.target.value)}


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
        handleChange = {onClickHandleChange}
      />
      <IncompletePlaces
        incomplete={list.filter(
          (todo)=>{return todo.section==="place" && todo.isComplete===false && todo.category===category}
        )}
        onClickComplete={onClickCompletePlace}
        onClickDelete={onClickDeletePlace}
        onClickEdit={onClickEditPlace}
      />

      <CompletePlaces
        complete={list.filter(
          (todo)=>{return todo.section==="place" && todo.isComplete===true && todo.category===category}
        )}
        onClickBack={onClickBackPlace}
      />

      <IncompleteFood
        incomplete={list.filter(
          (todo)=>{return todo.section==="food" && todo.isComplete===false && todo.category===category}
        )}
        onClickComplete={onClickCompleteFood}
        onClickDelete={onClickDeleteFood}
        onClickEdit={onClickEditFood}
      />

      <CompleteFood 
        complete={list.filter(
          (todo)=>{return todo.section==="food" && todo.isComplete===true && todo.category===category}
        )} 
        onClickBack={onClickBackFood} />
    </>
  );
};
