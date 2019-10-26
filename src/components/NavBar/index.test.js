import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './index';


describe('<NavBar>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavBar />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

