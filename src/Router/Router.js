import { createBrowserRouter } from "react-router-dom";
import Menu from "../component/Menu/Menu";
import Main from "../component/Main/Main";
import Burger from "../component/pages/Burger/Burger";
import MeatBox from "../component/pages/MeatBox/MeatBox";
import Pizza from "../component/pages/Pizza/Pizza";
import Fries from "../component/pages/Fries/Fries";
import Shakes from "../component/pages/Shakes/Shakes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Burger></Burger>,
        },
        {
            path: "/meatbox",
            element: <MeatBox></MeatBox>,
        },
        {
            path: "/pizza",
            element: <Pizza></Pizza>,
        },
        {
            path: "/fries",
            element: <Fries></Fries>,
        },
        {
            path: "/shakes",
            element: <Shakes></Shakes>,
        }
      
      ]
    },
  ]);
  