import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/esm/Modal";
import { Form, Row, Col, Button } from "react-bootstrap";
import { postData, fetchData } from "../api/api";
import ReduxStorage from "../reducer/dispatch";
import { useDispatch } from "react-redux";
import TableView from "./TableView";

export default function ModalWindow(props: any) {
  let { controllerName, fieldNames, show, onHide } = props;

  const [data, setData] = useState({});
  const dispatch = useDispatch()
 

  const submitData = (e: any) => {
    e.preventDefault();
    postData(controllerName, data, onHide, setData)
    // fetchData(controllerName)
    // .then(data => ReduxStorage(data, dispatch, controllerName))

    //return (<TableView controllerName={controllerName} fieldNames={fieldNames} data={data} />)
  };

  const onChangeInput = (e: any) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    alert(1);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert(12);
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Input Form - {controllerName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {fieldNames.map((fieldName: any, index: any) => {
            let inputType = "text";
            if (fieldName == "password") inputType = "password";
            //   if (fieldName == "userRoleId") inputType = "number";
            //   if (fieldName == "userGroupId") inputType = "number";
            //   if (fieldName == "status") inputType = "number";

            return ( 
              <Form.Group as={Row} key={index}>
                <Form.Label column sm="4">
                  {fieldName[0].toUpperCase() +
                    fieldName.substr(1, fieldName.length - 1).toLowerCase()}
                  :
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type={inputType}
                    placeholder={"Enter " + fieldName}
                    onChange={onChangeInput}
                    id={fieldName}
                  />
                </Col>
              </Form.Group>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submitData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    </div>
  );
}
