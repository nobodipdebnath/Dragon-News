import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import { Home } from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import LoginPage from "../Page/LoginPage";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'category/:id',
                Component: CategoryNews, 
                loader: ()=> fetch('/news.json')
            }
        ]
        
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: LoginPage,
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news-details/:id',
        Component: NewsDetails,
        loader: () => fetch('/news.json')
    },
    {
        path: '*',
        element: <h2>Error Page</h2>

    }
])

export default router;