import React from 'react';
import { shallow } from 'enzyme';

import { Article } from './Article';

it('renders without crashing', () => {
  const component = <Article />;
  const wrapper = shallow(<div>{component}</div>)
  expect(wrapper).toMatchSnapshot();
  }); 