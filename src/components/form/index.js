import React from 'react';
import './styles.css';

const Form = props => {
    return (
        <form onSubmit={props.getRecipe} autoComplete="off" className="search-form">
            <input type="text" name="recipeName" className="form-input" placeholder="Type the recipe"/>
            <button className="form-button">Search</button>
        </form>
    );
};

export default Form;
