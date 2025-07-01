import { createBrowserRouter } from 'react-router-dom';
import { AccessArea } from '../Pages/AcessArea';
import { RegisterForm } from '../Components/RegisterForm';
import { ProjetoDatabase } from '../Pages/ProjetoDatabase';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <ProjetoDatabase />,
    },
    {
        path: '/',
        element: <AccessArea />,
        children: [
            {
                path: '/register',
                element: <RegisterForm />,
            },
        ],
    },
]);
