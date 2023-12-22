import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Regestration from "../Pages/Regestration/Regestration";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Dashboard from "../Pages/Dashboard/DashboardHome/Dashboard";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import DeleteToDo from "../Pages/Dashboard/DeleteToDo/DeleteToDo";
import ToDo from "../Pages/Dashboard/ToDo/ToDo";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
    {
        path: "login",
      element: <Login></Login> 
    },
    {
        path: "Registration",
      element: <Regestration></Regestration> 
    }
    ,
    {
        path: "Dashboard",
      element: <DashboardLayout></DashboardLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "DashboardHome",
          element: <Dashboard></Dashboard>
        },
        {
          path: "CreateTask",
          element: <CreateTask></CreateTask>
        },
        {
          path: "DeleteToDo",
          element: <DeleteToDo></DeleteToDo>
        },
        {
          path: "ToDo",
          element: <ToDo></ToDo>
        },
      ],
    }
  ]);

  export default router