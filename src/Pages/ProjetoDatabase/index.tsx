import { Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ProjetoDatabase.module.css';

export const ProjetoDatabase = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/register');
    };

    return (
        <Box className={styles.page}>
            <Grid
                container
                spacing={0}
                height={'100vh'}
                justifyContent={'center'}
            >
                <Grid
                    size={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display={'flex'}
                        flexDirection="row"
                        justifyContent="center"
                        gap={2}
                        alignItems="center"
                    >
                        <Button onClick={handleNavigateLogin}>
                            Vamos começar!
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
