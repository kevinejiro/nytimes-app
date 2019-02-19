import React from 'react';
import { shallow } from 'enzyme';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter'
import { NotFound } from './NotFound'

it('renders without crashing', () => {
  const component = <AppHeader />;
  const wrapper = shallow(<div>{component}</div>)
  expect(wrapper).toMatchSnapshot();
  });

 
it('renders without crashing', () => {
    const component = <AppFooter />;
    const wrapper = shallow(<div>{component}</div>)
    expect(wrapper).toMatchSnapshot();
    }); 

    
it('renders without crashing', () => {
    const component = <NotFound />;
    const wrapper = shallow(<div>{component}</div>)
    expect(wrapper).toMatchSnapshot();
    });
  