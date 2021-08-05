import React from 'react'
import {List,Datagrid,TextField,EditButton,DeleteButton} from 'react-admin'
const categorylist = (props) =>{
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <TextField source='parentID'/>
                <TextField source='userID'/>
                <TextField source='status'/>
                <EditButton basePath='/category'/>
                <DeleteButton basePath='/category'/>
            </Datagrid>
        </List>
    )
}
export  default categorylist