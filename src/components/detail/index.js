import React, {Component} from 'react';

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
                <div className="detail-author">{this.state.activeRecipe.publisher}</div>
                <div className="detail-website">{this.state.activeRecipe.publisher_url}</div>
            </div>
        );
    }
}

export default Detail;
