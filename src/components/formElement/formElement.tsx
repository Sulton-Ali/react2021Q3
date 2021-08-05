import React from 'react';
import CheckboxElement from './checkboxElement';
import DateElement from './dateElement';
import DropdownElement from './dropdownElement';
import TextElement from './textElement';

import './formElement.scss';
import SwitcherElement from './switcherElement';

export type FormElementProps = {
  label: string;
  type: string;
  items?: string[];
};
export const FormElementTypeConstants = {
  TEXT: 'TEXT',
  DATE: 'DATE',
  SWITCHER: 'SWITCHER',
  DROPDOWN: 'DROPDOWN',
  CHECKBOX: 'CHECKBOX',
};

const FormElement = (props: FormElementProps): JSX.Element => {
  switch (props.type) {
    case FormElementTypeConstants.TEXT:
      return <TextElement {...props} />;
    case FormElementTypeConstants.DATE:
      return <DateElement {...props} />;
    case FormElementTypeConstants.DROPDOWN:
      return <DropdownElement {...props} />;
    case FormElementTypeConstants.SWITCHER:
      return <SwitcherElement {...props} />;
    case FormElementTypeConstants.CHECKBOX:
      return <CheckboxElement {...props} />;
    default:
      return <div>Element not found</div>;
  }
};

export default FormElement;
