import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import Router from './index';
import Home from '../../containers/Home';

import configure from '../../store/configureStore';
const store = configure();

Enzyme.configure({ adapter: new Adapter() })

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter initialEntries={[ '/' ]}>
            <Router/>
        </MemoryRouter>
    </Provider>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});