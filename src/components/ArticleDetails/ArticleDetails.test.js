import React from 'react';
import { shallow } from 'enzyme';

import { ArticleDetails } from './ArticleDetails';

it('renders without crashing', () => {
  const component = <ArticleDetails />;
  const wrapper = shallow(<div>{component}</div>)
  expect(wrapper).toMatchSnapshot();
  });