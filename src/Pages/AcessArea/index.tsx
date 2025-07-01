import { Box, Container, Grid as Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './AccessArea.module.css';

export const AccessArea = () => {
    return (
        <Box className={styles.accessArea}>
            <Grid container height={'100vh'} justifyContent={'center'}>
                <Grid
                    size={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }}
                    overflow="hidden"
                    sx={{ height: '100vh', overflow: 'hidden' }}
                >
                    <Container>
                        <Box className={styles.formContainer}>
                            <Outlet />
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};
