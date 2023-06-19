import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import Whatwedo from './pages/Whatwedo';
import OurProjects from './pages/Ourprojects';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Whoarewe from './pages/Whoarewe';
import Whatwebelieve from './pages/Whatwebelieve';
import Lightschool from './pages/Lightschool';
import Articles from './pages/Articles';
import Carbonemission from './pages/Carbonemission';
import LightFinder from './pages/LightFinder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "whatWeDo",
    element: <Whatwedo />
  },
  {
    path: "ourprojects",
    element: <OurProjects />
  },
  {
    path: "whoarewe",
    element: <Whoarewe />
  },
  {
    path: "whatwebelieve",
    element: <Whatwebelieve /> 
  },
  {
    path: "lightschool",
    element: <Lightschool />
  },
  {
    path: "articles",
    element: <Articles />
  },
  {
    path: "carbonemission",
    element: <Carbonemission />
  },
  {
    path: "lightfinder",
    element: <LightFinder />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
