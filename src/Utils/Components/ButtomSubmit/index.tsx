import { Button } from '@mui/material';

interface ButtomSubmitProps {
    variant?: 'text' | 'outlined' | 'contained';
    fullWidth?: boolean;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
}

export const ButtomSubmit: React.FC<ButtomSubmitProps> = ({
    variant = 'contained',
    fullWidth = true,
    type = 'submit',
    onClick,
    disabled = false,
}) => {
    return (
        <Button
            disabled={disabled}
            type={type}
            onClick={onClick}
            fullWidth={fullWidth}
            variant={variant}
            sx={{
                backgroundColor: '#bb1626',
            }}
        >
            Entrar
        </Button>
    );
};
