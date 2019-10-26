import React from 'react';
import renderer from 'react-test-renderer';
import FilterLink from './index';
import { setOrder } from '../../actions/orderActions';
import { SHOW_DURATION } from '../../constants/actionTypes';

jest.mock('react-redux', () => ({
  useDispatch: ()=> {},
  useSelector: () => true
}));

describe('<FilterLink>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilterLink 
            action={setOrder}
            type={SHOW_DURATION}
            children={"Duration"}
            property="order"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});