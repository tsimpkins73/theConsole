import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import FavoritesDiv from '../FavoritesDiv';


it('renders without crashing', () => {

  const favoritesTrue = [];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <FavoritesDiv favoritesTrue={favoritesTrue} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });