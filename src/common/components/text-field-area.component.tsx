import TextField from '@material-ui/core/TextField';
import * as React from 'react';

interface Props {
  name: string;
  label: string;
  onChange: (field: string, value: string) => void;
  value: string;
  error?: string;
  type?: string;
  onBlur?: (field: string, value) => void;
  fullWidth?: boolean;
  rows?: number;
  multiline?: boolean
}

const handleChange = (field: string, onChange) => e => {
  onChange(field, e.target.value);
};

const handleBlur = (field: string, onBlur) => e => {
  if (onBlur) {
    onBlur(field, e.target.value);
  }
};

export const TextFieldArea: React.FC<Props> = (props) => {
  const {name, label, onChange, value, error, type, onBlur, fullWidth, rows, multiline} = props;

  return (
    <TextField
      label={label}
      margin="normal"
      value={value}
      type={type}
      multiline={multiline}
      rows={rows}
      fullWidth={fullWidth}
      onChange={handleChange(name, onChange)}
      onBlur={handleBlur(name, onBlur)}
      error={Boolean(error)}
      helperText={error}
    />
  )
}

TextFieldArea.defaultProps = {
  type: 'text',
}