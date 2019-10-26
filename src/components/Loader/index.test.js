import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';


describe('<Loader>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Loader message='Loading' />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

