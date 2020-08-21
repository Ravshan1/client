import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import InputForm from './templates/InputForm'
import TableView from './templates/TableView'

export default function Datasources() {
    const fieldNames = [
        "name",
        "connection",
        "port",
        "user",
        "password",
        "databaseName"
    ]

    const controllerName = "datasources"
    const datasources = useSelector((state: any) => state.datasources)  
    return (
        <div>
            <InputForm controllerName={controllerName} fieldNames={fieldNames}   /> <br/>
            <TableView controllerName={controllerName} fieldNames={fieldNames} data={datasources} />
        </div>
    )
}