import React from 'react';
import { Admin, Resource } from 'react-admin';
import restprovider from 'ra-data-simple-rest';
import categorylist from '../components/categorylist';
export const Categories = () => {
     
    return ( 
        <div className="p-grid">
        <div className="p-col-12">
            <div className="card">
                <h5>صفحة المسؤول </h5>
                <p>اهلا وسهلا بك في صقحة المسؤول </p>
                <Admin dataProvider={ restprovider('https://localhost:5001/api/category')}>
                <Resource name='Categories' list={categorylist}/>
            </Admin>
            </div>
        </div>
    </div>

    );

}