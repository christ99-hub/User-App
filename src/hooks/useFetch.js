import { useEffect, useState } from "react";
import { userFetch } from "../helpers/userFetch";

export const useFetch = () => {
    const [data, setData] = useState({ loading: false, data: [] });
    
    useEffect(() => {
        const fetchData = async () => {
          setData({ loading: true, data: [] });
          try {
            const users = await userFetch();
            setData({ loading: false, data: users });
          } catch (error) {
            console.error(error);
            setData({ loading: false, data: [] });
          }
        };
      
        fetchData();
      }, []); 
      
  
    return data;
  };
  