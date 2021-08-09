import React, {useState} from 'react';
import {FormElementProps} from './formElement';

export default function DropdownElement(props: FormElementProps): JSX.Element {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="form-element dropdown">
      <label className="form-element__label">
        <p>{props.label}</p>
        <div className="dropdown__selected" onClick={() => setListOpen(true)}>
          {props.value ? props.value : 'Choose gender'}
        </div>
        <div style={{position: 'relative'}}>
          <div
            className={`dropdown__list ${
              !listOpen ? 'dropdown__list--hidden' : ''
            }`}>
            {props.items?.map((item, idx) => (
              <div
                className="dropdown__item"
                key={idx}
                onClick={() => {
                  setListOpen(false);
                  props.changeHandler(item);
                }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </label>
    </div>
  );
}
