import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './text-field.module.css';

interface TextFieldFormProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    id: string;
    label: string;
    name?: string;
    type?: string;
}

export const TextFieldForm: React.FC<TextFieldFormProps> = ({
    value,
    onChange,
    id,
    label,
    name,
    type = 'text',
    autoFocus = false,
}) => (
    <TextField
        className={styles.textFieldform}
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        autoComplete="email"
        autoFocus={autoFocus}
        value={value}
        type={type}
        onChange={onChange}
        InputProps={{
            sx: {
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7e7e7e',
                },
            },
        }}
        InputLabelProps={{
            sx: {
                color: 'black',
                '&.Mui-focused': {
                    color: 'black',
                },
            },
        }}
    />
);
