import React from 'react';
import './styles.css';

const Recipes = props => {
    let recipes = null;
    if (props.recipes !== null) {
        recipes = props.recipes.map((item, index) => {
            return (
                <div className="col-md-4 col-lg-4" key={item.recipe_id}>
                    <div className="recipe-item">
                        <img src={item.image_url} alt="Some food" className="recipe-img" />
                        <div className="recipe-text">
                            <div className="recipe-title">
                                {item.title}
                            </div>
                            <div className="recipe-author">
                                Created by: <span>{item.publisher}</span>
                            </div>
                            <button className="detail-btn">View recipe</button>
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
