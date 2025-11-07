import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import { Home } from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

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
        path: 'auth',
        element: <h2>Auth layout</h2>
    },
    {
        path: '*',
        element: <h2>Error Page</h2>

    }
])

export default router;