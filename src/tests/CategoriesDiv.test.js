import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import CategoriesDiv from '../CategoriesDiv';


it.only('renders without crashing', () => {
  let categoriesArray= ["Extended Learning", "Tutorials", "News", "New Technology", "Front-End Development", "Back-End Development", "Full Stack Development"];
  let category = {};
  const div = document.createElement('div');
  ReactDOM.render( < BrowserRouter > <CategoriesDiv categoriesArray={categoriesArray} category={category}/> </BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
      });