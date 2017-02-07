import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import Routes from '../components/Routes';
import About from '../components/About';
import Home from '../components/Home';
import App from '../components/App';


it('renders correct routes', () => {
  const wrapper = shallow(<Routes />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  console.log(pathMap);

  expect(pathMap['about']).toBe(About);
  expect(pathMap['/']).toBe(App);

});
