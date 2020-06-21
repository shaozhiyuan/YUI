import React, {useState, Fragment} from 'react';
import Form, {FormValue} from './form';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '用户名', input: {type: 'password'}},
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     console.log(e);
  };
  return (
    <Form
      value={formData} fields={fields}
      onSubmit={onSubmit}
      buttons={
        <Fragment>
          <Button type="submit" level="important">提交</Button>
          <Button>取消</Button>
        </Fragment>
      }
      onChange={(newValue) => setFormData(newValue)}
    >

    </Form>
  );
};

export default FormExample;