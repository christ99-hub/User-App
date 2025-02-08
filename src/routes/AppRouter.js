import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import { CardInfo } from "../components/CardInfo";
import { UserGrid } from "../UserGrid";


export const AppRouter = () => {

    const router = createBrowserRouter([
       
      {
        path: "*",
        element: (
            <DashboardRoutes />
        ),
      },
    
    
    
      
    ]);
    
    
      
      return <RouterProvider router={router} />;
    };
    
    
    export const DashboardRoutes = () => {
    
      
      return (
          <>
          
          <div className='container mt-2'>
          
            <Routes>
              <Route path="/users" element={<UserGrid />} /> 
              <Route path="/user/:userId" element={<CardInfo />} /> 
              {/* <Route path="/user/searchscreen" element={<SearchUser />} /> */}
              <Route path="/" element={<Navigate to="/users" replace />} />
            </Routes>
            
            </div>
            
            </>
          );
    };
    