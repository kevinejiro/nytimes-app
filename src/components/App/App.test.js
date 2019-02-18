import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from './App';


describe('App', () => {
	let wrapper;
	let setStateSpy;
	beforeEach(() => {
		setStateSpy = jest.spyOn(App.prototype, 'setState');
		wrapper = shallow(<App />);
	});

	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('calls axios.get in componentDidMount', () => {
		return wrapper.instance().componentDidMount().then(() => {
			expect(axios.get).toHaveBeenCalled();
		})
	});

	it('calls setState in componentDidMount', () => {
		return wrapper.instance().componentDidMount().then(() => {
			expect(setStateSpy).toHaveBeenCalled();
		})
	});

	it('calls axios.get with correct url', () => {
		return wrapper.instance().componentDidMount().then(() => {
			expect(axios.get).toHaveBeenCalledWith('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=MJ4FfwRcFW2UD0b72IBaFxA0aFMnRafp');
		})
	});

	it('updates the state when componentDidMount is called', () => {
		return wrapper.instance().componentDidMount().then(() => {
			expect(wrapper.state()).toHaveProperty('isLoading', false
			);
		});
	});

});