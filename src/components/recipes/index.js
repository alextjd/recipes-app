import React from 'react';

const Recipes = props => {
    let recipes = null;
    if (props.recipes !== null) {
        recipes = props.recipes.map((item, index) => {
            return (
                <div className="col-md-4 col-lg-4 recipe-item">
                    <div key={item.recipe_id}>
                        <img src={item.image_url} className="recipe-img"/>
                        <div className="recipe-text">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="container">
            <div className="row">{recipes}</div>
        </div>
    );
};

export default Recipes;
