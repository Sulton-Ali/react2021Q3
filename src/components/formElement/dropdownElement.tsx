import React, {useState} from 'react';

export type DropdownElementProps = {
  label: string;
  type: string;
  items?: string[];
};

export default function DropdownElement(
  props: DropdownElementProps,
): JSX.Element {
  const [selected, setSelected] = useState('Choose gender');
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="form-element dropdown">
      <label className="form-element__label">
        <p>{props.label}</p>
        <div className="dropdown__selected" onClick={() => setListOpen(true)}>
          {selected}
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
                  setSelected(item);
                  setListOpen(false);
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
