import React from 'react';
import './styles.css';

const Recipes = props => {
    let recipes = null;
    if (props.recipes !== null) {
        //Look for searches with no result
        if (props.recipes.length === 0) {
            recipes = <div className="noresult">No results were found for that search :(</div>;
        }
        else {
            recipes = props.recipes.map((item, index) => {
                //Shorten recipe title
                let title = item.title.length < 20 ? item.title : item.title.substring(0, 20) + "...";
                return (
                    <div className="col-md-4 col-lg-4" key={item.recipe_id}>
                        <div className="recipe-item">
                            <img src={item.image_url} alt="Some food" className="recipe-img"/>
                            <div className="recipe-text">
                                <div className="recipe-title">
                                    {title}
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
    }

    else if (props.searching === true) {
        recipes = <div className="search-loader"></div>
    }

    return (
        <div className="container">
            <div className="row">{recipes}</div>
        </div>
    );
};

export default Recipes;
