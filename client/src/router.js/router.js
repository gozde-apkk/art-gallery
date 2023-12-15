import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop/',
                element: <Shop/>
            }

        ]
    }
])