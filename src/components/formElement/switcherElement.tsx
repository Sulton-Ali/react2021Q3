import React, {useState} from 'react';

export type SwitcherElementProps = {
  type: string;
  label: string;
};

export default function SwitcherElement(
  props: SwitcherElementProps,
): JSX.Element {
  const [checked, setChecked] = useState(false);

  return (
    <div className="form-element switcher">
      <label className="form-element__label">
        <div className="switcher__body">
          <input
            type="checkbox"
            onChange={(evt) => setChecked(evt.target.checked)}
          />
          <div
            className={`switcher__circle-wrapper ${checked ? 'checked' : ''}`}>
            <div
              className={`switcher__circle ${checked ? 'checked' : ''}`}></div>
          </div>
        </div>
        <p>{props.label}</p>
      </label>
    </div>
  );
}
