import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../components/App';
import About from '../components/About';

it('renders without crashing', () => {
  const wrapper = shallow(<App><About /></App>);
});
