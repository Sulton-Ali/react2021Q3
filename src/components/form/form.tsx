import React from 'react';
import FormElement, {FormElementProps} from '../formElement/formElement';
import './form.scss';

interface IFormProps {
  title?: string;
  elements: Array<FormElementProps>;
  onSubmit: () => void;
}

const Form = (props: IFormProps): JSX.Element => {
  return (
    <form className="form">
      <h2 className="form__title">{props.title}</h2>
      <div className="form__body">
        {props.elements?.map((el, idx) => (
          <FormElement {...el} key={idx} />
        ))}

        <div className="form__buttons">
          <button type="button" className="btn" onClick={props.onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
