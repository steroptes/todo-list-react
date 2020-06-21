import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModifyingTaskBlock = ({ task, modifyTask }) => {
  const [ModificationTitle, setModificationTitle] = useState(task.title);
  const [ModificationOperator, setModificationOperator] = useState(
    task.operator
  );
  const [ModificationDescription, setModificationDescription] = useState(
    task.description
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeTitle = (e) => setModificationTitle(e.target.value);
  const handleChangeDescription = (e) =>
    setModificationDescription(e.target.value);
  const handleChangeOperator = (e) => setModificationOperator(e.target.value);
  const handleClick = () => {
    modifyTask({
      ...task,
      description: ModificationDescription,
      operator: ModificationOperator,
      title: ModificationTitle.toUpperCase(),
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="info mr-1"
        onClick={handleShow}
        disabled={task.isComplete ? "disabled" : ""}
      >
        Modifier
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modification de la tache</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="task.Title">
            <Form.Label className="float-left">
              <h5>Task Title</h5>
            </Form.Label>
            <Form.Control
              type="Text"
              value={ModificationTitle}
              onChange={handleChangeTitle}
            />
          </Form.Group>
          <Form.Group controlId="task.Operator">
            <Form.Label className="float-left">
              <h5>Task Operator</h5>
            </Form.Label>
            <Form.Control
              type="Text"
              value={ModificationOperator}
              onChange={handleChangeOperator}
            />
          </Form.Group>
          <Form.Group controlId="task.Description">
            <Form.Label className="float-left">
              <h5>Task Description</h5>
            </Form.Label>
            <Form.Control
              type="Text"
              value={ModificationDescription}
              onChange={handleChangeDescription}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyingTaskBlock;
