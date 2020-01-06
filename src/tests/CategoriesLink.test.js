import React from 'react';


import ReactDOM from 'react-dom';


import CategoriesLink from '../CategoriesLink';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesLink />, div);


  ReactDOM.unmountComponentAtNode(div);
});