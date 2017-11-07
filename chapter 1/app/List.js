import React, {Component} from 'react';
import {render} from 'react-dom';

import Card from './Card';

class List extends Component {
    render(){
        var cards = this.props.cards.map((card, index)=>{
            return < Card id = {card.id}
                          key={Date.now() + index}
                          title = { card.title}
                          description = {card.description}
                          tasks = {card.tasks} />
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;