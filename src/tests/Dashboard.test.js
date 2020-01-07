import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from '../Dashboard';


it('renders without crashing', () => {

  let favoritesTrue= [];
  const users= []; 
  const currentUser = [];
  const deleteComment = [];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > < Dashboard favoritesTrue={favoritesTrue} users={users} currentUser={currentUser} deleteComment={deleteComment}
        />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });