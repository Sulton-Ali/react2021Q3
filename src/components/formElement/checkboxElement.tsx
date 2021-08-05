import React from 'react';

export type CheckboxElementProps = {
  label: string;
  type: string;
};

export default function CheckboxElement(
  props: CheckboxElementProps,
): JSX.Element {
  return (
    <div className="form-element checkbox">
      <label className="form-element__label">
        <input type="checkbox" />
        <p>{props.label}</p>
      </label>
    </div>
  );
}
