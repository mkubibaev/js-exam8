import React from 'react';
import {NavLink} from "react-router-dom";

const Categories = props => {

    let allQuotesCount = 0;

    props.list.forEach(category => {
        allQuotesCount += category.count;
    });

    return (
        <div className="list-group mb-4">
            <NavLink exact to="/"
                     className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
                All
                <span className="badge badge-primary badge-pill">{allQuotesCount}</span>
            </NavLink>

            {props.list.map(category => (
                <NavLink key={category.id}
                         to={"/quotes/" + category.id}
                         className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                    {category.title}
                    <span className="badge badge-primary badge-pill">{category.count}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;