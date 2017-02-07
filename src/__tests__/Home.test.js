import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Home from '../components/Home';
import { Button } from 'semantic-ui-react';

it('renders without crashing', () => {
  const wrapper = shallow(<Home />);

  expect(wrapper.find(Button).length).toEqual(1);
});
