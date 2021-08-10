import React, {Component} from 'react';
import Form from '../form/form';
import {FormElementTypeConstants} from '../formElement/formElement';
import SearchBar from '../searchbar/searchbar';
import {State, User} from '../../models/stateModels';

import './app.scss';
import {Validator} from '../../helpers/validator';

const initialState: State = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  married: false,
  haveChildren: false,
  users: [],
};

const initialUser: User = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  married: false,
  haveChildren: false,
};

export default class App extends Component {
  state: State = initialState;

  onSubmit = (): void => {
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      married: this.state.married,
      haveChildren: this.state.haveChildren,
    };
    if (!Validator.userValidator(newUser)) {
      alert('Данные заполнены не правильно!!!');
    } else {
      this.setState({
        users: [...this.state.users, newUser],
      });
      this.setState(initialUser);
    }
  };

  render(): JSX.Element {
    const formElements = [
      {
        label: 'Имя',
        value: this.state.firstName,
        type: FormElementTypeConstants.TEXT,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            firstName: value,
          }),
      },
      {
        label: 'Фамилия',
        value: this.state.lastName,
        type: FormElementTypeConstants.TEXT,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            lastName: value,
          }),
      },
      {
        label: 'Дата рождения',
        value: this.state.dateOfBirth,
        type: FormElementTypeConstants.DATE,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            dateOfBirth: value,
          }),
      },
      {
        label: 'Пол',
        value: this.state.gender,
        type: FormElementTypeConstants.DROPDOWN,
        items: ['Мужчина', 'Женщина'],
        changeHandler: (value: string | boolean): void =>
          this.setState({
            gender: value,
          }),
      },
      {
        label: 'Женат/замужем ?',
        value: this.state.married,
        type: FormElementTypeConstants.SWITCHER,
        changeHandler: (value: string | boolean): void =>
          this.setState({
            married: value,
          }),
      },
      {
        label: 'Имеется ли детей',
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
