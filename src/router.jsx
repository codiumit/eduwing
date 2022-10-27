import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Registration from "./pages/registration";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />

            },
            {
                path:'/registration',
                element: <Registration />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
])

export default router