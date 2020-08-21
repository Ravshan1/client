import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import InputForm from './templates/InputForm'
import TableView from './templates/TableView'
import Button from 'react-bootstrap/esm/Button';

export default function Users() {
    const fieldNames = [
        "userName",
        "displayName",
        "email",
        "userGroupId",
        "password", 
        "userRoleId",
        "status"
    ] 
    const controllerName = "users"
    const users = useSelector((state: any) => state.users) 


    return (
        <div>
            

            <InputForm controllerName={controllerName} fieldNames={fieldNames}   /> <br/>
            <TableView controllerName={controllerName} fieldNames={fieldNames} data={users}/>
        </div>
    )
}