import React from 'react';


import ReactDOM from 'react-dom';


import ArticleView from '../ArticleView';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticleView />, div);


  ReactDOM.unmountComponentAtNode(div);
});