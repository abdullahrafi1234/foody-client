import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import FoodDetails from "../pages/AvailableFood/FoodDetails";
import MyFoods from "../pages/MyFoods/MyFoods";
import UpdateFood from "../pages/MyFoods/UpdateFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addFood')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add-food',
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path: '/available-food',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/addFood')
      },
      {
        path: '/food-details/:id',
        element: <PrivateRoute>
          <FoodDetails></FoodDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addFood/${params.id}`)
      },
      {
        path: '/my-foods',
        element: <PrivateRoute>
          <MyFoods></MyFoods>
        </PrivateRoute>
      },
      {
        path:'/update-food/:id',
        element: <PrivateRoute>
          <UpdateFood></UpdateFood>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addFood/${params.id}`)
      }
    ]
  },
]);

export default Router;