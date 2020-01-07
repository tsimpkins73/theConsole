import React from 'react';


import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import CategoriesDiv from '../CategoriesDiv';


it('renders without crashing', () => {
  let categoriesArray = []
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesDiv categoriesArray={categoriesArray} />, div);


  ReactDOM.unmountComponentAtNode(div);
});