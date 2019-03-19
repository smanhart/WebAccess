import React from 'react';
import {configure, shallow} from 'enzyme';
import Flashcard from './Flashcard';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Flashcard />);
});