import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

class Detail extends Component {
    state = {
        activeRecipe: this.props.location.state,
    };

    render() {
        return (
            <div className="detail-container">
                <div className="detail-img">
                    <img src={this.state.activeRecipe.image_url} alt="Recipe image"/>
                </div>
                <div className="detail-title">{this.state.activeRecipe.title}</div>
                <div className="detail-author"><span>Recipe created by:</span><br/>
                    <p>{this.state.activeRecipe.publisher}</p></div>
                <div className="detail-website">
                    <span>Check the original recipe:</span><br/>
                    <a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a>
                </div>
                <div className="btn-wrapper">
                    <Link to="/">
                        <button className="detail-btn">Go back</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Detail;
