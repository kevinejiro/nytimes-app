import React from 'react';
import { shallow } from 'enzyme';

import { ArticleList } from './ArticleList';

it('renders without crashing', () => {
  const component = <ArticleList />;
  const wrapper = shallow(<div>{component}</div>)
  expect(wrapper).toMatchSnapshot();
  });
  