import React from 'react';

const QuoteForm = props => {
    return (
        <form onSubmit={props.submitted}>
            <div className="row">
                <div className="form-group col-12">
                    <label>Quote:</label>
                    <textarea className="form-control"
                              name="text"
                              value={props.text}
                              onChange={props.changed}
                    />
                </div>
                <div className="form-group mb-3 col-12 col-md-6">
                    <label>Category:</label>
                    <select name="category"
                            className="form-control"
                            onChange={props.changed}
                            value={props.selectedcategory}
                    >
                        {props.categories.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3 col-12 col-md-6">
                    <label>Author:</label>
                    <input type="text"
                           className="form-control"
                           name="author"
                           value={props.author}
                           onChange={props.changed}
                    />
                </div>
                <div className="form-group text-right col-12">
                    <button type="submit" className="btn btn-info">Save</button>
                </div>
            </div>
        </form>
    );
};

export default QuoteForm;