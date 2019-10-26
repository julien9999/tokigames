import React from 'react';
import renderer from 'react-test-renderer';
import Reset from './index';
import { Provider } from 'react-redux';
import configure from '../../store/configureStore';

const store = configure();

describe('<Reset>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
            <Reset />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

