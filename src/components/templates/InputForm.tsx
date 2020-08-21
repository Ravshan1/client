import React, { useState } from "react";
import { Button } from "react-bootstrap"; 
import ModalWindow from "./ModalWindow";
 

export default function InputForm(props: any) {
  const { controllerName, fieldNames} = props; 
  const [show, setShow] = useState(false); 
  const [data, setData] = useState({});

  return ( <>
    <ModalWindow controllerName={controllerName} fieldNames={fieldNames} show={show}  onHide={() => setShow(false)}/>  
      <Button variant="primary" onClick={() => setShow(true)} style={{float:'left', margin:10}}>
          Create New
      </Button>  
</>)  
}
 