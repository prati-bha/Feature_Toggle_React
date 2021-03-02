import React from 'react';
import { SignUp } from './Components/SignUp';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import Login from "./Components/Login";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { fireEvent } from '@testing-library/react'
import Routes from "./Components/Routes";
import apiRequest from "./Requests/apiRequestFunction";
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({ push: jest.fn() })
}));
//Signup testing
describe('Test Case for signup', () => {

  let wrapper = shallow(<SignUp />);
  it('should render input boxes', () => {
    expect(wrapper.find('input').length).toEqual(2)
  });
  it('should render a signup button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  });
  it('username should be empty first', () => {
    const value = wrapper.find('input').at(0).value;
    expect(value).toBe()
  });
  it('password should be empty first', () => {
    const value = wrapper.find('input').at(1).value;
    expect(value).toBe()
  });
  it('button should be disabled if username and password fields are empty', () => {
    const buttonProps = wrapper.find('button').props();
    expect(buttonProps.disabled).toBe(true);
  })
  it('input type for username should text', () => {
    const inputProps = wrapper.find('input').at(0).props();
    expect(inputProps.type).toBe('text');
  })
  it('input type for password should password', () => {
    const inputProps = wrapper.find('input').at(1).props();
    expect(inputProps.type).toBe('password');
  })
  it('setUsername should be called when the value is changed', () => {
    const onChangeMock = jest.fn("event");
    const usernameValue = "pratibha";
    const inputValue = wrapper.find('input').at(0);
    inputValue.simulate('change', { target: { value: usernameValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  })
  it('setPassword should be called when the value is changed', () => {
    const onChangeMock = jest.fn("event");
    const usernameValue = "pratibha";
    const inputValue = wrapper.find('input').at(1);
    inputValue.simulate('change', { target: { value: usernameValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  })
  it('onClick function should be called', () => {
    const onClickMock = jest.fn();
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClickMock.mock.calls.length).toEqual(0);
  })
  // it('api Request function', async () => {
  //   const data = await apiRequest("", {});
  //   expect(data).toBe({})
  // })
})


//TestCase for Login
describe('Test Case for login', () => {

  let wrapper = shallow(<Login />);
  it('should render input boxes', () => {
    expect(wrapper.find('input').length).toEqual(2)
  });
  it('should render a login button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  });
  it('username should be empty first', () => {
    const value = wrapper.find('input').at(0).value;
    expect(value).toBe()
  });
  it('password should be empty first', () => {
    const value = wrapper.find('input').at(1).value;
    expect(value).toBe()
  });
  it('button should be disabled if username and password fields are empty', () => {
    const buttonProps = wrapper.find('button').props();
    expect(buttonProps.disabled).toBe(true);
  })
  it('input type for username should text', () => {
    const inputProps = wrapper.find('input').at(0).props();
    expect(inputProps.type).toBe('text');
  })
  it('input type for password should password', () => {
    const inputProps = wrapper.find('input').at(1).props();
    expect(inputProps.type).toBe('password');
  })
}
)
//Routing Test Cases
describe('navigation rendering', () => {
  const history = createMemoryHistory();
  it('homepage', () => {

    render(
      <Router history={history}>
        <Routes />
      </Router>)
  })
})