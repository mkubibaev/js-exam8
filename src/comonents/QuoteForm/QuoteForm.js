import React from 'react';

const QuoteForm = props => {
    return (
        <form onSubmit={props.submitted}>
            <div className="form-group">
                <label>Quote:</label>
                <textarea className="form-control"
                          name="quote"
                          value={props.quote}
                          onChange={props.changed}
                />
            </div>
            <div className="form-group mb-3">
                <label>Quote author:</label>
                <input type="text"
                       className="form-control"
                       name="author"
                       value={props.author}
                       onChange={props.changed}
                />
            </div>
            <div className="form-group text-right">
                <button type="submit" className="btn btn-info">Save</button>
            </div>
        </form>
    );
};

export default QuoteForm;