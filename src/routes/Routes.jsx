import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout/>
        },
        {
            path: '/auth',
            element: <h2>Authentication</h2>
        },
        {
            path: '/news',
            element: <h2>News</h2>
        },
        {
            path: '/*',
            element: <h2>404 ERROR</h2>
        }
    ]
)


export default router;