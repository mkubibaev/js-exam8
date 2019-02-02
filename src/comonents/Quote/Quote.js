import React from 'react';
import {NavLink} from "react-router-dom";

const Quote = props => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p><i>{props.text}</i></p>
                <span>- {props.author}</span>
            </div>
            <div className="card-footer text-right">
                <NavLink to={'/quotes/' + props.id + '/edit'} className="btn btn-sm btn-secondary mr-1">Edit</NavLink>
                <button onClick={props.onDelete} type="button" className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default Quote;