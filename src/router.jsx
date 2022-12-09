import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Careers from "./pages/careers";
import Job from "./pages/careers/job";
import Contact from "./pages/contact";
import Faculty from "./pages/faculty";
import Profile from "./pages/faculty/profile";
// import Home from "./pages/home";
import Registration from "./pages/registration";
import University from "./pages/university";
import Uni from "./pages/university/university";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            // {
            //     index: true,
            //     element: <Home />

            // },
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
            },
            {
                path:'faculty',
                element:<Faculty />
            },
            {
                path:'faculty/:id',
                element:<Profile />
            },
            {
                path:'careers',
                element:<Careers />
            },
            {
                path:'careers/:id',
                element:<Job />
            },
            {
                path:'university',
                element:<University/>
            },
            {
                path:'university/:id',
                element:<Uni />
            }
        ]
    }
])

export default router