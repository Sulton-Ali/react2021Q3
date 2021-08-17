import React, {useState} from 'react';
import {Validator} from '../../helpers/validator';

import './dateElement.scss';

export type DateElementProps = {
  label: string;
  value: string;
  placeholder: string;
  changeHandler: (value: string) => void;
};

export default function DateElement(props: DateElementProps): JSX.Element {
  const [error, setError] = useState('');
  return (
    <div className="date-element">
      <label className="date-element__label">
        <p className="date-element__text">{props.label}</p>
        <input
          type="date"
          className="input"
          value={props.value}
          placeholder={props.placeholder}
          onChange={(evt) => {
            if (!Validator.dateValidator(evt.target.value)) {
              setError('Дата должен не больше чем сегодняшний и не пустым');
            } else {
              setError('');
            }
            props.changeHandler(evt.target.value);
          }}
        />
        <div className="date-element__error">{error}</div>
      </label>
    </div>
  );
}
