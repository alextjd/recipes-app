import React from 'react';
import './styles.css';

const Form = props => {
    return (
        <form onSubmit={props.getRecipe} autoComplete="off">
            <input type="text" name="recipeName" className="form-input"/>
            <button className="form-button">Search</button>
        </form>
    );
};

export default Form;
