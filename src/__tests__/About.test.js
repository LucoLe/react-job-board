import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import About from '../components/About';

it('renders without crashing', () => {
  const wrapper = shallow(<About />);
  const message = <h1>Our About page</h1>;

  expect(wrapper.contains(message)).toEqual(true);
});
