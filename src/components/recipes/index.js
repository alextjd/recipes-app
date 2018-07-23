import React from 'react';

const Recipes = props => {
    let recipes = null;
    if (props.recipes !== null) {
        recipes = props.recipes.map((item, index) => {
            return (
                <div key={item.recipe_id}>
                    <img src={item.image_url}/>
                    <p>{item.title}</p>
                </div>
            );
        });
    }
    return recipes;
};

export default Recipes;
