import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import InputForm from './templates/InputForm'
import TableView from './templates/TableView'

export default function UserRoles() {
    const fieldNames = [
        "id",
        "name" 
    ]

    const controllerName = "userRoles"
    const userRoles = useSelector((state: any) => state.userRoles)  
    return (
        <div>
            <InputForm controllerName={controllerName} fieldNames={fieldNames}   /> <br/>
            <TableView controllerName={controllerName} fieldNames={fieldNames} data={userRoles} />
        </div>
    )
}