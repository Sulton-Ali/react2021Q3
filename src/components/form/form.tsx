import React from 'react';
import FormElement, {FormElementProps} from '../formElement/formElement';
import './form.scss';

interface IFormProps {
  title?: string;
  elements: FormElementProps[];
}

const Form = (props: IFormProps): JSX.Element => {
  return (
    <form className="form">
      <h2 className="form__title">{props.title}</h2>
      <div className="form__body">
        {props.elements?.map((el, idx) => (
          <FormElement {...el} key={idx} />
        ))}
      </div>
    </form>
  );
};

export default Form;
