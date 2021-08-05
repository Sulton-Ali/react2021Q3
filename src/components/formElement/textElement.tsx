import React from 'react';

export type TextElementProps = {
  label: string;
  type: string;
};

const TextElement = (props: TextElementProps): JSX.Element => {
  return (
    <div className="form-element">
      <label className="form-element__label">
        <p>{props.label}</p>
        <input type="text" className="input" />
      </label>
    </div>
  );
};

export default TextElement;
