import React, {useState} from 'react';
import {Validator} from '../../helpers/validator';
import {FormElementProps} from './formElement';

export default function DateElement(props: FormElementProps): JSX.Element {
  const [error, setError] = useState('');
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input
          type="date"
          className="input"
          value={String(props.value)}
          onChange={(evt) => {
            if (!Validator.dateValidator(evt.target.value)) {
              setError('Дата должен быть меншее чем сегодняшний и не пустым');
            } else {
            }
            props.changeHandler(evt.target.value);
          }}
        />
        <div className="form-element__error">{error}</div>
      </label>
    </div>
  );
}
