import React from 'react';
import CardGroup from './CardGroup'
import Card from './Card'

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */

const App = () => (
    <CardGroup>
        <Card 
        description="Trial" 
        price="Free!" 
        icon="fa-thumbs-o-up" />
        <Card 
        description="Basic tier" 
        price="$10.00" 
        icon="fa-trophy" 
        hint="(most popular)" />
        <Card 
        description="Advanced tier" 
        price="$6,000.00" icon="fa-bolt" 
        hint="(only for enterprise-level professionals)" />
    </CardGroup>
);

export default App;
