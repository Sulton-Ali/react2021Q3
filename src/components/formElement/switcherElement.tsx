import React from 'react';
import {FormElementProps} from './formElement';

export default function SwitcherElement(props: FormElementProps): JSX.Element {
  return (
    <div className="form-element switcher">
      <label className="form-element__label">
        <div className="switcher__body">
          <input
            type="radio"
            onClick={() => {
              props.changeHandler(!props.value);
            }}
          />
          <div
            className={`switcher__circle-wrapper ${
              props.value ? 'checked' : ''
            }`}>
            <div
              className={`switcher__circle ${
                props.value ? 'checked' : ''
              }`}></div>
          </div>
        </div>
        <span>{props.label}</span>
      </label>
    </div>
  );
}
