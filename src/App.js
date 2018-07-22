import React, {Component} from 'react';
import './App.css';
import Form from './components/form';

//API key for doing API calls
const API_KEY = "c59492c77da4bfb3944c2a38ee32ffea";
//Prefix to be able of making API calls from localhost
const cross_prefix = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
    state = {
        recipes: null
    };

    //Handle the recipe search in the form
    getRecipe = async (e) => {
        e.preventDefault();

        //Get the search term
        const recipe = e.target.elements.recipeName.value;
        //Prepare the url using literals
        const url = `${cross_prefix}http://food2fork.com/api/search?key=${API_KEY}&q=${recipe}&count=5`;
        //Use fetch to do the API call
        const response = await fetch(url);
        const data = await response.json();

        this.setState({recipes: data.recipes});
        console.log(this.state.recipes);
    };

    render() {
        //Check for the recipes
        let recipes;
        if (this.state.recipes !== null) {
            recipes = this.state.recipes.map((item, index) => {
                return <p key={item.recipe_id}>{item.title}</p>
            });
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe}/>

                {recipes}
            </div>
        );
    }
}

export default App;