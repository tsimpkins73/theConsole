import React from 'react';


import ReactDOM from 'react-dom';


import CategoriesDiv from '../CategoriesDiv';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesDiv />, div);


  ReactDOM.unmountComponentAtNode(div);
});