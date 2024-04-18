import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from "./screens/home";
import NotesScreen from "./screens/notes";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";

const Routes = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <HomeScreen />
    },
    {
        path: '/notes',
        exact: true,
        element: <NotesScreen />
    },
    {
        path: '/auth',
        children: [
            {
                path: 'register',
                exact: true,
                element: <RegisterScreen />
            },
            {
                path: 'login',
                exact: true,
                element: <LoginScreen />
            }
        ]
    }
])

export default Routes;