import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { listEntity } from "../../core/list.entity";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
  items: listEntity[]
  name: string;
  label?: string;
  type?: string;
  onChange: (field: string, value: string) => void;
  value: string;
  error?: string;
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

export const TextFieldSelect: React.FC<Props> = (props) => {
  const {name, label, onChange, value, error, onBlur, type, items} = props;

  return (
    <TextField
      select
      label={label}
      value={value}
      type={type}
      onBlur={handleBlur(name, onBlur)}
      onChange={handleChange(name, onChange)}
      margin="normal"
      error={Boolean(error)}
      helperText={error}
    >
      {items.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {item.value}
        </MenuItem>
      ))}
    </TextField>
  )
}

TextFieldSelect.defaultProps = {
  type: 'text',
}