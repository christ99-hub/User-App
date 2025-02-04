import { useEffect, useMemo, useState } from "react";
import { getUser } from "../helpers/getUser";

export const useUsers = (name) => {
  const [state, setState] = useState({
    loading: false,
    data: []
  });

  const memoizedName = useMemo(() => name, [name]);

  useEffect(() => {
    if (!memoizedName) return; 

    const fetchUsers = async () => {
      setState({ loading: true, data: [] });
      try {
        const users = await getUser(memoizedName);
        setState({ loading: false, data: users });
      } catch (error) {
        console.error(error);
        setState({ loading: false, data: [] });
      }
    };

    fetchUsers();
  }, [memoizedName]); 

  return state;
};
