import React from 'react';
import './CardGroup.css';

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

export default CardGroup;