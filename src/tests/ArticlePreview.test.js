import React from 'react';


import ReactDOM from 'react-dom';


import ArticlePreview from '../ArticlePreview';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticlePreview />, div);


  ReactDOM.unmountComponentAtNode(div);
});