import React from 'react';
import { Form } from 'react-bootstrap';

function InputCheck({ checked, onChangeFunc, label }) {
  return (
    <Form.Group controlId='formBasicCheckbox'>
      <Form.Check
        type='checkbox'
        label={label}
        checked={checked}
        onChange={(e) => {
          onChangeFunc(e.target.checked);
        }}
      />
    </Form.Group>
  );
}

export default InputCheck;
