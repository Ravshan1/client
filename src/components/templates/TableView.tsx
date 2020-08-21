import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchData, deleteData } from '../api/api'
import ReduxStorage from '../reducer/dispatch'
 

export default function TableView(props: any) {

    const { controllerName, fieldNames, data } = props
    const dispatch = useDispatch()

    useEffect(() => { 
        fetchData(controllerName).then(d => ReduxStorage(d, dispatch, controllerName))
    }, [])
 
    const deleteRow = (id: any) => {
        deleteData(controllerName, id)
            .then(() => fetchData(controllerName))
            .then(data => ReduxStorage(data, dispatch, controllerName))
    }

    const changeRow = (id: any, row_data:any) => {
        console.log(row_data);
        // <InputForm controllerName={controllerName} fieldNames={fieldNames} initData={row_data}/> 
    } 
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th> 
                        {
                            fieldNames?.map((fieldName: string[], index:any) => <th key={index}>{fieldName}</th>)
                        } 
                        <td></td>
                    </tr>
                </thead>
                <tbody>
               
                    {
                        
                        data.map((schema: any, index: number) =>
                            <tr key={schema._id}>
                                <td>{index + 1}</td>

                                {
                                    fieldNames?.map((fieldName: any, index1:any) => <td key={index1}>{schema[fieldName]}</td>)
                                } 

                             <td>
                                <button className="btn btn-secondary btn-sm" onClick={()=>changeRow(schema._id, schema)}>  Change </button> &nbsp;
                                <button className="btn btn-danger btn-sm" type="submit"  onClick={(id: any) => deleteRow(schema._id)}>  Delete </button>
                            </td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}