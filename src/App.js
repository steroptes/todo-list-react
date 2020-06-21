import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import AddingTaskBlock from "./Components/AddingTaskBlock";
import ToDoListBlock from "./Components/ToDoListBlock";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const addTask = (Task) => {
    setTodoList([...toDoList, Task]);
  };
  const deleteTask = (Task) => {
    setTodoList(toDoList.filter((el) => el.id !== Task));
  };

  const modifyTask = (modifiedTask) => {
    setTodoList(
      toDoList.map((el) => (el.id === modifiedTask.id ? modifiedTask : el))
    );
  };
  const completeTask = (completedTask) => {
    setTodoList(
      toDoList.map((el) =>
        el.id === completedTask.id
          ? { ...completedTask, isComplete: !completedTask.isComplete }
          : el.isComplete
      )
    );
  };
  return (
    <Container className="App">
      <h1 className="mt-2">ToDo List App</h1>
      <Row>
        <AddingTaskBlock addTask={addTask} />
      </Row>
      <Row>
        <ToDoListBlock
          toDoList={toDoList}
          deleteTask={deleteTask}
          modifyTask={modifyTask}
          completeTask={completeTask}
        />
      </Row>
    </Container>
  );
}

export default App;
