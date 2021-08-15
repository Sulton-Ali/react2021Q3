import React, {useState} from 'react';

import './dropdownElement.scss';

export type DropdownItem = {
  key: string;
  value: string;
};

export type DropdownElementProps = {
  label: string;
  placeholder: string;
  value: string;
  items: DropdownItem[];
  changeHandler: (value: string) => void;
};

export default function DropdownElement(
  props: DropdownElementProps,
): JSX.Element {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="dropdown">
      <label className="dropdown__label">
        <p className="dropdown__text">{props.label}</p>
        <div className="dropdown__selected" onClick={() => setListOpen(true)}>
          {props.value ? props.value : props.placeholder}
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
                  props.changeHandler(item.value);
                }}>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </label>
    </div>
  );
}
