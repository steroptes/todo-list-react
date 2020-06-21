import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const AddingTaskBlock = ({ addTask }) => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskOperator, settaskOperator] = useState("");
  const handleChangeTitle = (e) => {
    settaskTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    settaskDescription(e.target.value);
  };
  const handleChangeOperator = (e) => {
    settaskOperator(e.target.value);
  };
  const add = (e) => {
    if (taskDescription && taskOperator) {
      e.preventDefault();
      addTask({
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        operator: taskOperator,
        isComplete: false,
      });
      settaskTitle("");
      settaskOperator("");
      settaskDescription("");
    } else {
      alert("Veuillez renseigner tous les champs");
    }
  };
  return (
    <Col className="mb-2">
      <Form bg="Light">
        <Form.Group controlId="task.Title">
          <Form.Label className="float-left">
            <h5>Task Title</h5>
          </Form.Label>
          <Form.Control
            type="Text"
            placeholder="Task Title"
            onChange={handleChangeTitle}
            value={taskTitle.toUpperCase()}
          />
        </Form.Group>
        <Form.Group controlId="task.operator">
          <Form.Label className="float-left">
            <h5>Task Operator</h5>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleChangeOperator}
            value={taskOperator}
          />
        </Form.Group>
        <Form.Group controlId="Task.Description">
          <Form.Label className="float-left">
            <h5>Task Description</h5>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            placeholder="Type your Todo Task Here"
            onChange={handleChangeDescription}
            value={taskDescription}
          />
        </Form.Group>
        <Button className="float-right" variant="success" onClick={add}>
          Add Task
        </Button>{" "}
      </Form>
    </Col>
  );
};

export default AddingTaskBlock;
