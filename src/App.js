// import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { lazy, Suspense, useState } from 'react';
import UserContext from './utils/userContext';



const Contact = lazy(() => import('./components/Contact'))

const AppLayout = () => {

    const [user, setUser] = useState("defaiult")
    return (
    <UserContext.Provider value={{user: user, setUser}} setUser>
    <div className='app'>
        <Outlet />
    </div>
    </UserContext.Provider>)
}

const appRouter = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Suspense > <Contact /> </Suspense>
                // element: <Contact />
            },
        ],
        errorElement: <Error />

    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>); // how babel understand functional component

import 'bootstrap/dist/css/bootstrap.min.css';