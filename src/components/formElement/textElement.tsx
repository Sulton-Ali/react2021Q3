import React from 'react';
import {FormElementProps} from './formElement';

const TextElement = (props: FormElementProps): JSX.Element => {
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input
          type="text"
          className="input"
          value={String(props.value)}
          onChange={(evt) => {
            props.changeHandler(evt.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default TextElement;
