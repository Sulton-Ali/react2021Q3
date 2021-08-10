import React, {useState} from 'react';
import {FormElementProps} from './formElement';
import {Validator} from './../../helpers/validator';

const TextElement = (props: FormElementProps): JSX.Element => {
  const [error, setError] = useState('');
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input
          type="text"
          className="input"
          value={String(props.value)}
          onChange={(evt) => {
            if (!Validator.textValidator(evt.target.value)) {
              setError(
                'Только буквы латиницы и кириллицы, не должен быть пустым',
              );
              return false;
            } else {
              setError('');
            }
            props.changeHandler(evt.target.value);
          }}
        />
        {error && <div className="form-element__error">{error}</div>}
      </label>
    </div>
  );
};

export default TextElement;
