import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';


it('renders without crashing', () => {

  let favoritesTrue= [];
  const users= []; 
  const currentUser = [];
  const deleteComment = [];

   /*    const div = document.createElement('div');
      const wrapper = shallow(< Dashboard favoritesTrue={favoritesTrue} users={users} currentUser={currentUser} deleteComment={deleteComment} />);
      ReactDOM.render( < BrowserRouter > {wrapper}
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div); */
        shallow(<Dashboard />);
      });