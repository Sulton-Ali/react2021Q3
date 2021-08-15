import React from 'react';
import CheckboxElement from './checkboxElement';
import TextElement from './textElement';

import './formElement.scss';
import SwitcherElement from './switcherElement';

export type FormElementProps = {
  label: string;
  type: string;
  value: string | boolean;
  items?: string[] | undefined;
  changeHandler: (value: string | boolean) => void;
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
    case FormElementTypeConstants.SWITCHER:
      return <SwitcherElement {...props} />;
    case FormElementTypeConstants.CHECKBOX:
      return <CheckboxElement {...props} />;
    default:
      return <div>Element not found</div>;
  }
};

export default FormElement;
