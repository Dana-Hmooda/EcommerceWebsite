import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';
import categorylist from '../components/categorylist';
export const Categories = () => {
     
    return ( 
        <div className="p-grid">
        <div className="p-col-12">
            <div className="card">
                <h5>Admin page </h5>
                <p>Welcome in Adminstrater page </p>
                <Admin dataProvider={jsonServerProvider('https://localhost:5000/api/category')}>
                <Resource name='Categories' list={categorylist}/>
            </Admin>
            </div>
        </div>
    </div>

    );

}