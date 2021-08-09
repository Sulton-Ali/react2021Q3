import React, {Component} from 'react';
import Form from '../form/form';
import {FormElementTypeConstants} from '../formElement/formElement';
import SearchBar from '../searchbar/searchbar';

import './app.scss';

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    dateOfBorn: '',
    gender: '',
    married: false,
    haveChildren: false,
    users: [],
  };

  onSubmit = (): void => {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBorn: this.state.dateOfBorn,
      gender: this.state.gender,
      married: this.state.married,
      haveChildren: this.state.haveChildren,
    };
    this.setState({
      users: [...this.state.users, newUser],
    });
    this.setState({
      firstName: '',
      lastName: '',
      dateOfBorn: '',
      gender: '',
      married: false,
      haveChildren: false,
    });
  };

  render(): JSX.Element {
    console.log(this.state.users);

    const formElements = [
      {
        label: 'First Name',
        value: this.state.firstName,
        type: FormElementTypeConstants.TEXT,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            firstName: value,
          }),
      },
      {
        label: 'Last Name',
        value: this.state.lastName,
        type: FormElementTypeConstants.TEXT,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            lastName: value,
          }),
      },
      {
        label: 'Date of born',
        value: this.state.dateOfBorn,
        type: FormElementTypeConstants.DATE,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            dateOfBorn: value,
          }),
      },
      {
        label: 'Gender',
        value: this.state.gender,
        type: FormElementTypeConstants.DROPDOWN,
        items: ['Male', 'Female'],
        changeHandler: (value: string | boolean): void =>
          this.setState({
            gender: value,
          }),
      },
      {
        label: 'Married',
        value: this.state.married,
        type: FormElementTypeConstants.SWITCHER,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            married: value,
          }),
      },
      {
        label: 'Have a children',
        type: FormElementTypeConstants.CHECKBOX,
        value: this.state.haveChildren,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            haveChildren: value,
          }),
      },
    ];
    return (
      <div className="app">
        <SearchBar buttonText="Search" placeholder="Enter search text" />
        <Form title="Form" elements={formElements} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
