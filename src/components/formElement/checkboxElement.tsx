import React from 'react';
import {FormElementProps} from './formElement';

export default function CheckboxElement(props: FormElementProps): JSX.Element {
  return (
    <div className="form-element checkbox">
      <label className="form-element__label">
        <div className={`checkbox__indicator ${props.value ? 'checked' : ''}`}>
          <div className="checkbox__line-1"></div>
          <div className="checkbox__line-2"></div>
        </div>
        <input
          type="checkbox"
          checked={Boolean(props.value)}
          onChange={(evt) => {
            props.changeHandler(evt.target.checked);
          }}
        />
        <p>{props.label}</p>
      </label>
    </div>
  );
}
