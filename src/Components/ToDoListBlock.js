import React from "react";
import {
  Accordion,
  Card,
  Badge,
  Container,
  Row,
  Button,
  Col,
} from "react-bootstrap";
import ModifyingTaskBlock from "./ModifyingTaskBlock";

const ToDoListBlock = ({ toDoList, deleteTask, modifyTask, completeTask }) => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        {toDoList.map((Task, i) => (
          <Card key={i}>
            <Accordion.Toggle as={Card.Header} eventKey={i}>
              <h5 className={Task.isComplete ? "completeTask" : "float-left"}>
                {Task.title}
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                <Row>
                  <p
                    className={Task.isComplete ? "completeTask" : "float-left"}
                  >
                    {Task.description}
                  </p>
                </Row>
                <Row>
                  <Col className="d-flex align-items-end pl-0">
                    <Badge variant="secondary">{Task.operator}</Badge>
                  </Col>
                  <Col className="d-flex justify-content-end pr-0">
                    <Button
                      variant={
                        Task.isComplete
                          ? "success mr-1"
                          : "outline-success mr-1"
                      }
                      
                      onClick={() => completeTask(Task)}
                    >
                      {Task.isComplete ? "Done" : "To Do"}
                    </Button>
                    <ModifyingTaskBlock task={Task} modifyTask={modifyTask} />
                    <Button
                      variant="danger"
                      onClick={() => deleteTask(Task.id)}
                    >
                      Supprimer
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default ToDoListBlock;
