import React from 'react';

export type DateElementProps = {
  label: string;
  type: string;
};

export default function DateElement(props: DateElementProps): JSX.Element {
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input type="date" className="input" />
      </label>
    </div>
  );
}
