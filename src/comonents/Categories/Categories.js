import React from 'react';
import {NavLink} from "react-router-dom";

const Categories = props => {
    return (
        <div className="list-group">
            <NavLink exact to="/" className="list-group-item list-group-item-action">All</NavLink>

            {props.list.map(category => (
                <NavLink key={category.id}
                         to={"/quotes/" + category.id}
                         className="list-group-item list-group-item-action"
                >{category.title}</NavLink>
            ))}
        </div>
    );
};

export default Categories;