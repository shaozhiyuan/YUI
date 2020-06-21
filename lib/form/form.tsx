import React, {ReactFragment} from 'react';
import classes from '../helpers/classes';
import Input from '../input/input';

import './form.scss';

export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };

  return (
    <form onSubmit={onSubmit} className="yui-form">
      <table>
        {
          props.fields.map((field) => {
            return (
             <tr key={field.name} className={classes('yui-form-tr')}>
               <td className="yui-form-td">
                <span className="yui-form-label">{field.label}</span>
               </td>
               <td className="yui-form-td">
                 <Input
                   type={field.input.type}
                   onChange={(e) => onInputChange(field.name, e.target.value)}
                 />
               </td>
             </tr>
            );
          })
        }
        <tr className="yui-form-tr">
          <td className="yui-form-td"></td>
          <td className="yui-form-td">{props.buttons}</td>
        </tr>
      </table>
    </form>
  );
};

export default Form;