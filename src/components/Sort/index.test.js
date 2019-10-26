import React from 'react';
import renderer from 'react-test-renderer';
import Sort from './index';
import { Provider } from 'react-redux';
import configure from '../../store/configureStore';

const store = configure();

describe('<Sort>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
            <Sort />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

