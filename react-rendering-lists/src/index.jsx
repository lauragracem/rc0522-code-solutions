import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const listItems = pokedex.map(pokedex =>
  <li key={pokedex} value={pokedex.name}>{pokedex.name}</li>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ul>{listItems}</ul>);
