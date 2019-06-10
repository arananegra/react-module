import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  name : string;
  label : string;
  onChange : (field : string, value) => void;
  value : string;
  error? : string;
  type?: string;
  onBlur?: (field: string, value) => void;
}

const handleChange = (field: string, onChange) => e => {
  onChange(field, e.target.value);
};

const handleBlur = (field: string, onBlur) => e => {
  if (onBlur) {
    onBlur(field, e.target.value);
  }
};

export const TextFieldForm : React.FC<Props> = (props) =>  {
  const {name, label, onChange,value, error, type, onBlur} = props;

  return (  
      <TextField
        label={label}
        margin="normal"
        value={value}
        type={type}
        onChange={handleChange(name, onChange)}
        onBlur={handleBlur(name, onBlur)}
        error={Boolean(error)}
        helperText={error}        
      />      
  )
}

TextFieldForm.defaultProps = {
  type: 'text',
}