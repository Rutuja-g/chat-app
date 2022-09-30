import React from 'react';
import { Input } from 'rsuite';

const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = 'Write your value',
  emptMsg = 'Input is empty',
  ...inputProps
}) => {
  return (
    <div>
      {label}
      <Input />
    </div>
  );
};

export default EditableInput;
