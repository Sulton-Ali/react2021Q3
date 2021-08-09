import React from 'react';
import {FormElementProps} from './formElement';

export default function DateElement(props: FormElementProps): JSX.Element {
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input
          type="date"
          className="input"
          value={String(props.value)}
          onChange={(evt) => {
            props.changeHandler(evt.target.value);
          }}
        />
      </label>
    </div>
  );
}
