import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import CommentsList from '../CommentsList';


it('renders without crashing', () => {
        let users= []; 
        let currentUser = {};
        let deleteComment = {};
        let comments = [{id: 1, text: 'This is a great article!', article_id: 1, user_id: 1},
        {id: 2, text: 'Great read!', article_id: 2, user_id: 1},
        {id: 3, text: 'This was very helpful information', article_id: 1, user_id: 2},
        {id: 4, text: 'Thank you for this link!', article_id: 2, user_id: 2}];
        shallow(<CommentsList comments={comments} users={users} currentUser={currentUser} deleteComment={deleteComment} />);
      });