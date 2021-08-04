import React from 'react'
import {List,Datagrid,TextField,DateField,EditButton,DeleteButton} from 'react-admin'
const userlist = (props) =>{
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <DateField source='publishedat'/>
                <EditButton basePath='/admin'/>
                <DeleteButton basePath='/admin'/>
            </Datagrid>
        </List>
    )
}
export  default userlist