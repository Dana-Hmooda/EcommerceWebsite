import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import userlist from '../components/userlist';
export const Categories = () => {
     
    return ( 
        <div className="p-grid">
        <div className="p-col-12">
            <div className="card">
                <h5>Admin page </h5>
                <p>Welcome in Adminstrater page </p>
                <Admin dataProvider={restProvider('https://localhost:5001/api/Get Users')}>
                <Resource name='Users' list={userlist}/>
            </Admin>
            </div>
        </div>
    </div>

    );

}