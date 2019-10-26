import React from 'react';
import renderer from 'react-test-renderer';
import Order from './index';
import { Provider } from 'react-redux';
import configure from '../../store/configureStore';

const store = configure();

describe('<Order>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
            <Order />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

