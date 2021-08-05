import React from 'react';
import Form from '../form/form';
import {FormElementTypeConstants} from '../formElement/formElement';
import SearchBar from '../searchbar/searchbar';

import './app.scss';

export default function App(): JSX.Element {
  const formElements = [
    {
      label: 'First Name',
      type: FormElementTypeConstants.TEXT,
    },
    {
      label: 'Last Name',
      type: FormElementTypeConstants.TEXT,
    },
    {
      label: 'Date of born',
      type: FormElementTypeConstants.DATE,
    },
    {
      label: 'Gender',
      type: FormElementTypeConstants.DROPDOWN,
      items: ['Male', 'Female'],
    },
    {
      label: 'Married',
      type: FormElementTypeConstants.SWITCHER,
    },
    {
      label: 'Have a children',
      type: FormElementTypeConstants.CHECKBOX,
    },
  ];

  return (
    <div className="app">
      <SearchBar buttonText="Search" placeholder="Enter search text" />
      <Form title="Form" elements={formElements} />
    </div>
  );
}
